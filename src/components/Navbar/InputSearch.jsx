"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const route = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      route.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="search anime here..."
        className="w-full rounded p-2"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};

export default InputSearch;
