"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = ({ title }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between ml-3 mr-6">
      <button className="text-color-primary">
        <ArrowSquareLeft size={32} onClick={() => router.back()} />
      </button>
      <h3 className="text-center text-2xl text-color-primary mb-4">{title}</h3>
    </div>
  );
};

export default Page;
