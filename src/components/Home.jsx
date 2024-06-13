import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Marquee from "./Marquee";
import About from "./About";
import Eyes from "./Eyes";
import Featured from "./Featured";
import Cards from "./Cards";
import Footer from "./Footer";
import OrginAnimation from "./Origin";

export default function Home() {
  return (
    <div className="w-fill min-h-screen text-white bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <OrginAnimation />
      <Footer />
    </div>
  );
}
