"use client";
import { globe, medium } from "@/assests/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInBasicPreset } from "@/utils/motion-presets";
const Footer = () => {
  return (
    <section className="lg:min-h-[647px] pt-10 w-full flex flex-col justify-end items-center text-background gap-5 pb-3">
      {/* first part */}
      <main className="app-container flex flex-col md:flex-row items-center gap-5">
        {/* header, subtext and buton */}
        <motion.aside
          {...fadeInBasicPreset}
          className="flex-1 flex flex-col gap-5"
        >
          <h4 className="header">
            We’re open to strategic investors & partners
          </h4>
          {/* subtext */}
          <h4 className="min-h-[72px] font-inter text-[18px] leading-6 tracking-[-1.1%] text-[#e8e7e7]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed commodo sapien at augue dignissim, eget varius nunc
            malesuada.
          </h4>

          {/* button */}
          <button className="bg-[#FF4B07] flex items-center justify-center w-[178px] min-h-10 rounded-full p-2.5 space-x-1 text-background">
            <span>Get In Touch</span>
            <i className="ri-arrow-right-s-line"></i>
          </button>
          <div></div>
        </motion.aside>
        {/* image */}
        <Image
          src={globe}
          alt="globe"
          sizes="100vw"
          className="flex-1"
          priority
        />
      </main>
      {/* footer */}
      <main className="flex items-center justify-between app-container min-h-6 ">
        <p>© 2025 Xharp Event Technologies LTD. </p>
        {/* social media icons */}
        <div className="flex items-center justify-center gap-[9px]">
          {/* linkedin */}
          <i className="ri-linkedin-box-fill cursor-pointer"></i>
          {/* instagram */}
          <i className="ri-instagram-line cursor-pointer"></i>
          <Image
            src={medium}
            alt="medium"
            sizes="100vw"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          {/* X */}
          <i className="ri-twitter-x-line cursor-pointer"></i>
        </div>
      </main>
    </section>
  );
};

export default Footer;
