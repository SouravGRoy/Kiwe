import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex gap-5 w-full  bg-zinv-900  py-10 px-10 md:px-20 font-['Founders_Grotesk_X-Condensed']">
        <div className="w-11/12 flex flex-col h-full justify-between ">
          <div className="heading">
            <h1 className="md:text-8xl text-6xl font-semibold leading-none uppercase -mb-5 ">
              Eye-
            </h1>
            <h1 className="text-[8vw] font-semibold leading-none uppercase -mb-10 ">
              Opening
            </h1>
          </div>
        </div>
        <div className="w-full  md:w-1/2 text-center">
          <h1 className="md:text-8xl text-end text-5xl font-semibold leading-none uppercase -mb-5 ">
            WEBSITES
          </h1>
          <div className="text-start px-14 font-['Neue_Montreal'] font-thin  md:px-32 mt-20 ">
            <h1 className="mb-4 text-md font-thin">S:</h1>
            <a
              href="https://www.instagram.com/kiwe_media/?hl=en"
              className="block text-md underline leading-6 font-thin"
            >
              Instagram
            </a>
            <a
              href="https://x.com/SouravGRoy"
              className="block text-md underline leading-6 font-thin"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/sourob-guha-roy-0a2ba621a/"
              className="block text-md underline leading-6 font-thin"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:pl-32 px-14 md:px-0 justify-center md:justify-center gap-8 md:gap-20">
            <div className="dets font-['Neue_Montreal'] text-start  mt-8">
              <h1 className="mb-4 text-md font-thin">L:</h1>
              <a
                href="#"
                className="block text-md underline leading-6 font-thin"
              >
                Pradhan Nagar
              </a>
              <a
                href="#"
                className="block text-md underline leading-6 font-thin"
              >
                Siliguri, West Bengal
              </a>
              <a
                href="#"
                className="block text-md underline leading-6 font-thin"
              >
                734001
              </a>
            </div>
            <div className="dets font-['Neue_Montreal'] text-start ">
              <h1 className="mb-4 text-md font-thin">M:</h1>
              <a
                href="/"
                className="block text-md underline leading-6 font-thin"
              >
                Home
              </a>
              <a
                href="/work"
                className="block text-md underline leading-6 font-thin"
              >
                Our Work
              </a>
              <a
                href="/services"
                className="block text-md underline leading-6 font-thin"
              >
                Services
              </a>
              <a
                href="about"
                className="block text-md underline leading-6 font-thin"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block text-md underline leading-6 font-thin"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="dets font-['Neue_Montreal'] pl-14  text-start md:px-32 mt-8">
            <h1 className="mb-4 text-md font-thin">E:</h1>
            <a href="#" className="block text-md underline leading-6 font-thin">
              kiwe@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col items-start md:flex-row md:items-center md:px-14 px-6 mb-4">
        <div>
          {" "}
          <h1 className="font-['Neue_Montreal'] mb-4 font-semibold text-4xl ">
            kíwë
          </h1>
        </div>
        <div>
          {" "}
          <h1 className="font-['Neue_Montreal'] font-thin text-md ">
            © kíwë design 2024.
          </h1>
        </div>
        <div>
          {" "}
          <h1 className='font-["Neue_Montreal"] font-thin text-md '>
            Website by Sourav & Ankan
          </h1>
        </div>
      </div>
    </div>
  );
}
