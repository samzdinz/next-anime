import Link from "next/link";

const Header2 = ({ title, linkHref, linkAll }) => {
  return (
    <div className="p-4 flex justify-between items-center text-color-primary">
      <h1 className="font-semibold">{title}</h1>
      {linkHref && linkAll ? (
        <Link
          href={linkHref}
          className="hover:text-color-accent underline transition-all text-sm"
        >
          {linkAll}
        </Link>
      ) : null}
    </div>
  );
};

export default Header2;
