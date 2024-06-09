import { motion, useAnimation } from "framer-motion";
import React from "react";

export default function ProjectsW() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 bg-[#B23850] rounded-t-3xl">
      <div className="w-full border-b-[1px] border-zinc-700 pb-10 px-10 md:px-20">
        <h1 className="text-4xl md:text-6xl font-['Neue_Montreal'] tracking-tight">
          Featured Work
        </h1>
      </div>
      <div className="px-10 md:px-20">
        <div className="cards w-full mt-10 md:mt-20 flex flex-col md:flex-row gap-8">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-full md:w-1/2 mb-8 relative h-[50%] md:h-[70%]"
          >
            <h1 className="absolute flex overflow-hidden md:translate-x-1/2 -translate-x-36 top-1/2 -translate-y-1/2 right-0 z-[9] text-[#CDEA68] leading-none tracking-tighter text-6xl md:text-8xl">
              {"UE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-lg md:max-w-[100%] lg:max-w-[100%] md:max-h-[40%] lg:max-h-[100%]">
              <div className="flex flex-row gap-2 mb-3">
                <div className="w-2 h-2 mt-2 bg-zinc-100 rounded-full"></div>
                <p className="font-['Neue_Montreal'] uppercase">Urban Escape</p>
              </div>
              <img className="w-full h-full bg-cover" src="./UE.jpg" alt="" />
            </div>
            <div className="flex mt-3 flex-wrap gap-3">
              {["Vacation Rental Site", "Dashboard", " Login/SignUp"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="border-[1px] font-thin border-white py-1 px-2 rounded-full bg-black text-white relative overflow-hidden"
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
                )
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-full md:w-1/2 md:mt-0 my-10 relative h-[50%] md:h-[70%]"
          >
            <div className="card w-full h-full md:max-w-[100%] lg:max-w-[100%] md:max-h-[40%] lg:max-h-[100%] overflow-hidden rounded-lg">
              <h1 className="absolute flex overflow-hidden md:translate-x-1/2 translate-x-72 top-1/2 -translate-y-1/2 right-full z-[9] text-[#CDEA68] leading-none tracking-tighter text-6xl md:text-8xl">
                {"JHUB".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="flex flex-row gap-2 mb-3">
                <div className="w-2 h-2 mt-2 bg-zinc-100 rounded-full"></div>
                <p className="font-['Neue_Montreal'] uppercase">Job Hub</p>
              </div>
              <img
                className="w-full h-full bg-cover "
                src="./JHUB.png"
                alt=""
              />
            </div>
            <div className="flex mt-3 flex-wrap gap-3">
              {["Job Portal", " Optimized Filtering", "Slick Design"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="border-[1px] font-thin border-white py-1 px-2 rounded-full bg-black text-white relative overflow-hidden"
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
                )
              )}
            </div>
          </motion.div>
        </div>
        <div className="cards w-full mt-10 md:mt-20 flex flex-col md:flex-row gap-8">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-full md:w-1/2 mb-8 relative h-[50%] md:h-[70%]"
          >
            <h1 className="absolute flex overflow-hidden md:translate-x-1/2 -translate-x-36 top-1/2 -translate-y-1/2 right-0 z-[9] text-[#CDEA68] leading-none tracking-tighter text-6xl md:text-8xl">
              {"V-M-T".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-lg md:max-w-[100%] lg:max-w-[100%] md:max-h-[40%] lg:max-h-[100%]">
              <div className="flex flex-row gap-2 mb-3">
                <div className="w-2 h-2 mt-2 bg-zinc-100 rounded-full"></div>
                <p className="font-['Neue_Montreal'] uppercase">Vermont</p>
              </div>
              <img
                className="w-full h-full bg-cover"
                src="./V-M-T.jpg"
                alt=""
              />
            </div>
            <div className="flex mt-3 flex-wrap gap-3">
              {["Ecommerce Site", "Product Card", " Product API"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="border-[1px] font-thin border-white py-1 px-2 rounded-full bg-black text-white relative overflow-hidden"
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
                )
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-full md:w-1/2 md:mt-0 my-10 relative h-[50%] md:h-[70%]"
          >
            <div className="card w-full h-full md:max-w-[100%] lg:max-w-[100%] md:max-h-[40%] lg:max-h-[100%] overflow-hidden rounded-lg">
              <h1 className="absolute flex overflow-hidden md:translate-x-1/2 translate-x-72 top-1/2 -translate-y-1/2 right-full z-[9] text-[#CDEA68] leading-none tracking-tighter text-6xl md:text-8xl">
                {"QRGEN".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="flex flex-row gap-2 mb-3">
                <div className="w-2 h-2 mt-2 bg-zinc-100 rounded-full"></div>
                <p className="font-['Neue_Montreal'] uppercase">QRGEN</p>
              </div>
              <img
                className="w-full h-full bg-cover "
                src="./QRGEN.jpg"
                alt=""
              />
            </div>
            <div className="flex mt-3 flex-wrap gap-3">
              {["QR Generator", "Free To Use", "Slick Design"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="border-[1px] font-thin border-white py-1 px-2 rounded-full bg-black text-white relative overflow-hidden"
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
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
