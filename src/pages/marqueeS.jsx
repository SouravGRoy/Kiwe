import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    name: "Strategic Web Design:",
    description: " Crafting visually stunning, user-centric websites.",
  },
  {
    name: "Responsive Development: ",
    description: "Ensuring seamless adaptability across devices.",
  },
  {
    name: "SEO Optimization: ",
    description: " Boosting online visibility and organic traffic.",
  },
  {
    name: "Efficient CMS: ",
    description: "Empowering easy content management for clients.",
  },
  {
    name: "E-commerce Solutions:",
    description: "Building secure, sales-driven online stores.",
  },
  {
    name: "Digital Marketing Integration:",
    description: "Maximizing online reach and ROI with strategic tactics.",
  },
];

const services = [
  {
    id: 1,
    title: "Marketing",
  },
  {
    id: 2,
    title: "Business",
  },
  {
    id: 3,
    title: "Constant Growth",
  },
];

export default function MarqueeService() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full rounded-tl-xl py-16 rounded-tr-xl bg-[#B3B4BD]"
    >
      <div className="text border-t-2 border-b-2 overflow-hidden whitespace-nowrap flex border-zinc-300">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[28vw] pt-10 -mb-[7vw]  font-semibold uppercase leading-none font-['FoundersGroteskX-Condensed'] pr-20"
        >
          We're not here to take part, we're here to take over.
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[28vw] pt-10 -mb-[7vw] font-semibold uppercase leading-none font-['FoundersGroteskX-Condensed'] pr-20"
        >
          We're not here to take part, we're here to take over.
        </motion.h1>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-14 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-['NeueMontrealRegular'] tracking-tight text-gray-900 sm:text-xl">
            What you can expect ?
          </h2>
          <p className="mt-4 text-gray-500">
            "Expect tailor-made websites with creative design, responsive
            development, SEO optimization, and ongoing support for your business
            success. Timely delivery and transparent communication guaranteed."
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-lg flex flex-col justify-between bg-[#fafaf0] text-black"
            >
              <div>
                <h1 className="text-5xl font-['NeueMontrealRegular'] text-gray-500 p-6">
                  {String(index + 1).padStart(2, "0")}
                </h1>
              </div>
              <div className="flex justify-between p-6 flex-row">
                <div>
                  <p className="text-lg font-['NeueMontrealRegular'] underline text-gray-500">
                    {service.title}
                  </p>
                </div>
                <div>
                  <Link
                    to="/about"
                    className="text-lg font-['NeueMontrealRegular'] underline text-gray-500 cursor-pointer"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <img
            src="/shin1.webp"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
