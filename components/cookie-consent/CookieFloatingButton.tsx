"use client";

import React from "react";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieFloatingButton() {
  const { isInitialized, isBannerOpen, isPreferencesOpen, openPreferences, t } =
    useCookieConsent();

  // If banner is already showing or preferences modal is open, or not hydrated yet, hide floating trigger
  if (!isInitialized || isBannerOpen || isPreferencesOpen) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      aria-label={t.floatingButtonLabel}
      title={t.floatingButtonLabel}
      className="fixed bottom-4 left-4 z-40 group flex items-center gap-2 p-2.5 sm:px-3 sm:py-2 bg-white/95 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-300 hover:border-slate-900 rounded-full shadow-lg hover:shadow-xl backdrop-blur-xs transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
    >
      <span className="w-5 h-5 flex items-center justify-center text-teal-700 group-hover:text-teal-400 transition-colors">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
          <path d="M11 17v.01" />
          <path d="M7 14v.01" />
        </svg>
      </span>
      <span className="text-xs font-semibold hidden sm:inline-block pr-1">
        {t.cookieSettings}
      </span>
    </button>
  );
}
