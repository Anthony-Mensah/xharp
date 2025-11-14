import { status } from "@/assests/images";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInBasicPreset } from "@/utils/motion-presets";

type TSolutionCardProps = {
  header: string;
  bgImage: StaticImageData;
  subtext: string;
};

const SolutionCard: React.FC<TSolutionCardProps> = ({
  header,
  subtext,
  bgImage,
}) => {
  const [infoMode, setInfoMode] = useState(false);

  return (
    <motion.main
      {...fadeInBasicPreset}
      className={`flex-1 rounded-[20px] flex flex-col min-h-[419px] relative space-y-5 text-background p-5 overflow-hidden`}
      style={
        infoMode
          ? { backgroundColor: "#739B07" }
          : {
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0) 40%), url(${bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
      }
    >
      {/* header */}
      <h4 className="lg:h-[53px] lg:w-[194px] font-instrument italic leading-[106%] text-[50px]">
        {header}
      </h4>

      {/* subtext only in infoMode */}
      {infoMode && (
        <p className="lg:h-[264px] font-inter text-[16px] leading-6 tracking-[-1.1%]">
          {subtext}
        </p>
      )}

      {/* status icon (always visible, same position) */}
      <Image
        src={status}
        alt="status"
        sizes="100vw"
        width={43}
        height={44}
        className="absolute bottom-4 right-4 cursor-pointer z-20"
        priority
        onClick={() => setInfoMode((prev) => !prev)}
      />
    </motion.main>
  );
};

export default SolutionCard;
