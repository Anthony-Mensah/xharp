"use client";

import { intro} from "@/assests/images";
import { sponsors } from "@/assests/images/partners";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInBasicPreset } from "@/utils/motion-presets";
import LandingNavBar from "../landing-nav-bar";

const Intro = () => {
  return (
    <>
      <section className="w-full flex flex-col space-y-12 md:justify-between text-background md:h-[1375px]">
        {/* nav */}
        <LandingNavBar />
        {/* heading, subtext and button */}
        <motion.div
          {...fadeInBasicPreset}
          className="flex flex-col app-container items-center text-center space-y-5"
        >
          <h4 className="text-background md:w-[607px] text-[30px]  md:text-[50px] leading-[106%] font-gambarino tracking-normal">
            We are building the best way to scale events across Africa.
          </h4>
          {/* subtext */}
          <p className="text-accent md:w-[629px] ">
            We’re building Africa’s event infrastructure — delivering payment,
            software, and hardware solutions that help organizers run modern,
            profitable, and inclusive events.
          </p>
          {/* button */}
          <button className="bg-[#FF4B07] flex items-center justify-center w-[178px] min-h-10 rounded-full p-2.5 space-x-1 text-background">
            <span>Get In Touch</span>
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </motion.div>
        {/* image */}
        <motion.div {...fadeInBasicPreset} className="app-container">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[593px]">
            <Image
              src={intro}
              alt="intro image"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>
        </motion.div>
        {/* sponsors */}
        <section className="app-container flex justify-center">
          <main className="flex flex-col items-center space-y-1">
            <h4 className="font-gambarino text-(--font-body-weight)">
              Supporters & Partners
            </h4>
            {/* sponsors */}
            {/* sponsor-item */}
            <ul className="flex items-center space-x-[22px] ">
              {sponsors.map((s) => (
                <li key={s.id}>
                  <Image
                    src={s.image}
                    alt={s.alt || s.id}
                    width={s.width}
                    height={s.height}
                    className="object-contain"
                  />
                </li>
              ))}
            </ul>
          </main>
        </section>
      </section>
    </>
  );
};

export default Intro;
