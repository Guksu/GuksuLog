"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfView() {
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setHeight(500); // 모바일
      } else if (window.innerWidth < 1024) {
        setHeight(800); // 태블릿
      } else {
        setHeight(1000); // 데스크톱
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const pageArr = Array.from({ length: 5 }, (_, idx) => idx + 1);

  return (
    <Document file="/doc/resume.pdf">
      {pageArr.map((page) => (
        <Page
          key={page}
          pageNumber={page}
          height={height}
          renderMode="canvas"
        />
      ))}
    </Document>
  );
}
