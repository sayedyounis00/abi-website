"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AbiLogo from "./AbiLogo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg">
          <AbiLogo className="h-9 sm:h-10 w-auto group-hover:opacity-95 transition-opacity" />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
          >
            Startseite
          </Link>
          <Link
            href="/#ueber-uns"
            className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
          >
            Über uns
          </Link>
          <Link
            href="/#ablauf"
            className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
          >
            Ablauf
          </Link>
          <Link
            href="/#leistungen"
            className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
          >
            Leistungen
          </Link>
          <Link
            href="/#partner"
            className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
          >
            Partner
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
          >
            Datenschutz
          </Link>
        </nav>

        {/* Header Actions Cluster (CTA + Mobile menu trigger) */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center">
            <a
              href="#beratung"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-bg shadow-sm hover:shadow-md hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="hidden sm:inline">Kostenlose Erstberatung</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label="Hauptmenü umschalten"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-40 top-20"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden relative z-50 bg-white border-b border-slate-200 px-5 pt-3 pb-6 flex flex-col gap-1.5 shadow-xl">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-teal-700 min-h-[44px] flex items-center px-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              Startseite
            </Link>
            <Link
              href="/#ueber-uns"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-teal-700 min-h-[44px] flex items-center px-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              Über uns
            </Link>
            <Link
              href="/#ablauf"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-teal-700 min-h-[44px] flex items-center px-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              Ablauf
            </Link>
            <Link
              href="/#leistungen"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-teal-700 min-h-[44px] flex items-center px-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              Leistungen
            </Link>
            <Link
              href="/#partner"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-teal-700 min-h-[44px] flex items-center px-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              Partner
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-teal-700 min-h-[44px] flex items-center px-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
            >
              Datenschutz
            </Link>
            <a
              href="#beratung"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center py-3.5 px-4 rounded-xl font-bold text-white gradient-bg shadow-sm min-h-[48px] flex items-center justify-center text-sm"
            >
              Kostenlose Erstberatung starten
            </a>
          </div>
        </>
      )}
    </header>
  );
}
