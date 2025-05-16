import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { PageHeader } from "@/components";
import { PostMeta } from "@/interface/post";

export const dynamic = "force-static"; // 빌드 시 정적으로 생성

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
        <ol className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.idx} className="border-b border-gray-300 pb-4">
              <Link href={`/posts/${post.idx}`} className="block">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {post.title}
                </h4>
                <p className="my-2 text-sm text-slate-600 dark:text-slate-400">
                  {post.summary}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
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
