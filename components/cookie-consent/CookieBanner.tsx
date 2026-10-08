"use client";

import React from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieBanner() {
  const {
    isInitialized,
    isBannerOpen,
    isPreferencesOpen,
    language,
    setLanguage,
    acceptAll,
    rejectAll,
    openPreferences,
    t,
  } = useCookieConsent();

  // Do not render before client hydration or if banner is dismissed or preference center is open
  if (!isInitialized || !isBannerOpen || isPreferencesOpen) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label={t.bannerTitle}
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-5 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="max-w-4xl mx-auto pointer-events-auto bg-white border border-slate-300 rounded-2xl shadow-2xl p-5 sm:p-7 text-slate-800">
        {/* Header with Title and Language Toggle */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 text-teal-700"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <h2
              id="cookie-banner-title"
              className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
            >
              {t.bannerTitle}
            </h2>
          </div>

          {/* Accessible Language Switcher */}
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("de")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                language === "de"
                  ? "bg-white text-slate-900 shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={language === "de"}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                language === "en"
                  ? "bg-white text-slate-900 shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>

        {/* Informative Explanation */}
        <p
          id="cookie-banner-desc"
          className="text-sm leading-relaxed text-slate-700 mb-5"
        >
          {t.bannerDescription}{" "}
          <Link
            href="/privacy-policy"
            className="text-teal-700 hover:text-teal-800 underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-sm"
          >
            {t.privacyPolicy}
          </Link>{" "}
          {t.and}{" "}
          <Link
            href="/impressum"
            className="text-teal-700 hover:text-teal-800 underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-sm"
          >
            {t.imprint}
          </Link>
          .
        </p>

        {/* Buttons with STRICT EQUAL PROMINENCE (GDPR / DSK Planet49 compliance) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 border border-slate-900 hover:border-teal-700 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
          >
            {t.bannerAcceptAll}
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 border border-slate-900 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
          >
            {t.bannerRejectAll}
          </button>
          <button
            type="button"
            onClick={openPreferences}
            className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-slate-900 hover:text-white bg-slate-100 hover:bg-slate-800 active:bg-slate-900 border border-slate-300 hover:border-slate-800 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
          >
            {t.bannerSettings}
          </button>
        </div>

        {/* Persistent Legal Links inside banner footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span>§ 25 TDDDG & Art. 7 DSGVO konform</span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-800 underline transition-colors"
            >
              {t.privacyPolicy}
            </Link>
            <Link
              href="/impressum"
              className="hover:text-slate-800 underline transition-colors"
            >
              {t.imprint}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
