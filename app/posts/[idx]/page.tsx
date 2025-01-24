import { Metadata } from "next";
import { BackBtn } from "../components";
import "./styles.css";

type Post = {
  idx: number;
  title: string;
  content: string;
  date: string;
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
    description: post.content,
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/posts/${idx}`,
      title: `GuksuLog - ${post.title}`,
      description: post.content,
    },
    twitter: {
      title: `GuksuLog - ${post.title}`,
      description: post.content,
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
          <h1 className="font-bold text-4xl text-teal-500">{post.title}</h1>
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
