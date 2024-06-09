import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full rounded-tl-3xl py-20 rounded-tr-3xl bg-[#B3B4BD]"
      // 004D43
    >
      <div className="text border-t-2 border-b-2 overflow-hidden whitespace-nowrap flex border-zinc-300">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw] pt-10 -mb-[7vw]  font-semibold uppercase leading-none font-['Founders_Grotesk_X-Condensed'] pr-20"
        >
          EAT SLEEP CONQUER REPEAT
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw] pt-10 -mb-[7vw] font-semibold uppercase leading-none font-['Founders_Grotesk_X-Condensed'] pr-20"
        >
          EAT SLEEP CONQUER REPEAT
        </motion.h1>
      </div>
    </div>
  );
}
