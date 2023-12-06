import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-transparent border border-b-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Guess the Footballer
          </span>
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
