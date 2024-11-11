// import Link from "next/link";
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
import { CalendarIcon, Clock3Icon } from "lucide-react";

import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetStaticPropsResult } from "next";
import { NextSeo } from "next-seo";
import Page from "@/components/landing/page";
import { getAllBlogs } from "@/lib/blogs-apis";

// TODO: Replace with Blogs
type TBlogsPage = {
  blogs: Blogs[];
};

export default function BlogsPage(props: TBlogsPage) {
  return (
    <Page>
      <NextSeo
        title="SoundCast.ai"
        description={props.blogs[0]?.seoMetadata || ""}
      />
      <main>
        <div className="container mx-auto px-4 py-8 mb-24">
          <h1 className="text-3xl font-bold mb-8">Blogs</h1>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <Input className="flex-grow" placeholder="Search blogs..." />
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
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {blogs.content}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    {/* <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={post.author.avatar}
                        alt={post.author}
                      />
                      <AvatarFallback>{blogs.author}</AvatarFallback>
                    </Avatar> */}
                    <div>
                      <p className="text-sm font-medium">{blogs.author}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        {blogs.date}
                        <Clock3Icon className="ml-2 mr-1 h-3 w-3" />
                        {blogs.tags}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
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
  const blogs: Blogs[] = await getAllBlogs();

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
