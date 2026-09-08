"use client";

import React from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export const VectorPatternBg: React.FC = () => {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* Floating background geometric drift elements */}
      <div
        className="absolute top-12 left-8 w-48 h-48 rounded-full border-2 border-theme-line opacity-20 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${normalizedX * -25}px, ${normalizedY * -25}px) rotate(${normalizedX * 10}deg)`,
        }}
      >
        <div className="w-full h-full bg-stripes rounded-full opacity-60" />
      </div>

      <div
        className="absolute bottom-20 right-12 w-64 h-64 border-2 border-theme-line opacity-15 transition-transform duration-500 ease-out rotate-12"
        style={{
          transform: `translate(${normalizedX * 35}px, ${normalizedY * 35}px) rotate(${normalizedY * -15}deg)`,
        }}
      >
        <div className="w-full h-full bg-stripes opacity-40" />
      </div>

      {/* Floating accent badge dot */}
      <div
        className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-theme-fill border-2 border-theme-line transition-transform duration-300 opacity-60 shadow-neo-sm"
        style={{
          transform: `translate(${normalizedX * 18}px, ${normalizedY * 18}px)`,
        }}
      />
    </div>
  );
};
