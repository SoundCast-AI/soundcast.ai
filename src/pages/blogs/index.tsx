import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

import Image from "next/image";
import { GetStaticPropsResult } from "next";
import { NextSeo } from "next-seo";
import Page from "@/components/landing/page";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs-apis";

type TBlogsPage = {
  blogs: Blogs[];
};

export default function BlogsPage(props: TBlogsPage) {
  const [blogContent, setBlogContent] = useState<string>("");
  const [formattedDates, setFormattedDates] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredBlogs, setFilteredBlogs] = useState(props.blogs);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filtered = props.blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const allContent = filtered.map((blog) => blog.content).join(" ");
    setBlogContent(allContent);

    const dates = filtered.map((blog) => {
      const convertDate = new Date(blog.createdAt);
      return isNaN(convertDate.getTime())
        ? "Invalid date"
        : format(convertDate, "dd MMM yyyy");
    });

    setFormattedDates(dates);
    // setFilteredBlogs(filtered);
  }, [searchQuery, props.blogs]);

  return (
    <Page>
      <NextSeo title="SoundCast.ai" description="Explore our blogs" />
      <main>
        <div className="container mx-auto px-4 py-8 mb-24">
          <h1 className="text-3xl font-bold mb-8">Blogs</h1>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <Input
              className="flex-grow"
              placeholder="Search blogs..."
              onChange={handleSearchChange}
              value={searchQuery}
            />
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="image">Image Generation</SelectItem>
                <SelectItem value="companion">Companion</SelectItem>
                <SelectItem value="assistant">Virtual Assistant</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {props.blogs.map((blogs) => (
              <Card key={blogs.id} className="overflow-hidden">
                <Image
                  width={20}
                  height={20}
                  src={blogs.image}
                  alt={"image"}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <h3 className="text-lg font-semibold line-clamp-2">
                    {blogs.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div
                    className="text-sm text-muted-foreground line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: blogContent,
                    }}
                  ></div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-muted-foreground line-clamp-3">
                      {blogs.author}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground line-clamp-3"></p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        {formattedDates}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/blogs/${blogs.id}`}
                    key={blogs.id}
                    className="transition-transform"
                  >
                    {" "}
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </Page>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<TBlogsPage>
> {
  const blogs = await getAllBlogs();

  if (!blogs) {
    return {
      props: {
        blogs: [],
      },
    };
  }

  return {
    props: { blogs },
  };
}
