import { BackBtn } from "../posts/components";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <header className="fixed top-0 left-0 w-full bg-white z-10">
        <div className="flex items-center justify-between max-w-xl mx-auto py-10 px-5">
          <div className="flex items-center">
            <BackBtn />
          </div>
          <div className="flex-grow text-center">
            <p className="font-mono font-semibold text-3xl text-teal-500">
              Resume
            </p>
          </div>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="flex flex-col max-w-3xl items-center w-full  pt-20 px-6">
        <section className="max-w-5xl w-full mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            주식회사엘케이벤쳐스서울본부
          </h2>
          <p className="text-gray-400">팀원 • 개발팀 (2024.04. ~ 2024.12)</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            담당 업무
          </h3>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>인생네컷 국내 앱 유지보수 및 기능개발을 담당했습니다.</li>
            <li>
              유저가 HEIC파일을 업로드하면 JPEG형태로 변환되도록 이미지 업로드
              기능을 개선했습니다.
            </li>
            <li>애니메이션을 추가한 메인배너와 룰렛 페이지를 개발했습니다.</li>
            <li>
              next-i18next 라이브러리를 사용하여 다국어 사이트를 개발했습니다.
            </li>
            <li>
              CORS 오류를 회피하기 위해 Next.js API Routes를 활용하여 이미지 및
              비디오 다운로드 기능을 구현했습니다.
            </li>
            <li>
              Canvas API를 사용한 이미지 합성 기능을 구현했으며 MAU 10만명을
              달성했습니다.
            </li>
            <li>
              Sentry를 활용한 모니터링과 EC2를 활용하여 배포를 진행했습니다.
            </li>
            <li>
              외부 IP와 Next.js API Routes를 활용하여 IP 기반 국가 접속 제한
              기능을 구현했습니다.
            </li>
          </ul>
          <p className="mt-4 text-gray-600">
            주요 기술 스택: Next.js, React, TanStack Query, Recoil, Vitest
          </p>
          <p className="text-gray-600">
            사용 툴: GitLab, EC2, Sentry, Google Analytics
          </p>
        </section>

        <section className="max-w-5xl w-full mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            (주)버츄어라이브
          </h2>
          <p className="text-gray-400">팀원 • 개발팀 (2023.05. ~ 2024.04)</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            담당 업무
          </h3>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>
              해외 관광객 대상 뷰티 앱 유지보수 및 기능 추가를 담당했습니다.
            </li>
            <li>
              개발환경 개선을 위해 Presentational-Container 패턴을 Atomic
              패턴으로 변경하였고 TypeScript 레거시 코드 정리와 ESLint 룰을
              도입했습니다.
            </li>
            <li>
              번들 최적화를 위해 라이브러리를 제거하고 기능을 직접 구현했으며,
              Dynamic Import를 통해 평균 번들 크기를 130KB 감소시켰습니다.
            </li>
            <li>인생네컷 점주 전용 앱을 개발했습니다.</li>
            <li>Vitest를 사용한 단위 테스트 환경을 구축했습니다.</li>
            <li>
              내부 차트는 디자인 요청에 맞춰 svg 태그를 사용하여 직접
              구현했습니다.
            </li>
            <li>Slack, GitLab 및 EC2를 사용하여 CI/CD환경을 구축했습니다.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            주요 기술 스택: Next.js, React, TanStack Query, Recoil, Vitest
          </p>
          <p className="text-gray-600">
            사용 툴: GitLab, EC2, Sentry, Google Analytics
          </p>
        </section>

        <section className="max-w-5xl w-full mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">(주)헬로비즈</h2>
          <p className="text-gray-400">팀원 • 개발팀 (2022.02. ~ 2023.02)</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            담당 업무
          </h3>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>외주 전문 개발업체에서 프론트엔드 개발을 담당했습니다.</li>
            <li>클라이언트와 직접 소통하며 7개의 MVP제품을 개발했습니다.</li>
            <li>이 과정에서 DB구조를 분석하고 API설계를 일부 담당했습니다.</li>
            <li>
              기존 상태관리로 사용하던 Redux를 TanStack Query(react-query)와
              Zustand로 마이그레이션을 추진하여 서버와 클라이언트 상태관리를
              분리시켰습니다.
            </li>
          </ul>
          <p className="mt-4 text-gray-600">
            주요 기술 스택: Next.js, React, TanStack Query, Redux, Zustand
          </p>
          <p className="text-gray-600">
            사용 툴: Jira, Bitbucket, Google Analytics
          </p>
        </section>
      </main>
    </div>
  );
}
