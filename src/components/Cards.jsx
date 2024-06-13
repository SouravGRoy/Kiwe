import { motion } from "framer-motion";
import React from "react";

export default function Cards() {
  return (
    <div className="w-full py-16 md:py-28 bg-zinc-900 flex flex-col md:flex-row gap-5 items-center px-6 md:px-24">
      <div className="cardcontainer  h-[50vh] w-full md:w-1/2">
        <motion.div
          className="card relative w-full flex md:max-w-[100%] md:max-h-[50%] lg:max-w-[100%] lg:max-h-[100%] justify-center items-center rounded-xl h-full bg-[#ffffffc6]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <h1 className="text-6xl shadow-md p-1 rounded-md font-['NeueMontreal-Regular']">
            kíwë Media
          </h1>
          <button className="absolute px-3 text-xs rounded-full border-y-2 py-1 left-10 bottom-10 border-gray-500">
            ©2023-2024
          </button>
        </motion.div>
      </div>
      <div className="cardcontainer flex flex-col md:flex-row gap-5 md:h-[50vh] h-[100vh] w-full md:w-1/2">
        <motion.div
          className="card w-full md:max-w-[50%] md:max-h-[50%] lg:max-w-[100%] lg:max-h-[100%] md:w-1/2 relative flex justify-center items-center rounded-xl h-full bg-[#000000]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <h1 className="lg:text-4xl text-2xl shadow-md shadow-slate-700 p-1 rounded-md font-['NeueMontreal-Regular']">
            LostSpace
          </h1>
          <button className="absolute lg:px-3 px-1 text-xs rounded-full border-2 py-1 left-10 bottom-10">
            ©2023-2024
          </button>
        </motion.div>
        <motion.div
          className="card w-full md:max-w-[50%] md:max-h-[50%] lg:max-w-[100%] lg:max-h-[100%] md:w-1/2 relative flex justify-center items-center rounded-xl h-full bg-[#000000]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <h1 className="text-5xl shadow-md shadow-slate-700 p-1 rounded-md font-['NeueMontreal-Regular']">
            kíwí
          </h1>
          <button className="absolute lg:px-3 px-1 text-xs rounded-full border-2 py-1 left-10 bottom-10">
            ©2023-2024
          </button>
        </motion.div>
      </div>
    </div>
  );
}
