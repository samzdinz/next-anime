import { authUserSession } from "@/libs/auth-lib";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign out" : "SignIn";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="text-color-primary flex gap-2 text-xl">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}

      <Link
        href={actionUrl}
        className="text-xl bg-color-secondary rounded py-1 p-12
          "
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
