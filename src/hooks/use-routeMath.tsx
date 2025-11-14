"use client";
import { usePathname } from "next/navigation";

const useRouteMatch = (routeString: string): boolean => {
  const pathname = usePathname();
  return pathname.includes(routeString.toLowerCase());
};

export default useRouteMatch;
