import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header>
      <div className="bg-color-accent flex flex-col md:flex-row md:items-center justify-between p-4">
        <Link href="/" className="font-bold text-color-primary text-2xl">
          NextAnime
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
