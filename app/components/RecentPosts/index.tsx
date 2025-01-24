import Link from "next/link";
import POSTS from "@/json/posts.json";

export default function RecentPosts() {
  return (
    <div>
      <p className="font-mono font-semibold text-xl text-teal-500">최신소식</p>
      <article className="mt-4">
        <ol className="flex flex-col space-y-4 max-w-xl">
          {POSTS.slice(0, 4).map((post) => {
            return (
              <li
                key={post.idx}
                className="border-b border-gray-200 pb-4 cursor-pointer transform transition-transform duration-200 hover:scale-105"
              >
                <Link href={`/posts/${post.idx}`} className="block">
                  <h4 className="text-3xl font-semibold transition-colors duration-200 ">
                    {post.title}
                  </h4>
                  <p className="my-3 text-xl text-slate-800 transition-colors duration-200 ">
                    {post.content}
                  </p>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  );
}
