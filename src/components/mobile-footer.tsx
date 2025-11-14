"use client";
import MobileNavItem from "./mobile-nav-item";

const MobileFooter = () => {
  return (
    <footer className="h-[78px] flex justify-center items-center border-t-2 border-accent md:hidden">
      <main className="flex app-container space-x-[52px] items-center justify-center">
        <MobileNavItem label="E-tickets" icon="ri-ticket-line" />
        <MobileNavItem label="Donations" icon="ri-hand-heart-line" />
        <MobileNavItem label="Event Pay" icon="ri-coin-line" />
        <MobileNavItem label="Settings" icon="ri-settings-4-line" />
      </main>
    </footer>
  );
};

export default MobileFooter;
