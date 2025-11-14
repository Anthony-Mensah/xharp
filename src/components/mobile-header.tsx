"use client";
import { avatar, xharpLogo } from "@/assests/images";
import Image from "next/image";
import React from "react";

const MobileHeader = () => {
  return (
    <header className="h-20 flex items-center justify-between app-container md:hidden">
      {/* logo */}
      <aside>
        <Image
          src={xharpLogo}
          alt="xharp logo"
          sizes="100vw"
          width={94.03}
          height={35.25}
          priority
        />
      </aside>
      {/* right side */}
      <aside className="flex space-x-2 items-center">
        {/* return and earn */}
        <div className="flex items-center space-x-1 rounded-xl h-8 p-1.5 bg-accent">
          {/* gift icon */}
          <i className="ri-gift-line "></i>
          <p>Refer & Earn</p>
        </div>
      {/* avatar */}
        <Image
          src={avatar}
          alt="xharp logo"
          sizes="100vw"
          width={30}
          height={30}
        />
      </aside>
    </header>
  );
};

export default MobileHeader;
