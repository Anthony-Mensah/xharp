"use client";
import { solution } from "@/assests/images";
import SolutionCard from "../solution-card";

const services = [
  {
    header: "Software",
    bgImage: solution,
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  },
  {
    header: "Hardware",
    bgImage: solution,
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  },
  {
    header: "Payment",
    bgImage: solution,
    subtext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  },
];
const Services = () => {
  return (
    <>
      <section className="lg:min-h-[799px] py-10 w-full flex justify-center items-center text-background">
        <main className="app-container flex flex-col gap-y-10">
          {/* header */}
          <span className="header">
            Solutions to scale your events across Africa
          </span>
          {/* solution cards */}
          <div className="flex flex-col gap-[25px] md:flex-row flex-wrap">
            {services.map((s) => (
              <SolutionCard {...s} key={s.header} />
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Services;
