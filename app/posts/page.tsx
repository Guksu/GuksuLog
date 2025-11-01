import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import { PageHeader } from "@/components";
import { PostMeta } from "@/interface/post";

export const dynamic = "force-static"; // 빌드 시 정적으로 생성

export const metadata: Metadata = {
  title: "포스트 목록 - 국수의 개발 블로그",
  description: "프론트엔드 개발 관련 블로그 포스트 목록입니다. 개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.",
  openGraph: {
    title: "포스트 목록 - 국수의 개발 블로그",
    description: "프론트엔드 개발 관련 블로그 포스트 목록입니다. 개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.",
    type: "website",
    locale: "ko_KR",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
  },
  twitter: {
    card: "summary",
    title: "포스트 목록 - 국수의 개발 블로그",
    description: "프론트엔드 개발 관련 블로그 포스트 목록입니다. 개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.",
  },
};

export default async function PostsPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: PostMeta[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      idx: filename.replace(/\.md$/, ""),
      title: data.title ?? "No Title",
      summary: data.summary ?? "No summary",
      date: data.date ?? "No date",
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Posts" />
      <article className="mt-24 px-4 w-full max-w-3xl">
        <ol className="flex flex-col gap-8">
          {posts.map((post) => (
            <li
              key={post.idx}
              className="border-b border-gray-200 dark:border-gray-700 pb-6"
            >
              <Link href={`/posts/${post.idx}`} className="block">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-3">
                  {post.title}
                </h4>
                <p className="my-2 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
                <span className="inline-block mt-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
