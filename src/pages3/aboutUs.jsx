import React from "react";
import LandingAUS from "./landingAUS";
import MediaUs from "./mediaUs";
import LoopCards from "./loopCards";
import HeaderUs from "./headersUs";

export default function AboutUs() {
  return (
    <div className="w-fill min-h-screen text-white bg-[#E7717D]">
      <div>
        <LandingAUS />
        <MediaUs />
        <LoopCards />
        <HeaderUs />
      </div>
    </div>
  );
}
