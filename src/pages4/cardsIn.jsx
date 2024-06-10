import { motion } from "framer-motion";
import React from "react";

export default function CardsIN() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full rounded-tl-3xl py-20 mt-16 rounded-tr-3xl bg-[#B3B4BD]"
      // 004D43
    >
      <div className="text border-t-2 border-b-2 overflow-hidden whitespace-nowrap flex border-zinc-300">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw] pt-10 -mb-[7vw]  font-semibold uppercase leading-none font-['Founders_Grotesk_X-Condensed'] pr-20"
        >
          YOUTUBE WEB AGENCY COUMMUNE APP
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw] pt-10 -mb-[7vw] font-semibold uppercase leading-none font-['Founders_Grotesk_X-Condensed'] pr-20"
        >
          YOUTUBE WEB AGENCY COUMMUNE APP
        </motion.h1>
      </div>
      <div className="w-full h-screen bg-[#EDE8F5] flex mt-10 py-16 flex-col md:flex-row gap-5 items-center px-6 md:px-24">
        <div className="cardcontainer h-[50vh] w-full md:w-1/2">
          <motion.div
            className="card relative w-full flex justify-center items-center rounded-xl h-full bg-[#ed529fe1]"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <h1 className="text-6xl shadow-md p-1 rounded-md font-['NeueMontreal-Regular']">
              kíwí
            </h1>
            <button className="absolute px-3 text-xs rounded-full border-y-2 py-1 left-10 bottom-10 border-gray-500">
              ©2023-2024
            </button>
          </motion.div>
        </div>
        <div className="cardcontainer flex flex-col md:flex-row gap-5 md:h-[50vh] h-[100vh] w-full md:w-1/2">
          <motion.div
            className="card w-full md:w-1/2 relative flex justify-center items-center rounded-xl h-full bg-[#3D52A0]"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <h1 className="text-4xl shadow-md shadow-slate-700 p-1 rounded-md font-['NeueMontreal-Regular']">
              LostSpace
            </h1>
            <button className="absolute px-3 text-xs rounded-full border-2 py-1 left-10 bottom-10">
              ©2023-2024
            </button>
          </motion.div>
          <motion.div
            className="card w-full md:w-1/2 relative flex justify-center items-center rounded-xl h-full bg-[#AFDDE5]"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <h1 className="text-5xl shadow-md shadow-slate-700 p-1 rounded-md font-['NeueMontreal-Regular']">
              kíwí
            </h1>
            <button className="absolute px-3 text-xs rounded-full border-2 py-1 left-10 bottom-10">
              ©2023-2024
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
