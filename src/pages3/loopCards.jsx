import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    content: (
      <div className="flex flex-col">
        <div className="flex flex-row md:px-6 px-2 pt-4">
          <h1 className="text-4xl font-['NeueMontrealRegular'] items-start tracking-tight">
            kíwë
          </h1>
          <div className="flex flex-col items-end">
            <img
              src="./SouravCo.webp"
              className="md:w-5/12 w-2/3 rounded-lg "
            />
            <p className="text-sm font-thin">Co-Founder and CeO</p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-6 md:mt-0 mt-20">
          <div className="flex-col">
            <h1 className="text-3xl font-bold font-['FoundersGrotesk']">
              Sourob
            </h1>
            <h1 className="text-5xl font-semibold font-['FoundersGrotesk']">
              Guha Roy
            </h1>
          </div>
          <h1 className="md:text-3xl  pt-10">1/3</h1>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col font-['NeueMontrealRegular']">
        <div className="flex flex-row md:px-6 px-2 pt-4">
          <h1 className="text-4xl font-['NeueMontrealRegular'] items-start">
            kíwë
          </h1>
          <div className="flex flex-col items-end">
            <img
              src="./Co-Founder.png"
              className="md:w-1/4 w-1/2  rounded-lg"
            />
            <p className="text-sm font-thin">Co-Founder</p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-6 md:mt-0 mt-20">
          <div className="flex-col">
            <h1 className="text-4xl font-bold font-['FoundersGrotesk']">
              Ankan
            </h1>
            <h1 className="text-5xl font-semibold font-['FoundersGrotesk']">
              Ganguly
            </h1>
          </div>
          <h1 className="md:text-3xl pt-10">2/3</h1>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col font-['NeueMontrealRegular']">
        <div className="flex flex-row md:px-6 px-2 pt-4">
          <h1 className="text-4xl font-['NeueMontrealRegular'] items-start">
            kíwë
          </h1>
          <div className="flex flex-col items-end">
            <img
              src="./MarketingTeam.webp"
              className="md:w-1/4 w-1/2 rounded-lg"
            />
            <p className="text-sm font-thin">Sales and Marketing</p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-6 md:mt-0 mt-20">
          <div className="flex-col">
            <h1 className="text-4xl font-bold font-['FoundersGrotesk']">
              xxxxx
            </h1>
            <h1 className="text-5xl font-semibold font-['FoundersGrotesk']">
              xxxxxxxx
            </h1>
          </div>
          <h1 className="md:text-3xl pt-10">3/3</h1>
        </div>
      </div>
    ),
  },
  // Add more cards with different content as needed
];

const cardVariants = {
  initial: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1 },
};

const LoopCards = () => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Background shadows */}
      <div
        className="absolute bg-[#ffffff48] rounded-lg shadow-lg transform translate-x-12 translate-y-5 md:transform-none"
        style={{
          width: "82%", // Base width
          height: "35%", // Base height
          top: "28%", // Base top position
          right: "24%", // Base right position
          maxWidth: "732px", // Max width
          maxHeight: "310px", // Max height
          zIndex: 0,
        }}
      ></div>
      <div
        className="absolute bg-[#ffffff48] rounded-lg shadow-lg transform translate-x-12 translate-y-5 md:transform-none "
        style={{
          width: "84%", // Base width
          height: "40%", // Base height
          top: "26%", // Base top position
          right: "26%", // Base right position
          maxWidth: "680px", // Max width
          maxHeight: "320px", // Max height
          zIndex: 0,
        }}
      ></div>
      {/* Main card */}
      <AnimatePresence initial={false}>
        <motion.div
          key={cards[index].id}
          variants={cardVariants}
          initial="enter"
          animate="initial"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute w-[800px] h-[400px] bg-[#EDE8F5] flex justify-center items-center text-[#7091E6] rounded-lg shadow-lg cursor-pointer"
          style={{
            width: "80%", // Adjust as needed
            height: "60%", // Adjust as needed
            maxWidth: "800px", // Max width
            maxHeight: "300px", // Max height
            zIndex: 1, // Ensure the card is on top
          }}
          onClick={handleClick}
        >
          {cards[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoopCards;
