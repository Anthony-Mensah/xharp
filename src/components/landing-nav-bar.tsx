"use client";

import { xharpLogoWhite } from "@/assests/images";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Why Now?", href: "/" },
  { label: "Explore", href: "/" },
  { label: "Buddyvotes", href: "/" },
];

const LandingNavBar = () => {
  return (
    <nav className="app-container flex items-center justify-between p-5">
      <Image
        src={xharpLogoWhite}
        alt="xharp logo"
        sizes="100vw"
        width={94.03}
        height={35.25}
        priority
      />
      {/* links */}
      <ul className="flex items-center space-x-[9px]">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="group relative">
              <small className="text-accent">{item.label}</small>
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LandingNavBar;
