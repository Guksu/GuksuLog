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
      <div className="flex items-center justify-between mb-8 max-w-xl">
        <h2 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
          최신 포스트
        </h2>
        <Link
          href="/posts"
          className="text-xs font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          모두 보기 →
        </Link>
      </div>
      <article>
        <ol className="flex flex-col gap-0 max-w-xl">
          {posts.slice(0, 4).map((post) => {
            return (
              <li key={post.idx}>
                <Link href={`/posts/${post.idx}`} className="group block py-5 border-b border-gray-100 dark:border-gray-700/60 hover:border-teal-500/30 transition-colors">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 leading-snug mb-1.5 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-2">
                    {post.summary}
                  </p>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tabular-nums">
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
