import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="mt-4">
      <h3 className="text-center text-2xl text-color-primary">My Favorites</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center text-center">
        <Link href="/">
          <Image src="" alt="" width={350} height={350} />
        </Link>
        <Link href="/">
          <Image src="" alt="" width={350} height={350} />
        </Link>
        <Link href="/">
          <Image src="" alt="" width={350} height={350} />
        </Link>
        <Link href="/">
          <Image src="" alt="" width={350} height={350} />
        </Link>
      </div>
    </section>
  );
};

export default Page;
