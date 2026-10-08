import React from "react";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 w-[450px] h-[450px] bg-sky-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 break-words">
              Arbeit Bildung International
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8 max-w-2xl font-normal">
              Ihr verlässlicher Partner für die Vermittlung qualifizierter Fachkräfte aus dem Ausland auf den deutschen Arbeitsmarkt sowie in die akademische und berufliche Ausbildung.
            </p>

            {/* Dual-Track Segmentation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a
                href="#beratung"
                className="inline-flex items-center justify-center px-5 sm:px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-white gradient-bg shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center min-h-[48px]"
              >
                <svg className="w-5 h-5 mr-2.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Kostenlose Erstberatung starten</span>
              </a>
              <a
                href="#ablauf"
                className="inline-flex items-center justify-center px-5 sm:px-7 py-4 rounded-2xl text-sm sm:text-base font-semibold text-slate-700 bg-white border border-slate-300 shadow-sm hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 transition-all text-center min-h-[48px]"
              >
                <span>Ablauf & Leistungen</span>
                <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 flex-shrink-0" />
                <span>A1–C1 Sprachvorbereitung</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600 flex-shrink-0" />
                <span>Offizielle Anerkennung</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 flex-shrink-0" />
                <span>Onboarding vor Ort</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Carousel */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
