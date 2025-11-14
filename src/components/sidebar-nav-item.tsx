"use client";
import useRouteMatch from "@/hooks/use-routeMath";
import Link from "next/link";
import React from "react";

type SidebarNavItemProps = {
  // define props here
  label: string;
  icon: string;
  href?: string;
  onClick?: () => void;
};
const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  label,
  icon,
  href,
  onClick,
}) => {
  const isRouteMatch = useRouteMatch(label);
  return (
    <Link href={href ?? "/"}>
      <section className="flex items-center space-x-1 min-h-9 w-full pl-px">
        {/* active indicator */}
        <div className={`${isRouteMatch && "active-nav"}`}></div>
        <main
          className={`flex rounded-lg py-2 px-3 space-x-2 items-center hover-effect flex-1  h-full ${
            isRouteMatch ? "bg-accent" : "text-muted"
          }`}
        >
          {/* icon */}
          <i className={`${icon}`}></i>
          {/* label */}
          <p className="flex-1">{label}</p>
          {/* arrow right */}
          {isRouteMatch && <i className="ri-arrow-right-s-line"></i>}
        </main>
      </section>
    </Link>
  );
};

export default SidebarNavItem;
