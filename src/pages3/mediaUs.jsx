import { motion } from "framer-motion";
import React from "react";

export default function MediaUs() {
  return (
    <div>
      <div className="relative overflow-hidden rounded-t-3xl pb-10 mb-6 bg-[#C2CAD0]">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-3xl font-thin text-gray-900 sm:text-6xl">
                We save businesses from ugly and inefficient websites.
              </h1>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="./media1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="./media2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="./media4.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="md:h-64 md:w-44 w-36 h-52 overflow-hidden rounded-lg">
                          <img
                            src="./media7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="./media5.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="./media6.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="./media8.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3  gap-3">
                  {["Contact Us", "⏎"].map((item, index) => (
                    <motion.a
                      key={index}
                      href="/contact"
                      className="border-[1px] font-thin border-white py-2 px-3 rounded-full bg-black text-white relative overflow-hidden"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white"
                        variants={{
                          rest: { y: "100%" },
                          hover: { y: "0%" },
                        }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        style={{ zIndex: 1 }}
                      />
                      <motion.span
                        className="relative z-10"
                        variants={{
                          rest: { color: "white" },
                          hover: { color: "black" },
                        }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                      >
                        {item}
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
