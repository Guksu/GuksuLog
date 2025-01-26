import Link from "next/link";
import POSTS from "@/json/posts.json";
import { BackBtn } from "./components";

export default function PostsPage() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <header className="fixed top-0 left-0 w-full bg-white z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-10 px-5">
          <div className="flex items-center">
            <BackBtn />
          </div>
          <div className="flex-grow text-center">
            <p className="font-mono font-semibold text-xl text-teal-500">
              Posts
            </p>
          </div>
          <div className="w-16"></div>
        </div>
      </header>

      <article className="mt-24 px-4">
        <ol className="flex flex-col gap-6">
          {POSTS.map((post) => {
            return (
              <li key={post.idx} className="border-b border-gray-300 pb-4">
                <Link href={`/posts/${post.idx}`} className="block">
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    {post.title}
                  </h4>
                  <p className="my-2 text-sm text-slate-600">{post.summary}</p>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  );
}
