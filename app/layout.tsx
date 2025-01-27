import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "국수의 개발 블로그",
  description:
    "프론트엔드 개발자 국수의 개발 블로그입니다. 개발하면서 발생한 이슈나 이야깃거리를 정리하고 있습니다.",
  openGraph: {
    type: "article",
    images: [
      {
        url: "/favicon.ico",
        width: 42,
        height: 42,
        alt: "Favicon",
      },
    ],
    locale: "ko_KR",
    url: process.env.NEXT_PUBLIC_DOMAIN,
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
      <meta
        name="google-site-verification"
        content="2ZqzXV-AIvVNHegZm2wN-mN5ibTyUgVDVbtGx1PF2zk"
      />
      <body className="font-normal antialiased max-w-screen-xl mx-auto">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
