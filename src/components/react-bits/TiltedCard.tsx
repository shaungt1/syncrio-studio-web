"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  glareClassName?: string;
}

export default function TiltedCard({ children, className = "", glareClassName = "" }: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) / rect.width);
    y.set((e.clientY - cy) / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: 1000, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        x.set(0);
        y.set(0);
      }}
    >
      {children}
      {hovering && (
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/10 via-transparent to-transparent ${glareClassName}`}
          style={{ mixBlendMode: "overlay" }}
        />
      )}
    </motion.div>
  );
}
