"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-800">
      <div className="text-6xl mb-4">🚫</div>
      <h1 className="text-4xl mb-2">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="text-lg mb-6">요청하신 페이지는 존재하지 않습니다.</p>
      <button
        className="px-4 py-2 text-white bg-teal-400 rounded hover:bg-teal-500"
        onClick={handleGoBack}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default NotFound;
