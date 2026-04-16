import Link from "next/link";

const projects = [
  {
    name: "qa-recorder",
    description:
      "브라우저에서 사용자의 동작을 자동으로 기록하고 QA 시나리오를 생성해주는 라이브러리입니다.",
    github: "https://github.com/Guksu/qa-recorder",
    tags: ["TypeScript", "QA", "Testing"],
  },
  {
    name: "video-encoder",
    description:
      "브라우저 환경에서 비디오 파일을 인코딩하고 변환할 수 있는 경량 라이브러리입니다.",
    github: "https://github.com/Guksu/video-encoder",
    tags: ["TypeScript", "Video", "Encoding"],
  },
  {
    name: "envault",
    description:
      "환경 변수를 안전하게 관리하고 공유할 수 있는 CLI 도구입니다.",
    github: "https://github.com/Guksu/envault",
    tags: ["TypeScript", "CLI", "Security"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mt-14 max-w-xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
          프로젝트
        </h2>
        <Link
          href="/projects"
          className="text-xs font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          모두 보기 →
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-5 rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-slate-800/30 hover:border-teal-400 dark:hover:border-teal-600 transition-colors duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-slate-400 flex-shrink-0 "
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                {project.name}
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
