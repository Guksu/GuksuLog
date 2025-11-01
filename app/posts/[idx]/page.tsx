import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { PageHeader } from "@/components";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import "./style.css";
import rehypeHighlight from "rehype-highlight";

type PageParams = Promise<{ idx: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const idx = (await params).idx;

  const { data } = await getPostData(idx);

  return {
    title: `GuksuLog - ${data.title}`,
    description: data.summary,
    openGraph: {
      title: `GuksuLog - ${data.title}`,
      description: data.summary,
      type: "article",
      locale: "ko_KR",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/posts/${idx}`,
    },
    twitter: {
      title: `GuksuLog - ${data.title}`,
      description: data.summary,
    },
  };
}

export default async function Posts({ params }: { params: PageParams }) {
  const idx = (await params).idx;
  const { data, content } = await getPostData(idx);

  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Posts" />
      <article className="mt-24 px-4 w-full max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug mb-4">
          {data.title}
        </h1>
        <span className="inline-block text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium border-b border-gray-200 dark:border-gray-700 pb-6 mb-8 w-full">
          {data.date}
        </span>
        <div className="mt-5 content-container prose dark:prose-invert">
          <MDXRemote
            source={content}
            options={{
              parseFrontmatter: true,
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}

async function getPostData(idx: string) {
  const filePath = path.join(process.cwd(), "posts", `${idx}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { data, content };
}
