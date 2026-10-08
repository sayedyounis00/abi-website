"use client";

import React, { useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";

interface YouTubeConsentEmbedProps {
  videoId: string;
  title: string;
  aspectRatio?: "16/9" | "4/3";
  className?: string;
}

export default function YouTubeConsentEmbed({
  videoId,
  title,
  aspectRatio = "16/9",
  className = "",
}: YouTubeConsentEmbedProps) {
  const { hasConsent, savePreferences, consent, t } = useCookieConsent();
  const [loadOnce, setLoadOnce] = useState(false);

  const hasMarketingConsent = hasConsent("marketing");
  const isAllowedToRender = hasMarketingConsent || loadOnce;

  const handleAcceptMarketingPermanently = () => {
    savePreferences({
      preferences: consent?.preferences ?? false,
      analytics: consent?.analytics ?? false,
      marketing: true,
    });
  };

  const handleLoadOnce = () => {
    setLoadOnce(true);
  };

  if (isAllowedToRender) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-black ${className}`}
        style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-slate-300 bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center shadow-md ${className}`}
      style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
    >
      <div className="max-w-md mx-auto space-y-4">
        {/* YouTube / Media Icon */}
        <div className="w-14 h-14 mx-auto rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>

        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {title || t.embedBlockedTitle}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
            {t.embedBlockedDescription}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={handleLoadOnce}
            className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {t.embedLoadOnce}
          </button>
          <button
            type="button"
            onClick={handleAcceptMarketingPermanently}
            className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 border border-teal-500 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {t.embedAcceptMarketing}
          </button>
        </div>
      </div>
    </div>
  );
}
