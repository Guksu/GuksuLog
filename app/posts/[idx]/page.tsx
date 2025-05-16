import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { PageHeader } from "@/components";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import "./style.css";
import rehypeHighlight from "rehype-highlight";

type Props = {
  params: { idx: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function Posts({ params }: Props) {
  const idx = (await params).idx;
  const { data, content } = await getPostData(idx);

  return (
    <div className="flex items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Posts" />
      <div className="mt-24 max-w-5xl w-full">
        <article>
          <h1 className="font-bold text-lg text-slate-900 dark:text-white">
            {data.title}
          </h1>
          <span className="block mt-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 pb-4 ">
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
    </div>
  );
}

async function getPostData(idx: string) {
  const filePath = path.join(process.cwd(), "posts", `${idx}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { data, content };
}
