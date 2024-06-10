import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function ServiceLanding() {
  const controls = useAnimation();

  return (
    <div className="md:px-14 px-6 pt-32 md:pt-36 ">
      <h1 className="md:text-8xl mb-8 text-5xl font-semibold uppercase font-['impact']">
        Services
      </h1>
      <div className="w-full flex justify-center  ">
        <hr className="border-t border-white w-full absolute " />
      </div>
      <div className="md:text-6xl text-3xl mt-2 leading-tighter font-thin">
        <h1>
          Elevating your brand with impactful web{" "}
          <span className="text-zinc-900 hidden md:block"></span>
          designs that are both{" "}
          <span className="underline md:no-underline">visually stunning </span>
          <div className="md:block  hidden mt-2">
            <motion.div
              style={{
                width: "80%",
                maxWidth: "200px",
                height: "2px",
                background: "white",
                marginTop: 3,

                marginRight: "auto",
              }}
              onMouseEnter={() => {
                controls.start({
                  background: [
                    "linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%)",
                    "linear-gradient(90deg, white 0%, black 0%, black 100%, black 100%)",
                    "linear-gradient(90deg, white 100%, black 0%, white 100%, white 100%)",
                  ],
                  transition: {
                    duration: 2,
                    ease: "easeInOut",
                  },
                });
              }}
              animate={controls}
            />
          </div>
          and highly functional.
        </h1>

        <div className="md:hidden block">
          <motion.div
            style={{
              width: "50%",
              maxWidth: "200px",
              height: "2px",
              background: "white",
              marginTop: 3,
            }}
            onMouseEnter={() => {
              controls.start({
                background: [
                  "linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%)",
                  "linear-gradient(90deg, white 0%, black 0%, black 100%, black 100%)",
                  "linear-gradient(90deg, white 100%, black 0%, white 100%, white 100%)",
                ],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                },
              });
            }}
            animate={controls}
          />
        </div>

        <div className="mt-1 mb-2 md:block hidden">
          <motion.div
            className="underline-animation"
            style={{
              width: "80%",
              maxWidth: "400px",
              height: "2px",
              marginLeft: "100px",
              marginRight: "auto",
              background: "white",
            }}
            onMouseEnter={() => {
              controls.start({
                background: [
                  "linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%)",
                  "linear-gradient(90deg, white 0%, black 0%, black 100%, black 100%)",
                  "linear-gradient(90deg, white 100%, black 0%, white 100%, white 100%)",
                ],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                },
              });
            }}
            animate={controls}
          />
        </div>
      </div>
      <div className="w-full flex justify-center  mt-10">
        <hr className="border-t border-white w-full absolute " />
      </div>

      <div className="flex">
        <div className="mt-6 md:block hidden">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.line
              x1="10"
              y1="10"
              x2="190"
              y2="190"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
        <div className="md:mt-6  md:hidden block">
          <svg width="50" height="300" viewBox="0 0 40 200">
            <motion.line
              x1="10"
              y1="10"
              x2="10"
              y2="360"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
        <div className="md:mt-6 ">
          <svg width="50" height="500" viewBox="0 0 100 200">
            <motion.line
              x1="10"
              y1="10"
              x2="10"
              y2="360"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </div>
        <div className="p-6 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-['NeueMontreal-Regular']">
                We accomplish this by adhering
              </h2>
              <p className=" text-lg font-['NeueMontreal-Regular']">
                to a clear strategy:
              </p>
              <svg width="200" height="100" viewBox="0 0 560 200">
                <motion.line
                  x1="360"
                  y1="190"
                  x2="10"
                  y2="190"
                  stroke="white"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-1 gap-8">
              <div>
                <h2 className="text-sm font-thin mb-2 underline">
                  Goal defines it all
                </h2>
                <p className="font-thin text-sm">
                  What's your target? Knowing your goal is the first step to
                  crushing it. Whether you're you wanna money or in life,
                  clarity of purpose sets the stage for victory. Every move,
                  every decision should drive you closer to that goal.
                </p>
              </div>
              <div>
                <h2 className="text-sm underline font-thin mb-2">
                  Customers are the Gem
                </h2>
                <p className="font-thin text-sm">
                  Just like in the ring, you gotta study your opponent. We need
                  to know your audience well enough to deliver a knockout
                  performance that resonates. Make them feel like the heroes
                  they are. It's not about us; it's about them. Keep them at the
                  center, and you'll always come out on top.
                </p>
              </div>
              <div>
                <h2 className="text-sm underline font-thin mb-2">
                  Adaptability is the key
                </h2>
                <p className="font-thin text-sm">
                  Adaptability is key, my friend. Whether online or live, in a
                  sales meeting or at a conference, or even in the digital realm
                  of a cold email, the essence remains the same: connecting with
                  your audience. Understand the medium, know your audience, and
                  flow like water, adjusting your presentation style
                  accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
