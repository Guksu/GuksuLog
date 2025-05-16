import Link from "next/link";
import { PostMeta } from "@/interface/post";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

export default function RecentPosts() {
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
    <main>
      <p className="font-mono font-semibold text-xl text-teal-500">최신소식</p>
      <article className="mt-4">
        <ol className="flex flex-col gap-5 space-y-4 max-w-xl">
          {posts.slice(0, 4).map((post) => {
            return (
              <li
                key={post.idx}
                className="border-b border-gray-200 pb-4 cursor-pointer "
              >
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
            );
          })}
        </ol>
      </article>
    </main>
  );
}
