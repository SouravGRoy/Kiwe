import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="relative w-full py-28 p-14 bg-[#8cbcd3] rounded-tl-3xl rounded-tr-3xl text-[#000]">
        {[
          "kíwë is a strategic partner for fast-grow­ing tech ",
          "businesses that need to raise funds, sell prod­ucts,",
          " ex­plain com­plex ideas, and hire great peo­ple.",
        ].map((item, index) => (
          <h1
            key={index}
            className="font-['Neue_Montreal'] text-4xl md:text-[3.8vw] leading-8 md:leading-[3.5vw] tracking-tight"
          >
            {item}
          </h1>
        ))}
        <div className="w-full flex justify-center">
          <hr className="border-t border-zinc-900 w-full absolute" />
        </div>

        <div className="flex w-full justify-end items-end mt-14">
          <div className="w-1/2"></div>

          <div className="border-b-[1px] md:mt-10 mt-6 w-1/3 border-white"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row mb-10 mt-6 md:mt-16 border-[#000000]">
          <div className="w-full md:w-1/2">
            <h1 className="md:text-5xl text-4xl font-[Neue_Montreals]">
              Our approach :
            </h1>
            <a href="/about">
              <button
                className="flex gap-5 items-center md:px-5 px-3 py-2 md:py-3 mb-4 bg-zinc-900 mt-8 rounded-full uppercase text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Read More
                <motion.div
                  className="w-2 h-2 bg-zinc-100 rounded-full"
                  animate={{
                    width: isHovered ? "1.5rem" : "0.5rem",
                    height: isHovered ? "1.5rem" : "0.5rem",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isHovered && (
                    <FaArrowUpLong className="text-zinc-900 rotate-45  my-1 mx-1 mb-2" />
                  )}
                </motion.div>
              </button>
            </a>

            <div className="text-gray-600 body-font">
              <div className="container  mx-auto">
                <div className="flex flex-wrap w-full mb-4">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="font-['Neue_Montreal'] text-lg font-semibold title-font mb-2 text-gray-900">
                      Who are We?
                    </h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                  </div>
                  <div className="lg:w-1/2 w-full flex flex-col">
                    <p className="leading-relaxed text-lg mb-4 font-['Neue_Montreal'] font-bold text-gray-800">
                      We are the Co-Founders of kíwë -
                    </p>
                    <p className="md:mb-8 mb-4 font-light text-gray-100">
                      kíwë is built to help you persuade your colleagues,
                      clients, or investors. Whether it’s live or digital,
                      delivered for one or a hundred people.
                    </p>
                    <p className="font-light text-white">
                      We believe the mix of strategy and design (with a bit of
                      coffee) is what makes your message clear, convincing, and
                      captivating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 shadow-lg md:max-w-[70%] lg:max-w-[100%] md:h-max-[50%] lg:max-h-[100%] flex justify-end rounded-3xl overflow-hidden md:mt-0">
            <img src="/FoundersOG.jpg" className="h-auto w-full  rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
