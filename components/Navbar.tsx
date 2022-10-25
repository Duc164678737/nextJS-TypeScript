import { NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <nav>
      <div>
        <Link href="/">
          <a> Coder </a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/coders">
          <a> Coder </a>
        </Link>
      </div>
      <div>
        {!loading && !session && (
          <Link href="/api/auth/singIn">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              {" "}
              Sign In{" "}
            </a>
          </Link>
        )}

        {session && (
          <div>
            <Link href="/api/auth/singOut">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              {" "}
              Sign Out{" "}
            </a>
          </Link>
          <button>{session.user?.name}</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
