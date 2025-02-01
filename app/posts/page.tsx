import Link from "next/link";
import POSTS from "@/json/posts.json";
import { PageHeader } from "../components";

export default function PostsPage() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Posts" />
      <article className="mt-24 px-4">
        <ol className="flex flex-col gap-6">
          {POSTS.map((post) => {
            return (
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
            );
          })}
        </ol>
      </article>
    </div>
  );
}
