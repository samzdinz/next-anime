import { getAnimeResponse } from "@/libs/api-lib";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async ({ params }) => {
  const { keyword } = params;

  const decodeKeyword = decodeURI(keyword);
  console.log(decodeKeyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  return (
    <>
      {/* Popular Anime */}
      <section>
        <Header title={`Pencarian untuk anime ${decodeKeyword} ...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Home;
