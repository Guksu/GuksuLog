"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useMemo, useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PAGE_HEIGHT = {
  mobile: 500,
  tablet: 800,
  desktop: 1000,
} as const;

export default function PdfView() {
  const [height, setHeight] = useState<number>(PAGE_HEIGHT.desktop);
  const [numPages, setNumPages] = useState(0);

  const getResponsiveHeight = () => {
    const width = window.innerWidth;

    if (width < 640) return PAGE_HEIGHT.mobile;
    if (width < 1024) return PAGE_HEIGHT.tablet;
    return PAGE_HEIGHT.desktop;
  };

  useEffect(() => {
    const handleResize = () => {
      setHeight(getResponsiveHeight());
    };

    handleResize(); // 초기 설정
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = useMemo(
    () => Array.from({ length: numPages }, (_, i) => i + 1),
    [numPages]
  );

  return (
    <Document
      file="/doc/resume.pdf"
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {pages.map((pageNumber) => (
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          height={height}
          renderMode="canvas"
        />
      ))}
    </Document>
  );
}
