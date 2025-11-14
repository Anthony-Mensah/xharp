"use client"
import ContentSection from "../content-section";
import { challenge } from "@/assests/images";

const content = {
  header: "The Challenge",
  subtext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  image: challenge,
  alt: "challenge image",
};

export const Challenge = () => {
  return (
    <>
      <ContentSection {...content} />
    </>
  );
};
