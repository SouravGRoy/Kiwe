import { motion } from "framer-motion";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative overflow-hidden bg-white shadow-lg rounded-lg h-72 w-64 m-2"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-xl font-['NeueMontreal-Regular'] mb-2 text-[#ADBBDA] font-semibold">
            {title}
          </h2>
          <p className="text-white font-['NeueMontreal-Regular'] text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="p-4 ">
        <h2 className="text-xl text-white font-semibold">{title}</h2>
      </div>
    </motion.div>
  );
};

export default function Youtube() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-1"
      className="md:px-14 px-6 pt-32 md:pt-36 "
    >
      <h1 className="md:text-9xl text-6xl font-semibold uppercase font-['FoundersGroteskX-Condensed']">
        Insights
      </h1>
      <div className="w-full flex justify-center  ">
        <hr className="border-t border-[#3D52A0] w-full absolute " />
      </div>
      <div className="flex justify-between flex-wrap">
        <h1 className="font-['NeueMontreal-Regular'] pt-3 text-md">
          Latest Insights:
        </h1>
        <div className="flex mt-3  gap-4">
          {["Youtube", "Web Agency", "Commune"].map((item, index) => (
            <motion.a
              key={index}
              href="https://www.youtube.com/channel/UCBoJRQLD2fb9SF004WG-8UA"
              className="border-[1px]  font-thin border-white py-1 px-2 rounded-full bg-black text-white relative overflow-hidden"
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

      <div className="flex mt-10 -ml-2">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-start">
            <Card
              title="Lost Space"
              description="LostSpace is the fastest growing Music Studio in WB"
              imageSrc={"./youtube1.webp"}
            />
            <h1 className="px-2 font-['NeueMontreal-Regular'] text-start text-[#EDE8F5]">
              GENRE: EDM, House, Electropop......
            </h1>
          </div>
          <div>
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Meida(Currently in Progress) "
              imageSrc={"./commune.webp"}
            />
            <h1 className="px-2 font-['NeueMontreal-Regular'] rounded-full border-[1px] text-start text-[#ede8f59a]">
              - In Progress
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
