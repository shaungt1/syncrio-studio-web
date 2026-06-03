"use client";

import React from "react";

interface GradualBlurProps {
  className?: string;
  colorA?: string;
  colorB?: string;
}

export default function GradualBlur({ className = "", colorA = "rgba(94,12,174,0.24)", colorB = "rgba(34,211,238,0.08)" }: GradualBlurProps) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 ${className}`} style={{ bottom: 0, height: "100%" }}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${colorA}, ${colorB}, transparent)`,
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
