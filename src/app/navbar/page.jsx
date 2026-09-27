"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("workouts");

  return (
    <header className="w-full bg-[#0b0c0f]">
      <nav className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <div href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo"   width={20}
                                              height={20} />
          <span className="text-[15px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        
   </div>
        {/* Middle Navigation */}
        <div className="hidden items-center gap-1 rounded-full bg-[#111214] p-1 md:flex">

          <Link
            href="/workouts"
            onClick={() => setActive("workouts")}
            className={`rounded-full px-5 py-2 text-[11px] font-medium transition-all duration-200 ${
              active === "workouts"
                ? "bg-[#172308] text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/plan"
            onClick={() => setActive("plan")}
            className={`rounded-full px-5 py-2 text-[11px] font-medium transition-all duration-200 ${
              active === "plan"
                ? "bg-[#172308] text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>

        </div>

        {/* Right */}
        <div className="hidden items-center gap-6 md:flex">

          <Link
            href="/plan"
            className="flex items-center gap-2 text-[11px] text-gray-300 hover:text-white"
          >
            Plan
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/saved"
            className="flex items-center gap-2 text-[11px] text-gray-300 hover:text-white"
          >
            Saved
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px] text-gray-400">
              0
            </span>
          </Link>

        </div>

        {/* Mobile menu */}
        <button className="p-2 text-white md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </nav>
    </header>
  );
};

export default Navbar;