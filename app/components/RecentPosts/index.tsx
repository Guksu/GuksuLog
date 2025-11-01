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
      <h2 className="font-bold text-xl md:text-2xl text-teal-500 mb-6">최신소식</h2>
      <article>
        <ol className="flex flex-col gap-6 md:gap-8 max-w-xl">
          {posts.slice(0, 4).map((post) => {
            return (
              <li
                key={post.idx}
                className="border-b border-gray-200 dark:border-gray-700 pb-4 md:pb-6"
              >
                <Link href={`/posts/${post.idx}`} className="block">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-2 md:mb-3">
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
            );
          })}
        </ol>
      </article>
    </main>
  );
}
