import { Metadata } from "next";
import { PageHeader } from "@/components";
import ProjectCard from "./components/ProjectCard";

export const metadata: Metadata = {
  title: "프로젝트 - 국수의 개발 블로그",
  description: "직접 만든 오픈소스 프로젝트들을 소개합니다.",
  openGraph: {
    title: "프로젝트 - 국수의 개발 블로그",
    description: "직접 만든 오픈소스 프로젝트들을 소개합니다.",
    type: "website",
    locale: "ko_KR",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/projects`,
  },
  twitter: {
    card: "summary",
    title: "프로젝트 - 국수의 개발 블로그",
    description: "직접 만든 오픈소스 프로젝트들을 소개합니다.",
  },
};

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

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Projects" />
      <section className="mt-14 px-4 w-full max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
