"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * BlurDissolveSlider
 * ------------------
 * A slideshow that does NOT slide left/right. Each slide blur-dissolves into
 * the next: the outgoing media goes soft and dissolves away from the edges
 * inward, while the incoming media blurs in from the centre outward.
 *
 * The whole card can also fade out into the page background from the bottom up
 * (optionally with a halftone dot dither), so it reads as if the slider melts
 * into the dark below it.
 */

export type BlurDissolveSlide =
  | { type: "image"; src: string; alt?: string; objectPosition?: string }
  | { type: "video"; src: string; poster?: string; objectPosition?: string }
  | { type: "node"; node: React.ReactNode; label?: string };

export interface BlurDissolveSliderProps {
  /** Ordered list of image / video / native preview slides. */
  slides: BlurDissolveSlide[];
  /** ms each slide is held before it dissolves to the next. Default 5000. */
  interval?: number;
  /** ms the blur-dissolve transition runs. Default 1300. */
  transitionDuration?: number;
  /** Peak blur radius (px) at the midpoint of the dissolve. Default 26. */
  blur?: number;
  /** CSS aspect-ratio for the frame, e.g. "16 / 9". Ignored if you set a height via className. Default "16 / 9". */
  aspectRatio?: string;
  /** Blend the bottom of the card into the page background. Default true. */
  bottomFade?: boolean;
  /** Add a halftone dot dither inside the bottom fade. Default true. */
  halftone?: boolean;
  /** Colour the bottom fades into — match your page background. Default deep syncrio navy. */
  fadeColor?: string;
  /** Height of the bottom fade band as a CSS length. Default "44%". */
  fadeHeight?: string;
  /** Wrap in the syncrio glass-card frame with scanline / grain overlays. Default true. */
  frame?: boolean;
  /** Slow cinematic zoom on the active slide. Default true. */
  kenBurns?: boolean;
  /** Pause autoplay while hovered. Default true. */
  pauseOnHover?: boolean;
  /** Show clickable position indicators. Default false. */
  showIndicators?: boolean;
  /** Autoplay through the slides. Default true. */
  autoPlay?: boolean;
  className?: string;
}

/** Soft feather (in % of radius) for the radial dissolve mask. */
const REVEAL_FEATHER = 45;
/** Radial-gradient mask whose visible disc is driven by the `--reveal` CSS var. */
const REVEAL_MASK = `radial-gradient(circle at 50% 47%, #000 max(0%, calc(var(--reveal) - ${REVEAL_FEATHER}%)), transparent var(--reveal))`;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function usePageVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onChange = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
  return visible;
}

interface SlideViewProps {
  slide: BlurDissolveSlide;
  index: number;
  count: number;
  blur: number;
  transitionDuration: number;
  interval: number;
  kenBurns: boolean;
  reduced: boolean;
}

function SlideView({
  slide,
  index,
  count,
  blur,
  transitionDuration,
  interval,
  kenBurns,
  reduced,
}: SlideViewProps) {
  // With reduced motion we keep a plain, fast cross-fade and skip the blur / mask.
  const variants = (reduced
    ? {
        enter: { opacity: 0, filter: "blur(0px)", scale: 1, "--reveal": "200%" },
        center: { opacity: 1, filter: "blur(0px)", scale: 1, "--reveal": "200%" },
        exit: { opacity: 0, filter: "blur(0px)", scale: 1, "--reveal": "200%" },
      }
    : {
        // Incoming: soft + zoomed, revealed disc tiny (centre only) → blurs in from the middle out.
        enter: { opacity: 0, filter: `blur(${blur}px)`, scale: 1.06, "--reveal": "10%" },
        center: { opacity: 1, filter: "blur(0px)", scale: 1, "--reveal": "165%" },
        // Outgoing: soft again, revealed disc collapses → dissolves away from the edges inward.
        exit: { opacity: 0, filter: `blur(${blur}px)`, scale: 1.04, "--reveal": "8%" },
      }) as unknown as Variants;

  const driftDuration = (interval + transitionDuration * 2) / 1000;

  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: (reduced ? Math.min(transitionDuration, 450) : transitionDuration) / 1000,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={
        {
          maskImage: reduced ? undefined : REVEAL_MASK,
          WebkitMaskImage: reduced ? undefined : REVEAL_MASK,
          "--reveal": "165%",
        } as React.CSSProperties
      }
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${count}`}
    >
      {/* Inner wrapper carries the slow Ken Burns drift so it composes with the dissolve scale. */}
      <motion.div
        className="absolute inset-0 h-full w-full"
        initial={{ scale: reduced || !kenBurns ? 1 : 1.0 }}
        animate={{ scale: reduced || !kenBurns ? 1 : 1.09 }}
        transition={{ duration: driftDuration, ease: "linear" }}
      >
        {slide.type === "image" ? (
          <img
            src={slide.src}
            alt={slide.alt ?? ""}
            draggable={false}
            decoding="async"
            className="h-full w-full select-none object-cover"
            style={{ objectPosition: slide.objectPosition ?? "center" }}
          />
        ) : slide.type === "video" ? (
          <video
            src={slide.src}
            poster={slide.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            style={{ objectPosition: slide.objectPosition ?? "center" }}
          />
        ) : (
          <div className="h-full w-full">{slide.node}</div>
        )}
      </motion.div>
    </motion.div>
  );
}

/** Bottom-up fade into the page, with an optional halftone dot dither band. */
function BottomFade({
  fadeColor,
  fadeHeight,
  halftone,
  glow,
}: {
  fadeColor: string;
  fadeHeight: string;
  halftone: boolean;
  glow: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
      style={{ height: fadeHeight }}
    >
      {/* Soft coloured glow so the card melts rather than hard-cuts. */}
      {glow && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(94,12,174,0.20), rgba(34,211,238,0.06) 55%, transparent)",
            filter: "blur(38px)",
          }}
        />
      )}

      {/* Halftone dither: dark dots in the page colour, densest mid-band, gone at the very bottom. */}
      {halftone && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${fadeColor} 1.05px, transparent 1.7px)`,
            backgroundSize: "6px 6px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 42%, #000 74%, transparent 97%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 42%, #000 74%, transparent 97%)",
          }}
        />
      )}

      {/* Solid blend into the page background. */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${fadeColor} 0%, ${fadeColor} 14%, transparent 100%)`,
        }}
      />
    </div>
  );
}

export default function BlurDissolveSlider({
  slides,
  interval = 5000,
  transitionDuration = 1300,
  blur = 26,
  aspectRatio = "16 / 9",
  bottomFade = true,
  halftone = true,
  fadeColor = "oklch(0.145 0.012 289)",
  fadeHeight = "44%",
  frame = true,
  kenBurns = true,
  pauseOnHover = true,
  showIndicators = false,
  autoPlay = true,
  className,
}: BlurDissolveSliderProps) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const reduced = usePrefersReducedMotion();
  const pageVisible = usePageVisible();
  const count = slides.length;

  // Keep the index valid if the slide list shrinks.
  const safeIndex = count > 0 ? index % count : 0;

  const playing = autoPlay && count > 1 && pageVisible && !(pauseOnHover && hovered);

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearTimeout(id);
  }, [playing, safeIndex, interval, count]);

  if (count === 0) return null;

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[28px]",
        frame && "syncrio-glass-card",
        className,
      )}
      style={{ aspectRatio }}
      role="group"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Media layer — masked so the imagery itself fades toward the bottom. */}
      <div
        className="absolute inset-0 z-10"
        style={
          bottomFade
            ? {
                maskImage: `linear-gradient(to bottom, #000 0%, #000 calc(100% - ${fadeHeight}), transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to bottom, #000 0%, #000 calc(100% - ${fadeHeight}), transparent 100%)`,
              }
            : undefined
        }
      >
        <AnimatePresence initial={false} mode="sync">
          <SlideView
            key={safeIndex}
            slide={slides[safeIndex]}
            index={safeIndex}
            count={count}
            blur={blur}
            transitionDuration={transitionDuration}
            interval={interval}
            kenBurns={kenBurns}
            reduced={reduced}
          />
        </AnimatePresence>
      </div>

      {bottomFade && (
        <BottomFade
          fadeColor={fadeColor}
          fadeHeight={fadeHeight}
          halftone={halftone}
          glow={frame}
        />
      )}

      {/* Frame texture overlays to match the syncrio aesthetic. */}
      {frame && (
        <>
          <div className="syncrio-scanlines pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-[0.12]" />
          <div className="syncrio-film-grain pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-30" />
          <div className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] ring-1 ring-inset ring-white/10" />
        </>
      )}

      {showIndicators && count > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-30 flex items-center justify-center gap-2">
          {slides.map((_, i) => {
            const active = i === safeIndex;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active
                    ? "w-6 bg-signal-cyan shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                    : "w-1.5 bg-white/35 hover:bg-white/60",
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
