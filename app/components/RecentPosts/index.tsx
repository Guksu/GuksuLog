export default function RecentPosts() {
  const POSTS = [
    {
      title: "포스트 타이틀",
      content:
        "포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용",
      date: "2025-01-01",
    },
    {
      title: "포스트 타이틀",
      content:
        "포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용",
      date: "2025-01-01",
    },
    {
      title: "포스트 타이틀",
      content:
        "포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용",
      date: "2025-01-01",
    },
    {
      title: "포스트 타이틀",
      content:
        "포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용 포스트 내용",
      date: "2025-01-01",
    },
  ];
  return (
    <div>
      <p className="font-mono font-semibold text-3xl text-teal-500">최신소식</p>
      <article className="mt-4">
        <ol className="flex flex-col space-y-4 max-w-xl">
          {POSTS.map((post) => {
            return (
              <li
                key={post.title}
                className="border-b border-gray-200 pb-4 cursor-pointer transform transition-transform duration-200 hover:scale-105"
              >
                <h4 className="text-4xl font-semibold transition-colors duration-200 ">
                  {post.title}
                </h4>
                <p className="my-3 text-xl text-slate-800 transition-colors duration-200 ">
                  {post.content}
                </p>
                <span className="text-sm text-gray-500">{post.date}</span>
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  );
}
