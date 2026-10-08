"use client";

import React, { useEffect, useState } from "react";

/**
 * ScrollProgressSlider
 * Displays an elegant, high-craft progress indicator at the top of the viewport
 * that increases smoothly with page scroll progress.
 * Adheres to ABI design system: teal (#0d9488) to azure (#0284c7) gradient,
 * subtle ambient glow, accessible ARIA attributes, and handles resize/scroll events cleanly.
 */
export default function ScrollProgressSlider() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;

      if (maxScroll <= 0) {
        setScrollProgress(0);
      } else {
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
        setScrollProgress(progress);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Calculate initial progress on mount
    updateScrollProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const progressPercent = Math.round(scrollProgress * 100);

  return (
    <div
      role="progressbar"
      aria-label="Lesefortschritt"
      aria-valuenow={progressPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-teal-600 via-teal-500 to-sky-500 origin-left will-change-transform shadow-[0_0_8px_rgba(13,148,136,0.35)] transition-transform duration-75 ease-out"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />
    </div>
  );
}
