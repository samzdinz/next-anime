import Image from "next/image";
import Link from "next/link";
import Header from "@/components/utilities/Header";
import { authUserSession } from "@/libs/auth-lib";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();

  const favorite = await prisma.favorites.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 ">
      <Header title={"My Favorite"} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-3 mr-6 mt-4">
        {favorite.map((fav, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${fav.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={fav.anime_image}
                alt={fav.anime_image}
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute bg-color-secondary bottom-0 w-full flex items-center justify-center h-16">
                <h5 className="text-xl text-center text-color-primary">
                  {fav.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
