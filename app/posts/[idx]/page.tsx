import { Metadata } from "next";
import "./styles.css";
import { PageHeader } from "@/components";

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
    <div className="flex items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Posts" />
      <div className="mt-24 max-w-5xl w-full">
        <article>
          <h1 className="font-bold text-lg text-slate-900 dark:text-white">
            {post.title}
          </h1>
          <span className="block mt-3 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 pb-4 ">
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
