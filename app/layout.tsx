import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "국수의 개발 블로그",
  description:
    "프론트엔드 개발자 국수의 개발 블로그입니다. 개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.",
  openGraph: {
    type: "article",
    locale: "ko_KR",
    // TODO : URL 수정
    url: "TODO",
    title: "국수의 개발 블로그",
    description:
      "프론트엔드 개발자 국수의 개발 블로그입니다. 개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.",
  },
  twitter: {
    title: "국수의 개발 블로그",
    description:
      "프론트엔드 개발자 국수의 개발 블로그입니다. 개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased max-w-screen-xl mx-auto">
        {children}
      </body>
    </html>
  );
}
