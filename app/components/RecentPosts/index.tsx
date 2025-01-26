import Link from "next/link";
import POSTS from "@/json/posts.json";

export default function RecentPosts() {
  return (
    <main>
      <p className="font-mono font-semibold text-xl text-teal-500">최신소식</p>
      <article className="mt-4">
        <ol className="flex flex-col gap-5 space-y-4 max-w-xl">
          {POSTS.slice(0, 4).map((post) => {
            return (
              <li
                key={post.idx}
                className="border-b border-gray-200 pb-4 cursor-pointer "
              >
                <Link href={`/posts/${post.idx}`} className="block">
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    {post.title}
                  </h4>
                  <p className="my-3 my-2 text-sm text-slate-600 ">
                    {post.summary}
                  </p>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </article>
    </main>
  );
}
