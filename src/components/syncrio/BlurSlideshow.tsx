"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface BlurSlide {
  /** URL of the image or video poster. Leave empty to render the `content` node instead. */
  src?: string;
  alt?: string;
  /** Optional caption rendered over the slide. */
  caption?: string;
  /** Custom JSX content (used when `src` is omitted). */
  content?: React.ReactNode;
}

interface BlurSlideshowProps {
  /**
   * Ordered list of slides. Each slide dissolves in place with a blur fade —
   * no horizontal sliding. Add images by pushing `{ src: "/path/to/image.jpg" }`
   * into the array. Drop in mp4/webm sources later by extending this component.
   *
   * To add slides:
   *   <BlurSlideshow slides={[{ src: "/demo-1.jpg" }, { src: "/demo-2.jpg" }]} />
   */
  slides: BlurSlide[];
  intervalMs?: number;
  className?: string;
  rounded?: string;
}

export default function BlurSlideshow({
  slides,
  intervalMs = 4200,
  className = "",
  rounded = "rounded-[20px]",
}: BlurSlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) return null;
  const slide = slides[index];

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, filter: "blur(20px)", scale: 1.04 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {slide.src ? (
            <img
              src={slide.src}
              alt={slide.alt ?? ""}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              {slide.content}
            </div>
          )}
          {slide.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 font-mono text-[10px] uppercase tracking-[0.28em] text-atomic-cream">
              {slide.caption}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i === index ? "bg-signal-cyan" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}