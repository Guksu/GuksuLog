import { PageHeader } from "@/components";
import { PdfView } from "./components";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <PageHeader headerTitle="Resume" />
      <main className="flex flex-col max-w-3xl items-center w-full pt-20">
        <PdfView />
      </main>
    </div>
  );
}
