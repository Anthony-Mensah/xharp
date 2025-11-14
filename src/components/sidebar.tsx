import { avatar, xharpLogo } from "@/assests/images";
import Image from "next/image";
import SidebarNavItem from "./sidebar-nav-item";
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
const Sidebar = () => {
  return (
    <section className="h-full flex-col w-[249px] hidden md:flex border-r-2 border-accent">
      <header className="pl-5 py-5">
        <Image
          src={xharpLogo}
          alt="xharp logo"
          sizes="100vw"
          width={94.03}
          height={35.25}
          priority
        />
      </header>
      <main className="flex-1 flex flex-col space-y-1 h-full overflow-y-auto">
        {navItems.map((item) => (
          <SidebarNavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </main>

      <footer className="border-t-2 border-accent flex justify-between items-center">
        <main className="flex space-x-3 p-3 items-center justify-between min-h-16 w-full hover-effect rounded-lg">
          {/* avatar */}
          <Image
            src={avatar}
            alt="avatar"
            sizes="100vw"
            width={40}
            height={40}
          />
          {/* user name */}
          <div className="flex flex-col flex-1 space-y-1">
            {/* name */}
            <p className="font-(--font-button-size)">Nicholas Osei</p>
            {/* email */}
            <small>nick@gmail.com</small>
          </div>
          {/* arrow right */}
          <i className="ri-arrow-right-s-line"></i>
        </main>
      </footer>
    </section>
  );
};

export default Sidebar;
