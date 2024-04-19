"use client";

import MangaList from "@/components/MangaList";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-lib";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topManga, setTopManga] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/manga", `page=${page}`);
    setTopManga(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`Manga Populer #${page}`} />
      <MangaList api={topManga} />
      <Pagination
        page={page}
        lastPage={topManga.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
