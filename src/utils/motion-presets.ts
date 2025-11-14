// src/utils/motion-presets.ts
import { Variants } from "framer-motion";

export const fadeInBasic: Variants = {
  hidden: { opacity: 0}, // start slightly below
  visible: {
    opacity: 1,
    y: 0, // move to natural position
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Full preset for easy import
export const fadeInBasicPreset = {
  variants: fadeInBasic,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};
