"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";
import MobileFooter from "@/components/mobile-footer";

type layoutProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen">
        {/* mobile header */}
        <MobileHeader />
        {/* large screen */}
        <Sidebar />
        <main className="flex-1 h-full overflow-y-auto">{children}</main>
        {/* mobile screen */}
        <MobileFooter />
      </section>
    </>
  );
};

export default DashboardLayout;
