import Link from "next/link";
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
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetStaticPropsResult } from "next";
import { getAllInfluencers } from "@/lib/character-apis";
import { NextSeo } from "next-seo";
import Page from "@/components/landing/page";
import Head from "next/head";

type TExplorePageProps = {
  characters: TInfluencer[];
};

export default function ExplorePage(props: TExplorePageProps) {
  return (
    <Page>
      <NextSeo
        title="SoundCast.ai"
        description="Explore our AI Personalities"
      />
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2EFS549HWS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2EFS549HWS');
            `,
          }}
        />
      </Head>
      <main>
        <div className="container mx-auto px-4 py-8 mb-24">
          <h1 className="text-3xl font-bold mb-8">Explore AI Replicas</h1>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <Input className="flex-grow" placeholder="Search AI bots..." />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.characters.map((character) => (
              <Link
                href={`/characters/${character.id}`}
                key={character.id}
                className="transition-transform hover:scale-105"
              >
                <Card className="flex flex-col h-full overflow-hidden">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={character.imageUrl}
                          alt={character.name}
                        />
                        <AvatarFallback>
                          {character.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {character.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {character.tags.join(", ")}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm">{character.description}</p>
                  </CardContent>
                  <CardFooter className="flex-shrink-0">
                    <Button className="w-full">Chat Now</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Page>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<TExplorePageProps>
> {
  const characters = await getAllInfluencers();

  if (!characters) {
    return {
      props: {
        characters: [],
      },
    };
  }

  return {
    props: { characters },
  };
}
