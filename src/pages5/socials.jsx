import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Socials() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Define an array of URLs for each social media platform
  const socialLinks = {
    INSTAGRAM: "https://www.instagram.com/kiwe_media/?hl=en",
    TWITTER: "https://x.com/SouravGRoy",
    FACEBOOK: "https://www.facebook.com/",
    LINKEDIN: "https://www.linkedin.com/in/sourob-guha-roy-0a2ba621a/",
  };

  return (
    <div className="relative py-44 md:px-14 bg-[#EDB5BF] rounded-t-3xl px-6 md:py-96">
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-10 z-0">
        {["INSTAGRAM", "TWITTER", "FACEBOOK", "LINKEDIN"].map((text, index) => (
          <motion.a
            key={index}
            className="text-[15vw] font-['FoundersGroteskX-Condensed'] leading-[7vw] md:leading-[9vw]  font-semibold text-black"
            whileHover={{
              scale: [1, 1.3, 1],
              rotate: [0, 360, 0],
              color: ["#000", "#FF6347", "#1E90FF", "#000"],
              transition: { duration: 1, ease: "easeInOut" },
            }}
            href={socialLinks[text]} // Use the corresponding URL from the socialLinks object
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            {text}
          </motion.a>
        ))}
      </div>
      <div className="eyes w-full overflow-hidden flex justify-center items-end relative z-10">
        <div className="flex gap-10">
          <div className="w-[13vw] h-[13vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
