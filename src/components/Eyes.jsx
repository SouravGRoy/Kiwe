import React, { useEffect, useState } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className='relative w-full h-full bg-cover bg-center bg-[url("/eyes7.png")]'
      >
        <div className="absolute flex top-1/2 left-1/2 -translate-x-[50%] gap-10 -translate-y-[50%] ">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 items-center justify-center flex">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="md:w-8 w-5 h-5 md:h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 items-center justify-center flex">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full h-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="md:w-8 w-5 h-5 md:h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
