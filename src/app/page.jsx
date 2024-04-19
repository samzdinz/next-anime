import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import MangaList from "@/components/MangaList";
import Header2 from "@/components/MangaList/Header";
import { getAnimeResponse, getNestedResponse, reproduce } from "@/libs/api-lib";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const topManga = await getAnimeResponse("top/manga", "limit=8");
  let recommendedAnime = await getNestedResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title="Popular Anime" linkHref={"/popular"} linkAll="See All" />
        <AnimeList api={topAnime} />
      </section>

      {/* Recommended Anime */}
      <section>
        <Header title="Recommended Anime" />
        <AnimeList api={recommendedAnime} />
      </section>

      {/* Popular Manga */}
      <section>
        <Header2 title="Popular Manga" linkHref={"/manga"} linkAll="See All" />
        <MangaList api={topManga} />
      </section>
    </>
  );
};

export default Page;
