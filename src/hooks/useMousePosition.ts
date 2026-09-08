"use client";

import { useEffect, useState } from "react";

export interface MousePosition {
  x: number; // screen pixel X
  y: number; // screen pixel Y
  normalizedX: number; // -1 to 1 (0 is screen center)
  normalizedY: number; // -1 to 1 (0 is screen center)
}

export function useMousePosition(): MousePosition {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate relative displacement from screen center (-1 to +1)
      const normX = ((e.clientX - windowWidth / 2) / (windowWidth / 2));
      const normY = ((e.clientY - windowHeight / 2) / (windowHeight / 2));

      setMousePos({
        x: e.clientX,
        y: e.clientY,
        normalizedX: Math.max(-1, Math.min(1, normX)),
        normalizedY: Math.max(-1, Math.min(1, normY)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePos;
}
