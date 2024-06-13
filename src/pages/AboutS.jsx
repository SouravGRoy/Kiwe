import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const data = [
  {
    title: "RAISE FUNDS:",
    items: [
      {
        name: "INVESTOR DECK",
        link: "#",
        special: true,
        image: "/InvestorDeck.png",
      },
      { name: "STARTUP PITCH", link: "#" },
    ],
  },
  {
    title: "SELL PRODUCTS:",
    items: [
      { name: "BUSINESS PROPOSAL", link: "#", image: "/BusinessProposal.webp" },
      { name: "COMPANY PRESENTATION", link: "#" },
      { name: "PRODUCT PRESENTATION", link: "#" },
      { name: "SALES DECK", link: "#", image: "/ServiceDeck.webp" },
      { name: "SERVICE DECK", link: "#" },
    ],
  },
  {
    title: "HIRE & MANAGE PEOPLE:",
    items: [
      { name: "BIG NEWS ", link: "#", image: "/News.webp" },
      { name: "BRANDED ", link: "#" },
      { name: "ONBOARDING ", link: "#", image: "/Onboarding.webp" },
      { name: "POLICY DECK", link: "#" },
      { name: "PROGRESS ", link: "#", image: "/Progress.webp" },
    ],
  },
  {
    title: "ADDITIONAL:",
    items: [
      { name: "AGENCY", link: "#", image: "/Agency.webp" },
      { name: "BRANDING", link: "#" },
      {
        name: "CORPORATE ",
        link: "#",
        special: true,
        image: "/Corporate.webp",
      },
      { name: "REDESIGN", link: "#" },
      { name: "REVIEW", link: "#" },
    ],
  },
];

export default function AboutS() {
  const [hoveredImage, setHoveredImage] = useState("");

  return (
    <div>
      <div className="relative w-full py-28 md:p-14 p-6 mt-6 bg-[#bdd7e3c5] rounded-tl-3xl rounded-tr-3xl text-[#000]">
        {[
          "Let's face it. There's no longer any room for average",
          " Websites . In today's fast-paced world,  ",
          "clear communication is key.",
          " Let us handle your Websites and Marketing, ",
          "so you can concentrate on excelling in your business.",
        ].map((item, index) => (
          <h1
            key={index}
            className="font-['NeueMontreal-Regular'] text-2xl md:text-[3.8vw] leading-6 md:leading-[3.7vw] tracking-tight"
          >
            {item}
          </h1>
        ))}

        <div className="w-full flex justify-center">
          <hr className="border-t border-zinc-900 w-full absolute" />
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 mt-6 gap-4">
            <div>
              <h2 className="text-md font-['NeueMontreal-Regular'] mb-4">
                Our Capabilities:
              </h2>
            </div>
            <div className="relative md:block hidden overflow-hidden">
              <AnimatePresence>
                {hoveredImage && (
                  <motion.img
                    key={hoveredImage}
                    src={hoveredImage}
                    alt="Hovered"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
                  />
                )}
              </AnimatePresence>
            </div>
            {data.slice(0, 2).map((category, index) => (
              <div key={index}>
                <div className="flex flex-row gap-2 mb-3">
                  <div className="w-2 h-2 mt-2 bg-zinc-900 rounded-full"></div>
                  <h3 className="font-['NeueMontreal-Regular'] font-thin text-md mb-2">
                    {category.title}
                  </h3>
                </div>

                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href={item.link}
                        onMouseEnter={() => setHoveredImage(item.image)}
                        onMouseLeave={() => setHoveredImage("")}
                        className="font-thin px-2 py-1 mb-2 border-[1px] inline-block md:text-sm text-xs rounded-full"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="w-1/2"></div>
            <div className="flex md:w-1/2 w-auto md:px-3 md:justify-normal justify-between md:space-x-28 mt-4">
              {data.slice(2).map((category, index) => (
                <div key={index}>
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 mt-2 bg-zinc-900 rounded-full"></div>
                    <h3 className="font-['NeueMontreal-Regular'] font-thin text-md mb-2">
                      {category.title}
                    </h3>
                  </div>
                  <ul>
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.link}
                          onMouseEnter={() => setHoveredImage(item.image)}
                          onMouseLeave={() => setHoveredImage("")}
                          className="font-thin md:px-2 px-1 py-1 mb-2 border-[1px] inline-block md:text-sm text-xs rounded-full"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
