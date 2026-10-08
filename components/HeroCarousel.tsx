"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import medicalImg from "@/assets/medical-sector.jpg";
import engineeringImg from "@/assets/engineering-sector.jpg";
import vocationalTrainingImg from "@/assets/vocational-training.jpg";
import vocationalEduImg from "@/assets/vocational-education.jpg";
import universityImg from "@/assets/university-students.jpg";

interface Slide {
  id: string;
  image: typeof medicalImg;
  title: string;
  subtitle: string;
  tag: string;
  badge: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: "medizin",
    image: medicalImg,
    title: "Medizinischer Sektor",
    subtitle: "Ärzte, Fachärzte & Pflegefachkräfte für deutsche Kliniken und Krankenhäuser.",
    tag: "Gesundheitswesen",
    badge: "Approbation & Anerkennung",
    alt: "Medizinischer Sektor - Ärzte und Pflegefachkräfte in Deutschland",
  },
  {
    id: "ingenieur",
    image: engineeringImg,
    title: "Ingenieurwesen & IT",
    subtitle: "Qualifizierte Fachkräfte für Industrie, Bauwirtschaft & moderne Spitzentechnologie.",
    tag: "Technik & Industrie",
    badge: "Fachkräfteverfahren § 81a",
    alt: "Ingenieurwesen und IT - Technische Fachkräfte",
  },
  {
    id: "ausbildung",
    image: vocationalTrainingImg,
    title: "Berufliche Ausbildung",
    subtitle: "Duale Ausbildungsgänge in zukunftssicheren Branchen mit Ausbildungsvergütung.",
    tag: "Duale Ausbildung",
    badge: "Azubi-Programme",
    alt: "Berufliche Ausbildung - Duale Fachausbildung in Deutschland",
  },
  {
    id: "qualifizierung",
    image: vocationalEduImg,
    title: "Praktische Qualifizierung",
    subtitle: "Zertifizierte Weiterbildung, Fachsprache & praktische Einsatzvorbereitung.",
    tag: "Weiterbildung",
    badge: "Zertifizierte Abschlüsse",
    alt: "Praktische Qualifizierung und Weiterbildung",
  },
  {
    id: "studium",
    image: universityImg,
    title: "Studium an Hochschulen",
    subtitle: "Begleitete Studienplatzvermittlung an staatlichen und privaten Universitäten.",
    tag: "Hochschulbereich",
    badge: "Bachelor & Master",
    alt: "Internationale Studierende an deutschen Universitäten",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay with pause-on-hover / pause-on-focus
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Schwerpunktbereiche Karussell"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="w-full bg-white border border-slate-200/90 rounded-3xl p-4 sm:p-6 shadow-md shadow-slate-200/50 flex flex-col justify-between transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
    >
      {/* Simple Header Text */}
      <div className="mb-4 px-1">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
          Unsere Schwerpunktbereiche
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 font-medium">
          Karriere- und Bildungswege in Deutschland
        </p>
      </div>

      {/* Main Slide Card */}
      <div
        className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides rendering */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.title} (${idx + 1} von ${total})`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          );
        })}
      </div>

      {/* Interactive Quick-Jump Pills & Indicators */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
        {/* Current Active Sector Caption (outside of image) */}
        <div className="text-center px-2">
          <span className="text-sm font-bold text-slate-900">
            {slides[currentIndex].title}
          </span>
          <span className="text-slate-300 mx-2">·</span>
          <span className="text-xs text-teal-800 font-semibold bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-full inline-block">
            {slides[currentIndex].badge}
          </span>
        </div>

        {/* Quick Sector Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {slides.map((s, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Gehe zu ${s.title}`}
                className={`text-xs px-3 py-2.5 rounded-xl font-semibold transition-all cursor-pointer min-h-[44px] flex items-center ${
                  isActive
                    ? "bg-teal-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {s.title.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* External Nav Arrows & Progress Dots */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Vorheriges Bild"
            className="min-w-[44px] min-h-[44px] w-10 h-10 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-1.5" aria-hidden="true">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`py-3 px-1 cursor-pointer group`}
              >
                <span className={`block h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-6 bg-teal-600" : "w-2 bg-slate-300 group-hover:bg-slate-400"
                }`} />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Nächstes Bild"
            className="min-w-[44px] min-h-[44px] w-10 h-10 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
