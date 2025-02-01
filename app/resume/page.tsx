import { PageHeader } from "../components";
import resumeData from "@/json/resume.json";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Resume" />
      <main className="flex flex-col max-w-3xl items-center w-full pt-20 px-6">
        {resumeData.map(
          ({ careerDetails, company, date, position, techStack, tool }) => {
            return (
              <section
                className="max-w-5xl w-full mt-8 bg-white p-6 rounded-lg shadow-lg"
                key={company}
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
                  {company}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                  {`${position} (${date})`}
                </p>
                <br />
                <ul className="mt-2 list-disc list-inside text-sm sm:text-base lg:text-lg text-gray-600">
                  {careerDetails.map((career, idx) => {
                    return <li key={idx}>{career}</li>;
                  })}
                </ul>
                <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
                  {`주요 기술 스택: ${techStack.join(", ")}`}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  {`사용 툴: ${tool.join(", ")}`}
                </p>
              </section>
            );
          }
        )}
      </main>
    </div>
  );
}
