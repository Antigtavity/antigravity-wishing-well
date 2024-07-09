"use client";

import { motion } from "framer-motion";
import { IMAGEKIT_IMAGES } from "@/assets/imageKit";

export default function AnimatedNebulaBG() {
  return (
    <motion.img
      initial={{ objectPosition: "50% 50%" }}
      animate={{ objectPosition: "100% 100%" }}
      exit={{ objectPosition: "50% 50%" }}
      transition={{ duration: 120, repeat: Infinity }}
      src={IMAGEKIT_IMAGES.NEBULA_BG}
      alt="nebula"
      height={1080}
      width={1920}
      className="absolute inset-0 w-[200vw] h-[200vh] object-none z-[-1] mix-blend-multiply opacity-30"
    />
  );
}
