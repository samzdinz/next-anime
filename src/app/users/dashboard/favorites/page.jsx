import Image from "next/image";
import Link from "next/link";
import Header from "@/components/utilities/Header";

const Page = () => {
  return (
    <section className="mt-4 ">
      <Header title={"My Favorite"} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-3 mr-6 ">
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bg-color-secondary bottom-0 w-full flex items-center justify-center h-16">
            <h5 className="text-xl text-center ">Judul anime favorite</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bg-color-secondary bottom-0 w-full flex items-center justify-center h-16">
            <h5 className="text-xl text-center ">Judul anime favorite</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bg-color-secondary bottom-0 w-full flex items-center justify-center h-16">
            <h5 className="text-xl text-center ">Judul anime favorite</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute bg-color-secondary bottom-0 w-full flex items-center justify-center h-16">
            <h5 className="text-xl text-center ">Judul anime favorite</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
