"use client";

import { motion } from "framer-motion";

interface RetroAtomProps {
  className?: string;
  spin?: boolean;
}

/**
 * 1950s Raygun-Gothic / Atomic Café atom mark — three orbital ellipses with
 * an electron travelling each ring and a hot nucleus. Used in nav + footer.
 */
export default function RetroAtom({ className = "", spin = true }: RetroAtomProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" aria-hidden="true">
        <defs>
          <radialGradient id="atomCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.97 0.01 85)" stopOpacity="1" />
            <stop offset="55%" stopColor="oklch(0.797 0.134 211.53)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="oklch(0.529 0.249 319.033)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[0, 60, 120].map((rot, i) => (
          <g key={i} style={{ transformOrigin: "32px 32px", transform: `rotate(${rot}deg)` }}>
            <ellipse
              cx="32"
              cy="32"
              rx="26"
              ry="10"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity={0.85 - i * 0.12}
            />
          </g>
        ))}
        <circle cx="32" cy="32" r="6" fill="url(#atomCore)" />
        <circle cx="32" cy="32" r="2.2" fill="oklch(0.94 0.06 85)" />
      </svg>

      {spin && (
        <>
          {[0, 60, 120].map((rot, i) => (
            <motion.span
              key={rot}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]"
              style={{
                transformOrigin: "0 0",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
              initial={{ rotate: rot }}
            >
              <span
                className="block h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-current"
                style={{ transform: `translate(40%, -50%) rotate(${-rot}deg)` }}
              />
            </motion.span>
          ))}
        </>
      )}
    </div>
  );
}