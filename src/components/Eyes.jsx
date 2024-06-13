import React, { useEffect, useState } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div
      className="eyes w-full h-screen overflow-hidden relative group"
      onClick={handleToggleVideo}
    >
      {showVideo ? (
        <div className="w-full h-full flex items-center justify-center bg-black">
          {isMobile ? (
            <video className="w-full h-full object-cover" autoPlay loop>
              <source src="./MobilePromox.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video className="w-full h-full object-cover" autoPlay loop>
              <source src="./promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : (
        <div
          data-scroll
          data-scroll-speed="-.7"
          className='relative w-full h-full bg-cover bg-center bg-[url("/eyes7.png")]'
        >
          <div className="absolute flex top-1/2 left-1/2 -translate-x-[50%] gap-10 -translate-y-[50%]">
            <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 items-center justify-center flex">
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
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
          {/* Tooltip */}
          <div className="tooltip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm bg-[#ffc0cb7a] px-2 py-1 rounded-md transform md:transition duration-300 ease-in-out md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-110">
            Click
          </div>
        </div>
      )}
    </div>
  );
}
