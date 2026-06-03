"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface SideRaysProps {
  className?: string;
  speed?: number;
  rayColor1?: string;
  rayColor2?: string;
  intensity?: number;
  spread?: number;
  origin?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  opacity?: number;
}

export default function SideRays({
  className = "",
  speed = 2,
  rayColor1 = "#5E0CAE",
  rayColor2 = "#96C8FF",
  intensity = 1,
  spread = 1.2,
  origin = "top-right",
  opacity = 0.34,
}: SideRaysProps) {
  const rays = useMemo(() => {
    const count = 12;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      width: 1 + Math.random() * 2,
      delay: i * 0.15,
      duration: 3 + Math.random() * 2,
      angle: (i / count) * 30 * spread - 15,
    }));
  }, [spread]);

  const getOriginStyles = () => {
    switch (origin) {
      case "top-right":
        return { right: 0, top: 0, transformOrigin: "top right" };
      case "top-left":
        return { left: 0, top: 0, transformOrigin: "top left" };
      case "bottom-right":
        return { right: 0, bottom: 0, transformOrigin: "bottom right" };
      case "bottom-left":
        return { left: 0, bottom: 0, transformOrigin: "bottom left" };
    }
  };

  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} style={{ opacity }}>
      {rays.map((ray) => (
        <motion.div
          key={ray.id}
          className="absolute h-[140%]"
          style={{
            width: ray.width,
            right: origin.includes("right") ? `${ray.id * 6}%` : undefined,
            left: origin.includes("left") ? `${ray.id * 6}%` : undefined,
            top: origin.includes("top") ? 0 : undefined,
            bottom: origin.includes("bottom") ? 0 : undefined,
            transformOrigin: getOriginStyles().transformOrigin,
            rotate: ray.angle,
            background: `linear-gradient(to ${origin.includes("bottom") ? "top" : "bottom"}, transparent, ${rayColor1}, ${rayColor2}, transparent)`,
            filter: `blur(${1.5 * intensity}px)`,
          }}
          animate={{
            opacity: [0.3, 0.8 * intensity, 0.3],
            scaleY: [0.85, 1.05, 0.85],
          }}
          transition={{
            duration: ray.duration / speed,
            repeat: Infinity,
            delay: ray.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
