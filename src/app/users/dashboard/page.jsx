import { authUserSession } from "@/libs/auth-lib";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="text-color-primary flex flex-col items-center mt-4">
      <h3 className="text-xl font-bold">DASHBOARD</h3>
      <h1 className="text-lg mb-4">WELCOME, ... {user?.name}</h1>
      <Image
        src={user?.image}
        alt=""
        width={250}
        height={250}
        className="mb-4"
      />
      <div className="flex flex-row">
        <Link
          href={"/users/dashboard/favorites"}
          className="bg-color-secondary p-2 flex mr-2 hover:bg-color-primary hover:text-color-dark rounded-md"
        >
          My Favorites
        </Link>
        <Link
          href={"/users/dashboard/comments"}
          className="bg-color-secondary p-2 hover:bg-color-primary hover:text-color-dark rounded-md"
        >
          My Comments
        </Link>
      </div>
    </div>
  );
};

export default Page;
