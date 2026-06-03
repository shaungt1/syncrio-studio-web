"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface LaserFlowProps {
  className?: string;
  color?: string;
  glowColor?: string;
  edgeColor?: string;
}

export default function LaserFlow({ className = "", color = "#5E0CAE", glowColor = "#A40DC3", edgeColor = "#22D3EE" }: LaserFlowProps) {
  const beams = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      top: 10 + i * 16,
      delay: i * 0.4,
      duration: 3 + Math.random() * 2,
      width: 40 + Math.random() * 30,
    }));
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute left-0 h-[2px] rounded-full"
          style={{
            top: `${beam.top}%`,
            width: `${beam.width}%`,
            background: `linear-gradient(90deg, transparent, ${color}, ${glowColor}, ${edgeColor}, transparent)`,
            boxShadow: `0 0 12px ${glowColor}, 0 0 24px ${color}`,
            filter: "blur(0.5px)",
          }}
          animate={{
            left: ["-40%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: beam.duration,
            repeat: Infinity,
            delay: beam.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
