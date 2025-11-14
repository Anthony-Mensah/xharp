"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

type EmptyStareCardProps = {
  image: StaticImageData;
  label: string;
  subtext: string;
  buttonLabel: string;
  onButtonClick?: () => void;
};
const EmptyStareCard: React.FC<EmptyStareCardProps> = ({
  image,
  label,
  subtext,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <>
      <main className="flex flex-col space-y-[19px] w-[266px] h-min-64 items-center">
        {/* image */}
        <Image
          src={image}
          alt="empty state icon"
          width={148}
          height={148}
          sizes="100vw"
        />
        <div className="flex flex-col space-y-1 items-center min-h-10">
          {/* label */}
          <p>{label}</p>
          {/* subtext */}
          <small className="text-muted"> {subtext} </small>
        </div>
        {/* button */}
        <button className="btn" onClick={onButtonClick}>
          <i className="ri-add-fill"></i>
          <span>{buttonLabel}</span>
        </button>
      </main>
    </>
  );
};

export default EmptyStareCard;
