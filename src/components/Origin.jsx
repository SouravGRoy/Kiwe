import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function OrginAnimation() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    const color = getColorFromRotation(rotate);
    if (ref.current) {
      ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
      ref.current.style.backgroundColor = color;
    }
  });

  const getColorFromRotation = (rotation) => {
    // Map rotation angle to a color range
    const colorRange = [
      "#FFFFFF",
      "#8cbcd3",
      "#303F9F",
      "#B23850",
      "#88BDBC",
      "#B3B4BD",
    ];
    const normalizedRotation = ((rotation % 360) + 360) % 360; // Ensure rotation is positive and within 360 degrees
    const colorIndex = Math.floor(normalizedRotation / 60); // Divide rotation angle into 60-degree segments
    return colorRange[colorIndex];
  };

  return (
    <div className="flex items-center justify-center rounded-full  w-full py-28 bg-zinc-900 perspective-1000">
      <div
        ref={ref}
        className="relative w-44 h-44 rounded-full transform-style-preserve-3d"
      >
        <div className="absolute w-44 h-44 rounded-full bg-opacity-90 border border-gray-200 flex items-center justify-center text-2xl text-black font-bold transform rotate-x--90 translate-z-18">
          Siliguri
        </div>
      </div>
    </div>
  );
}
