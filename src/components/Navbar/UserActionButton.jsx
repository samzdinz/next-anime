import { authUserSession } from "@/libs/auth-lib";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="text-color-primary flex gap-2 text-xl ">
      {user ? (
        <Link href="/users/dashboard" className="py-1 mr-2 ">
          Dashboard
        </Link>
      ) : null}

      <Link
        href={actionUrl}
        className=" bg-color-secondary rounded py-1 p-4
          "
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
