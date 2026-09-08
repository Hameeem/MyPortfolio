"use client";

import React, { useState, useEffect } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import confetti from "canvas-confetti";

export const InteractiveAvatar: React.FC = () => {
  const { normalizedX, normalizedY } = useMousePosition();
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [speechBubble, setSpeechBubble] = useState<string | null>("Hover or click me! 🤘");
  const [glasses, setGlasses] = useState(true);

  // Smooth lerped eye offset calculation (max pupil displacement)
  const pupilX = normalizedX * 9;
  const pupilY = normalizedY * 7;

  // Head yaw & tilt displacement
  const headX = normalizedX * 14;
  const headY = normalizedY * 10;
  const headRotate = normalizedX * 6;

  // Eyebrow lift
  const eyebrowY = normalizedY < -0.2 ? -5 : normalizedY * 3;

  const handleClick = (e: React.MouseEvent) => {
    setIsClicked(true);
    setSpeechBubble("Let's build something awesome together! 🚀");
    
    // Launch confetti burst from avatar click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ["#7f00e0", "#aadcec", "#ff5e7e", "#ffc107"],
    });

    setTimeout(() => setIsClicked(false), 800);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpeechBubble(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [speechBubble]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none group">
      {/* Speech / Status Bubble */}
      {speechBubble && (
        <div className="absolute -top-12 z-20 bg-theme-card text-theme-text font-bold text-sm px-4 py-2 rounded-full border-2 border-theme-line shadow-neo transition-all duration-300 animate-bounce">
          {speechBubble}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-theme-card border-b-2 border-r-2 border-theme-line rotate-45" />
        </div>
      )}

      {/* Main Avatar Wrapper */}
      <div
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setSpeechBubble("Hi there! 👋");
        }}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer transition-transform duration-200 active:scale-95"
      >
        {/* Background Decorative Frame */}
        <div
          className="absolute inset-0 rounded-full border-4 border-theme-line bg-theme-fill bg-stripes opacity-80 shadow-neo-lg transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${normalizedX * -10}px, ${normalizedY * -10}px)`,
          }}
        />

        {/* SVG Character Model */}
        <svg
          viewBox="0 0 500 500"
          className="relative z-10 w-full h-full drop-shadow-md"
          style={{ filter: "url(#duotone_filter)" }}
        >
          <g
            className="transition-transform duration-150 ease-out"
            style={{
              transform: `translate(${headX}px, ${headY}px) rotate(${headRotate}deg)`,
              transformOrigin: "250px 350px",
            }}
          >
            {/* Shoulders & Shirt */}
            <path
              d="M120 450 C 120 380, 180 340, 250 340 C 320 340, 380 380, 380 450 Z"
              fill="var(--theme-fill)"
              stroke="var(--theme-line)"
              strokeWidth="8"
            />
            {/* Shirt Collar Detail */}
            <path
              d="M 210 340 L 250 380 L 290 340"
              fill="none"
              stroke="var(--theme-line)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Neck */}
            <rect
              x="220"
              y="280"
              width="60"
              height="70"
              rx="10"
              fill="var(--theme-bg)"
              stroke="var(--theme-line)"
              strokeWidth="8"
            />
            {/* Adams Apple detail */}
            <path
              d="M 240 320 Q 250 328 260 320"
              fill="none"
              stroke="var(--theme-line)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Ears */}
            <circle cx="155" cy="220" r="22" fill="var(--theme-bg)" stroke="var(--theme-line)" strokeWidth="8" />
            <circle cx="345" cy="220" r="22" fill="var(--theme-bg)" stroke="var(--theme-line)" strokeWidth="8" />

            {/* Head Base */}
            <path
              d="M 160 200 C 160 110, 340 110, 340 200 C 340 290, 310 300, 250 300 C 190 300, 160 290, 160 200 Z"
              fill="var(--theme-bg)"
              stroke="var(--theme-line)"
              strokeWidth="8"
            />

            {/* Beard & Stubble Base */}
            <path
              d="M 164 220 C 164 300, 336 300, 336 220 C 336 280, 300 295, 250 295 C 200 295, 164 280, 164 220 Z"
              fill="var(--theme-fill)"
              opacity="0.6"
              stroke="var(--theme-line)"
              strokeWidth="4"
            />

            {/* Curly Hair Group */}
            <g className="curly-hair">
              {/* Volumetric Curly Hair Silhouette */}
              <path
                d="M 142 195 
                   C 130 170, 135 140, 155 125 
                   C 145 95, 175 75, 205 85 
                   C 215 55, 255 50, 275 75 
                   C 305 60, 335 80, 335 110 
                   C 355 120, 365 155, 350 180 
                   C 360 200, 345 225, 335 220
                   C 320 200, 325 155, 310 145
                   C 285 130, 215 130, 190 145
                   C 175 155, 175 190, 160 215
                   Z"
                fill="var(--theme-line)"
                stroke="var(--theme-line)"
                strokeWidth="8"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              
              {/* Curly Hair Ringlets Texture (Inner Swirls & Curls) */}
              {/* Left Curls */}
              <circle cx="160" cy="130" r="16" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />
              <circle cx="185" cy="100" r="18" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />
              <circle cx="215" cy="80" r="20" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />
              {/* Center Top Curls */}
              <circle cx="250" cy="70" r="22" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />
              <circle cx="285" cy="80" r="20" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />
              {/* Right Curls */}
              <circle cx="315" cy="100" r="18" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />
              <circle cx="340" cy="130" r="16" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />
              <circle cx="345" cy="170" r="14" fill="var(--theme-line)" stroke="var(--theme-fill)" strokeWidth="4" />

              {/* Forehead Curly Fringe Ringlets */}
              <path d="M 180 145 Q 195 165 210 145" fill="none" stroke="var(--theme-fill)" strokeWidth="6" strokeLinecap="round" />
              <path d="M 210 140 Q 230 165 245 140" fill="none" stroke="var(--theme-fill)" strokeWidth="6" strokeLinecap="round" />
              <path d="M 250 140 Q 270 165 285 140" fill="none" stroke="var(--theme-fill)" strokeWidth="6" strokeLinecap="round" />
              <path d="M 285 145 Q 305 165 320 145" fill="none" stroke="var(--theme-fill)" strokeWidth="6" strokeLinecap="round" />
            </g>

            {/* Eyebrows (Dynamic Y) */}
            <g style={{ transform: `translateY(${eyebrowY}px)` }}>
              {/* Left Eyebrow */}
              <path
                d="M 180 175 Q 205 160 225 175"
                fill="none"
                stroke="var(--theme-line)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Right Eyebrow */}
              <path
                d="M 275 175 Q 295 160 320 175"
                fill="none"
                stroke="var(--theme-line)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>

            {/* Eyes Sockets & Tracking Pupils */}
            {/* Left Eye */}
            <g transform="translate(200, 200)">
              <circle cx="0" cy="0" r="18" fill="var(--theme-bg)" stroke="var(--theme-line)" strokeWidth="6" />
              {/* Left Pupil */}
              <circle
                cx={pupilX}
                cy={pupilY}
                r={isClicked ? "3" : isHovered ? "9" : "7"}
                fill="var(--theme-line)"
                className="transition-all duration-75"
              />
            </g>

            {/* Right Eye */}
            <g transform="translate(300, 200)">
              <circle cx="0" cy="0" r="18" fill="var(--theme-bg)" stroke="var(--theme-line)" strokeWidth="6" />
              {/* Right Pupil */}
              <circle
                cx={pupilX}
                cy={pupilY}
                r={isClicked ? "3" : isHovered ? "9" : "7"}
                fill="var(--theme-line)"
                className="transition-all duration-75"
              />
            </g>

            {/* Glasses (Toggleable retro frames) */}
            {glasses && (
              <g>
                <circle cx="200" cy="200" r="26" fill="none" stroke="var(--theme-line)" strokeWidth="6" />
                <circle cx="300" cy="200" r="26" fill="none" stroke="var(--theme-line)" strokeWidth="6" />
                <line x1="226" y1="200" x2="274" y2="200" stroke="var(--theme-line)" strokeWidth="6" />
                <line x1="155" y1="200" x2="174" y2="200" stroke="var(--theme-line)" strokeWidth="6" />
                <line x1="326" y1="200" x2="345" y2="200" stroke="var(--theme-line)" strokeWidth="6" />
              </g>
            )}

            {/* Nose */}
            <path
              d="M 250 200 L 242 235 L 255 235"
              fill="none"
              stroke="var(--theme-line)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Mouth */}
            {isClicked ? (
              /* Surprised / Cheerful open mouth */
              <ellipse cx="250" cy="265" rx="14" ry="12" fill="var(--theme-line)" />
            ) : isHovered ? (
              /* Big Smile */
              <path
                d="M 220 255 Q 250 285 280 255"
                fill="none"
                stroke="var(--theme-line)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            ) : (
              /* Subtle Cool Smile */
              <path
                d="M 225 260 Q 250 272 275 260"
                fill="none"
                stroke="var(--theme-line)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            )}
          </g>
        </svg>
      </div>

      {/* Quick Specs / Accessory Toggle */}
      <button
        onClick={() => setGlasses(!glasses)}
        className="mt-4 text-xs font-bold uppercase tracking-wider text-theme-subtext hover:text-theme-text flex items-center gap-2 bg-theme-card px-3 py-1.5 rounded-full border border-theme-line shadow-neo-sm transition-all"
      >
        <span>👓 Toggle Specs</span>
      </button>
    </div>
  );
};
