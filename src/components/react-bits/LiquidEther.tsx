"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface LiquidEtherProps {
  className?: string;
}

export default function LiquidEther({ className = "" }: LiquidEtherProps) {
  const blobs = useMemo(() => [
    { cx: 30, cy: 40, r: 120, color: "rgba(164,13,195,0.22)", delay: 0 },
    { cx: 70, cy: 60, r: 140, color: "rgba(47,107,255,0.16)", delay: 1.5 },
    { cx: 50, cy: 50, r: 100, color: "rgba(34,211,238,0.12)", delay: 3 },
  ], []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="liquid-blur">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>
        {blobs.map((blob, i) => (
          <motion.circle
            key={i}
            cx={`${blob.cx}%`}
            cy={`${blob.cy}%`}
            r={blob.r}
            fill={blob.color}
            filter="url(#liquid-blur)"
            animate={{
              cx: [`${blob.cx}%`, `${blob.cx + 10}%`, `${blob.cx - 8}%`, `${blob.cx}%`],
              cy: [`${blob.cy}%`, `${blob.cy - 8}%`, `${blob.cy + 10}%`, `${blob.cy}%`],
              r: [blob.r, blob.r * 1.15, blob.r * 0.9, blob.r],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: blob.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
