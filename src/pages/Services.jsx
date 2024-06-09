import React from "react";
import ServiceLanding from "./serviceLanding";
import Process from "./Process";
import AboutS from "./AboutS";
import MarqueeService from "./marqueeS";

export default function Services() {
  return (
    <div className="w-fill min-h-screen text-white bg-zinc-900">
      <div>
        <ServiceLanding />
        <Process />
        <AboutS />
        <MarqueeService />
      </div>
    </div>
  );
}
