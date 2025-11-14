"use client";
import useRouteMatch from "@/hooks/use-routeMath";
import Link from "next/link";
import React from "react";

type MobileNavItemProps = {
  label: string;
  icon: string;
  href?: string;
  onClick?: () => void;
};

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  label,
  icon,
  href,
  onClick,
}) => {
  const isRouteMatch = useRouteMatch(label);
  return (
    <Link href={href ?? "/"}>
      <main
        className={`flex flex-col items-center space-y-0.5 ${
          !isRouteMatch && "text-muted"
        }`}
      >
        {/* icon */}
        <i className={`text-[20px] ${icon}`}></i>
        {/* label */}
        <small
          className="text-xs sm:text-sm md:text-base lg:text-lg
    truncate
    block"
        >
          {label}
        </small>
      </main>
    </Link>
  );
};

export default MobileNavItem;
