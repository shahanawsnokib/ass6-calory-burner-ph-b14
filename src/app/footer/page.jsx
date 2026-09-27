import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#1c1d20] bg-[#0b0c0f]">
      <div className="mx-auto flex min-h-[80px] max-w-[1440px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
         <Image src="/logo.png" alt="Logo" width={20}
                                           height={20} />
 
          <span className="text-[12px] font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-right text-[10px] text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;