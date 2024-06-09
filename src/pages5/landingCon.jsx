import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingCon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-full mb-20 bg-[#88BDBC] pt-1"
    >
      <div className="textstructure mt-40  md:mt-36  px-4 md:px-10 lg:px-20">
        {["Waiting's Over", "Let's"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "14vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="w-12 md:w-[6vw] relative md:h-[5.5vw] h-9 overflow-hidden"
                  >
                    <img src="/startK.png" className="rounded-md h-full " />
                  </motion.div>
                )}
                <h1 className="uppercase text-4xl md:text-5xl lg:text-7xl md:leading-[4.5vw] tracking-tighter font-['Founders_Grotesk'] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        <div className="masker">
          <h1 className="uppercase text-5xl md:text-6xl lg:text-8xl  tracking-tighter font-['Founders_Grotesk']">
            GET
            <span className="font-semibold  pl-3">Started</span>
          </h1>
        </div>
      </div>

      <div className="border-t-[1px]  border-zinc-800 md:mt-28 mt-12 py-20 md:px-20 px-4 ">
        <p className="text-md font-thin font-['Neue_Montreal'] tracking-tight leading-none ">
          Fill the Form below:
        </p>
        <div className="flex justify-center items-center my-10">
          <form
            action="https://formsubmit.co/professorredpill7@gmail.com"
            method="POST"
            className="w-full p-8 rounded-lg"
          >
            <div className="flex md:flex-row flex-col">
              <div className="mb-4 flex md:flex-row flex-col md:items-center">
                <label className="block font-['Neue_Montreal'] text-[#112D32] md:pr-2 md:text-5xl text-4xl">
                  Hi! My name is
                </label>
                <input
                  type="text"
                  placeholder="Enter your name*"
                  className="ml-2 flex-grow bg-transparent border-b-2 border-white  py-2 text-white leading-tight placeholder:text-[#DEF2F1] focus:outline-none focus:border-white text-center "
                />
              </div>
              <div className="mb-4 flex md:flex-row flex-col md:items-center">
                <label className="md:ml-4 font-['Neue_Montreal']  block md:text-5xl text-4xl text-[#112D32]">
                  and I work with
                </label>
                <input
                  type="text"
                  placeholder="Company name *"
                  className="ml-2 flex-grow bg-transparent border-b-2 border-white  py-2 text-white leading-tight placeholder:text-[#DEF2F1] focus:outline-none focus:border-white text-center "
                />
              </div>
            </div>

            <div className="mb-4 flex md:flex-row flex-col md:items-center">
              <label className="block font-['Neue_Montreal'] text-[#112D32] md:text-5xl text-4xl">
                I'm looking for a company to help me with
              </label>
              <input
                type="text"
                placeholder="Your goal type here*"
                className="ml-2 flex-grow bg-transparent border-b-2 border-white  py-2 text-white leading-tight placeholder:text-[#DEF2F1] focus:outline-none focus:border-white text-center"
              />
            </div>
            <div className="mb-4 flex md:flex-row flex-col md:items-center">
              <label className="block font-['Neue_Montreal'] text-[#112D32] md:text-5xl text-4xl">
                With an idea of having that completed
              </label>
              <input
                type="date"
                className="ml-2 flex-grow bg-transparent border-b-2 border-white  py-2 text-white leading-tight placeholder:text-[#DEF2F1] focus:outline-none focus:border-white text-center"
              />
            </div>
            <div className="mb-4 flex md:flex-row flex-col md:items-center">
              <label className="block font-['Neue_Montreal'] text-[#112D32] md:text-5xl text-4xl">
                I prefer to work within a budget range of -
              </label>
              <input
                type="text"
                placeholder="Select*"
                className="ml-2 flex-grow bg-transparent border-b-2 border-white  py-2 text-white leading-tight placeholder:text-[#DEF2F1] focus:outline-none focus:border-white text-center"
              />
            </div>
            <div className="mb-4 flex md:flex-row flex-col md:items-center">
              <label className="block font-['Neue_Montreal'] text-[#112D32] md:text-5xl text-4xl">
                You can reach me at
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="mml-2 flex-grow bg-transparent border-b-2 border-white  py-2 text-white leading-tight placeholder:text-[#DEF2F1] focus:outline-none focus:border-white text-center"
              />
              <label className="md:ml-4  block font-['Neue_Montreal'] text-[#112D32] md:text-5xl text-4xl">
                to discuss this further.
              </label>
            </div>
            <div className="mb-4 flex md:flex-row flex-col md:items-center">
              <label className="block font-['Neue_Montreal'] text-[#112D32] md:text-5xl text-4xl">
                Optionally, I'm sharing more:
              </label>
              <input
                type="text"
                placeholder="Product details type here..."
                className="ml-2 flex-grow bg-transparent border-b-2 border-white  py-2 text-white leading-tight placeholder:text-[#DEF2F1] focus:outline-none focus:border-white text-center"
              />
            </div>
            <div className="flex items-end mt-8 justify-end">
              <button
                type="submit"
                className="flex gap-5 items-center md:px-6 px-3 py-3 md:py-3 mb-4 bg-zinc-900 rounded-full uppercase text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Submit
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
