import { getAnimeResponse } from "@/libs/api-lib";
import VideoPLayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import FavoriteButton from "@/components/AnimeList/FavoriteButton";
import { authUserSession } from "@/libs/auth-lib";
import prisma from "@/libs/prisma";
import Header from "@/components/utilities/Header";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  const user = await authUserSession();

  const favorite = await prisma.favorites.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <Header />
      <div className="text-color-primary p-4 text-2xl">
        <h3>
          {anime.data.title} - {anime.data.year}
        </h3>
        {!favorite && user && (
          <FavoriteButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_title={anime.data.title}
            anime_image={anime.data.images.webp.image_url}
          />
        )}
      </div>
      <div className="flex py-2 px-4 gap-2 ">
        <div className="w-32 flex flex-col text-color-primary justify-center items-center border border-color-primary">
          <h3>SCORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-32 flex flex-col text-color-primary justify-center items-center border border-color-primary">
          <h3>EPISODES</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-32 flex flex-col text-color-primary justify-center items-center border border-color-primary">
          <h3>RANK</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-32 flex flex-col text-color-primary justify-center items-center border border-color-primary">
          <h3>FAVORITES</h3>
          <p>{anime.data.favorites}</p>
        </div>
      </div>

      <div className="flex gap-2 px-4 pt-4 sm:flex-nowrap flex-wrap ">
        <Image
          src={anime.data.images.webp.image_url}
          width={350}
          height={350}
          alt={anime.data.images.jpg.image_url}
          className="w-full object-cover rounded"
        />

        <p className="text-color-primary text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPLayer
          src={anime.data.trailer.url}
          youtoubeId={anime.data.trailer.youtube_id}
        />
      </div>
    </>
  );
};

export default Page;
