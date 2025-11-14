"use client";
import ContentSection from "../content-section";
import { solution } from "@/assests/images";

const content = {
  header: "The Solution",
  subtext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  image: solution,
  alt: "solution image",
  imageLeft: true,
};
const Solution = () => {
  return <ContentSection {...content} />;
};

export default Solution;
