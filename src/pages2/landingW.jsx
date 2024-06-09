import React, { useState, useEffect } from "react";

export default function LandingW() {
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

  return (
    <div className="pt-32 md:px-14 px-6 md:pt-36 relative">
      <h1 className="md:text-9xl text-6xl font-semibold uppercase font-['Founders_Grotesk_X-Condensed']">
        work
      </h1>
      <div className="eyes w-full overflow-hidden flex justify-center items-end mt-12 relative">
        <div className="flex gap-10">
          <div className="w-[17vw] h-[17vw] rounded-full bg-zinc-100 flex items-center justify-center">
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
          <div className="w-[17vw] h-[17vw] rounded-full bg-zinc-100 flex items-center justify-center">
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
        <div className="absolute bottom-0 rounded-t-3xl w-1/2 h-11 md:h-20 bg-[#bdd7e3e1]"></div>
        <div className="absolute -bottom-10 rounded-3xl w-text-center w-full h-16 md:h-20 bg-[#bdd7e3e1]"></div>
        {/* Adding a bottom strip to cover the eyes' bottom */}
      </div>
    </div>
  );
}
