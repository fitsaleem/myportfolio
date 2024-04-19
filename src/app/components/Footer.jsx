import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link
          href={"/"}
          className="text-1xl md:text-5xl text-white font-semibold"
        >
          <Image
            src="/logo-03.svg"
            alt="logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </Link>
        <p className="text-slate-600">All rights reserved.@saleem raza</p>
      </div>
    </footer>
  );
};

export default Footer;
