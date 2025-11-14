"use client";
import MobileNavItem from "./mobile-nav-item";

const navItems = [
  { label: "E-tickets", icon: "ri-ticket-line", href: "/dashboard/e-tickets" },
  {
    label: "Donations",
    icon: "ri-hand-heart-line",
    href: "/dashboard/e-tickets",
  },
  {
    label: "Event Pay",
    icon: "ri-coin-line",
    href: "/dashboard/e-tickets",
  },
  {
    label: "Settings",
    icon: "ri-settings-4-line",
    href: "/dashboard/e-tickets",
  },
];
const MobileFooter = () => {
  return (
    <footer className="h-[78px] flex justify-center items-center border-t-2 border-accent md:hidden">
      <main className="flex app-container space-x-[52px] items-center justify-center">
        {navItems.map((item) => (
          <MobileNavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </main>
    </footer>
  );
};

export default MobileFooter;
