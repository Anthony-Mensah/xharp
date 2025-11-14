"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInBasicPreset } from "@/utils/motion-presets";

type ContentSectionProps = {
  header: string;
  subtext: string;
  image: StaticImageData;
  alt?: string;
  imageLeft?: boolean; // flag to flip layout
};

const ContentSection: React.FC<ContentSectionProps> = ({
  header,
  subtext,
  image,
  alt,
  imageLeft = false,
}) => {
  return (
    <section className="py-10 lg:h-[731px] w-full flex justify-center items-center">
      <main
        className={`app-container flex flex-col items-center min-h-[509px] space-y-10 md:flex-row md:space-y-0 md:gap-x-5 md:justify-between  ${
          imageLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* text block */}
        <motion.aside
          {...fadeInBasicPreset}
          className="flex flex-col gap-y-[30px] md:w-[350px] lg:w-[443px]"
        >
          <span className="text-[30px] leading-[106%] tracking-normal font-gambarino text-[#A8FF07]">
            {header}
          </span>
          <span className="text-[18px] leading-6 tracking-[-1.1%] text-background">
            {subtext}
          </span>
        </motion.aside>

        {/* image block */}
        <aside className="w-full md:w-[300px] md:h-[509px] lg:w-[420px]">
          <Image
            src={image}
            alt={alt || header}
            sizes="100vw"
            className="h-full w-full object-cover rounded-[20px]"
            priority
          />
        </aside>
      </main>
    </section>
  );
};

export default ContentSection;
