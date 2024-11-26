import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { getAllBlogs, getBlogById } from "@/lib/blogs-apis";
import Image from "next/image";
import Page from "@/components/landing/page";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function BlogPostDetail(props: Blogs) {
  return (
    <Page>
      <NextSeo title="SoundCast.ai" description="Blogs Page" />

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
      <article className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/blogs" passHref>
          <Button variant="ghost" className="mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <Image
          width={800}
          height={400}
          src={props.image}
          alt={props.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
        <div className="" dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </Page>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{
    id: string;
  }>
): Promise<GetStaticPropsResult<Blogs>> {
  if (!context.params?.id) {
    return {
      notFound: true,
    };
  }

  const blog = await getBlogById(context.params?.id);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: blog,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  try {
    const blogs = await getAllBlogs();

    return {
      paths: blogs.map((blog: Blogs) => ({
        params: { id: blog.id.toString() },
      })),
      fallback: false,
    };
  } catch (e: unknown) {
    console.log("Error fetching Blogs", e);

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}
