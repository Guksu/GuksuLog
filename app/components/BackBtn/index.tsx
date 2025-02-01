"use client";

import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <img
      src="/icons/arrow-left.svg"
      alt="back"
      className="cursor-pointer"
      onClick={handleBack}
    />
  );
}
