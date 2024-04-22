"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 ">
      <FileSearch size={44} className="text-color-accent" />
      <h3 className="flex items-center text-color-accent font-bold text-4xl">
        NOT FOUND
      </h3>
      <button
        onClick={() => router.back()}
        className="text-color-primary hover:text-color-accent underline transition-all text-semibold"
      >
        Kembali
      </button>
    </div>
  );
};

export default Page;
