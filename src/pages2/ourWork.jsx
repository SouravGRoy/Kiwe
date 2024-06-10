import React from "react";
import LandingW from "./landingW";
import ProjectsW from "./projectsW";
import CustomCursor from "../components/CustomCurser";

export default function OurWork() {
  return (
    <div className="w-fill min-h-screen text-white bg-[#8cbcd3]">
      <div>
        <CustomCursor />
        <LandingW />
        <ProjectsW />
      </div>
    </div>
  );
}
