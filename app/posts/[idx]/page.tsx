import { Metadata } from "next";
import "./styles.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/default.css";
import { BackBtn } from "@/app/components";

hljs.registerLanguage("javascript", javascript);

type Post = {
  idx: number;
  title: string;
  content: string;
  date: string;
  summary: string;
};

type Props = {
  params: Promise<{ idx: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const idx = (await params).idx;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const post: Post = await fetch(`${domain}/api/posts?idx=${idx}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data[0]);

  if (!post) {
    return {
      title: `GuksuLog - NotFound`,
    };
  }

  return {
    title: `GuksuLog - ${post.title}`,
    description: post.summary,
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/posts/${idx}`,
      title: `GuksuLog - ${post.title}`,
      description: post.summary,
    },
    twitter: {
      title: `GuksuLog - ${post.title}`,
      description: post.summary,
    },
  };
}

export default async function Posts({ params }: Props) {
  const idx = (await params).idx;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const post: Post = await fetch(`${domain}/api/posts?idx=${idx}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data[0]);

  return (
    <div className="flex flex-col items-center justify-center px-5">
      <header className="fixed top-0 left-0 w-full bg-white z-10  px-5">
        <div className="max-w-5xl mx-auto py-10 ">
          <BackBtn />
        </div>
      </header>
      <div className="pt-28 py-10 max-w-5xl w-full">
        <article>
          <h1 className="font-bold text-lg text-teal-500">{post.title}</h1>
          <span className="block mt-3 text-sm text-gray-500 border-b border-gray-200 pb-4 ">
            {post.date}
          </span>
          <div
            className="mt-5 content-container"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
