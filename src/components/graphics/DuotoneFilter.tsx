"use client";

import React from "react";

export const DuotoneFilter: React.FC = () => {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="duotone_filter" x="0%" y="0%" width="100%" height="100%">
          {/* Convert image to grayscale matrix */}
          <feColorMatrix
            type="matrix"
            result="grayscale"
            values="
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0    0    0    1 0
            "
          />
          {/* Map grayscale luminosity to theme duotone table */}
          <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
            <feFuncR type="table" tableValues="0.05 0.66 0.95" />
            <feFuncG type="table" tableValues="0.10 0.85 0.92" />
            <feFuncB type="table" tableValues="0.38 0.92 0.96" />
            <feFuncA type="table" tableValues="0 1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
};
