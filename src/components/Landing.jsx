import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import LocomotiveScroll from "locomotive-scroll";

export default function Landing() {
  const locomotiveScroll = new LocomotiveScroll();
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-full mb-20 bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40  md:mt-36  px-4 md:px-10 lg:px-20">
        {["We Don't Make", "WEBSITES"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: width <= 768 ? "14vw" : "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="w-12 md:w-[6vw] relative md:h-[5.3vw] h-9 overflow-hidden"
                  >
                    <img
                      src="/cloud3.png"
                      className="rounded-md md:mt-0 mt-1 h-full "
                    />
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
            We build{" "}
            <span className="font-semibold font-[FoundersGrotesk] md:pl-2">
              Businesses
            </span>
          </h1>
        </div>
      </div>

      <div className="border-t-[1px] border-zinc-800 md:mt-32 mt-10 py-5 md:px-20 px-4 flex flex-col md:flex-row md:justify-between md:items-center">
        {[
          "For public and private companies",
          "From the first pitch to the last pitch IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-thin tracking-tight leading-none mb-3 md:mb-0 md:mr-5"
          >
            {item}
          </p>
        ))}

        <div className="flex items-center mt-5 md:mt-0">
          <motion.a
            href="/contact"
            className="border-[1px] mr-3 font-thin text-md border-white py-2 px-3 bg-black text-white relative overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.span
              className="absolute inset-0 bg-white"
              variants={{
                rest: { scaleY: 0, originY: 0.5 },
                hover: { scaleY: 1, originY: 0.5 },
              }}
              transition={{ ease: "easeInOut", duration: 1 }}
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
              Start the project
            </motion.span>
          </motion.a>
          <div className="w-9 h-9 flex items-center justify-center border-[1px] border-zinc-500 hover:text-black rounded-full hover:bg-gray-200 transition-colors duration-1000 transform  hover:rotate-45">
            <span>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
