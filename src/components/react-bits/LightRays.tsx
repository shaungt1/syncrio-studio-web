"use client";

import React from "react";
import { motion } from "framer-motion";

interface LightRaysProps {
  className?: string;
  raysColor?: string;
  raysOrigin?: "top-center" | "bottom-center" | "center";
}

export default function LightRays({ className = "", raysColor = "#96C8FF", raysOrigin = "top-center" }: LightRaysProps) {
  const originClass = raysOrigin === "top-center" ? "top-0 left-1/2 -translate-x-1/2" :
    raysOrigin === "bottom-center" ? "bottom-0 left-1/2 -translate-x-1/2" :
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className={`absolute ${originClass} h-full w-full`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-0 h-full origin-top"
            style={{
              width: 2,
              rotate: (i - 3.5) * 12,
              background: `linear-gradient(to bottom, ${raysColor}, transparent)`,
              filter: "blur(1px)",
              opacity: 0.15,
            }}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}
