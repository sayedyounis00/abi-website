"use client";

import React from "react";
import { useCookieConsent } from "./CookieConsentProvider";

interface CookieFooterButtonProps {
  className?: string;
  variant?: "link" | "footer-bar";
}

export default function CookieFooterButton({
  className = "",
  variant = "link",
}: CookieFooterButtonProps) {
  const { openPreferences, t } = useCookieConsent();

  if (variant === "footer-bar") {
    return (
      <button
        type="button"
        onClick={openPreferences}
        className={`hover:text-teal-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-sm cursor-pointer ${className}`}
      >
        {t.cookieSettings}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={`py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center text-left cursor-pointer ${className}`}
    >
      {t.cookieSettings}
    </button>
  );
}
