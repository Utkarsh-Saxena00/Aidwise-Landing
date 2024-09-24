import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavigationMenuElements } from "./NavigationMenu";

const Navbar = () => {
  return (
    <div className="flex z-10 items-center justify-between p-3 px-14 backdrop-blur bg-[#020103]/[.01]">
      <Link href={"/"}>
        <Image width={179} height={30} src={"/logo.svg"} alt="Aidwise" />
      </Link>
      <div className="rounded-full bg-[#020103]/[.01] border border-white/[0.15] px-6 py-2">
        <NavigationMenuElements />
      </div>
      <Link href={"/contact-us"}>
        <Image src={"/navbar/contact-us.svg"} alt="contact us" width={187} height={46} />
      </Link>
    </div>
  );
};

export default Navbar;
