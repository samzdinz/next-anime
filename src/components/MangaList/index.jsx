import Image from "next/image";
import Link from "next/link";

const MangaList = ({ api }) => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4">
      {api.data?.map((anime) => {
        return (
          <Link href={`/${api.mal_id}`} key={anime.mal_id}>
            <div className="transition-all shadow p-4 cursor-pointer key={anime.mal_id} text-color-primary">
              <Image
                src={anime.images.webp.image_url}
                alt="gambar"
                height={350}
                width={350}
                className="w-full max-h-64 object-cover"
              />
              <h3 className="font-bold p-4 text-md md:text-xl bg-color-secondary">
                {anime.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MangaList;
