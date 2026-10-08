"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_CONFIG,
  ConsentCategory,
} from "@/config/cookieConsent";
import { useCookieConsent } from "./CookieConsentProvider";

function PreferencesDialogContent() {
  const {
    consent,
    language,
    setLanguage,
    savePreferences,
    acceptAll,
    rejectAll,
    closePreferences,
    t,
  } = useCookieConsent();

  // Local state initialized on mount without needing an effect
  const [preferences, setPreferences] = useState({
    preferences: consent?.preferences ?? false,
    analytics: consent?.analytics ?? false,
    marketing: consent?.marketing ?? false,
  });

  const [expandedDetails, setExpandedDetails] = useState<
    Record<ConsentCategory, boolean>
  >({
    necessary: false,
    preferences: false,
    analytics: false,
    marketing: false,
  });

  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap, initial focus, and escape listener
  useEffect(() => {
    const previousElement = document.activeElement as HTMLElement | null;

    // Focus first focusable item
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePreferences();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      previousElement?.focus();
    };
  }, [closePreferences]);

  const toggleCategory = (cat: "preferences" | "analytics" | "marketing") => {
    setPreferences((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const toggleDetails = (cat: ConsentCategory) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const handleSaveSelection = () => {
    savePreferences(preferences);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      aria-describedby="cookie-preferences-desc"
    >
      <div
        ref={modalRef}
        className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-800 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-800"
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
              id="cookie-preferences-title"
              className="text-lg sm:text-xl font-bold text-slate-900"
            >
              {t.modalTitle}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("de")}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  language === "de"
                    ? "bg-slate-900 text-white font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  language === "en"
                    ? "bg-slate-900 text-white font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                EN
              </button>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={closePreferences}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
              aria-label={t.closeModal}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p
            id="cookie-preferences-desc"
            className="text-sm leading-relaxed text-slate-600"
          >
            {t.modalDescription}
          </p>

          <div className="space-y-4">
            {COOKIE_CONSENT_CONFIG.categories.map((cat) => {
              const isRequired = cat.required;
              const isChecked =
                isRequired ||
                preferences[cat.id as "preferences" | "analytics" | "marketing"];
              const isExpanded = expandedDetails[cat.id];

              return (
                <div
                  key={cat.id}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs transition-colors"
                >
                  {/* Category Header */}
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-slate-900 text-base">
                          {cat.title[language]}
                        </h3>
                        {isRequired ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-200 text-slate-800">
                            {t.alwaysActive}
                          </span>
                        ) : (
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              isChecked
                                ? "bg-teal-100 text-teal-800"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {isChecked ? t.active : t.inactive}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                        {cat.shortDescription[language]}
                      </p>
                    </div>

                    {/* Switch Toggle */}
                    <div className="flex items-center self-end sm:self-center">
                      {isRequired ? (
                        <div
                          className="w-12 h-6 bg-slate-300 rounded-full cursor-not-allowed opacity-60 p-0.5 flex items-center justify-end"
                          aria-disabled="true"
                          title={t.alwaysActive}
                        >
                          <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                        </div>
                      ) : (
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isChecked}
                          aria-label={`${cat.title[language]} umschalten`}
                          onClick={() =>
                            toggleCategory(
                              cat.id as "preferences" | "analytics" | "marketing"
                            )
                          }
                          className={`w-12 h-6 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-700 p-0.5 flex items-center ${
                            isChecked
                              ? "bg-teal-700 justify-end"
                              : "bg-slate-300 justify-start"
                          }`}
                        >
                          <div className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Legal Details / Cookie Accordion */}
                  <div className="px-4 sm:px-5 pb-4 pt-1 border-t border-slate-100 bg-white">
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {cat.fullDescription[language]}
                    </p>

                    <button
                      type="button"
                      onClick={() => toggleDetails(cat.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer py-1"
                      aria-expanded={isExpanded}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transform transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {isExpanded ? t.hideCookieDetails : t.cookieDetails} (
                      {cat.cookies.length})
                    </button>

                    {/* Detailed Cookies Table */}
                    {isExpanded && (
                      <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
                        <table className="w-full text-left text-xs text-slate-700 divide-y divide-slate-200">
                          <thead className="bg-slate-50 font-semibold text-slate-800">
                            <tr>
                              <th className="px-3 py-2">{t.colName}</th>
                              <th className="px-3 py-2">{t.colProvider}</th>
                              <th className="px-3 py-2">{t.colPurpose}</th>
                              <th className="px-3 py-2">{t.colDuration}</th>
                              <th className="px-3 py-2">{t.colCountry}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            {cat.cookies.map((cookie, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50">
                                <td className="px-3 py-2 font-mono font-medium text-slate-900">
                                  {cookie.name}
                                </td>
                                <td className="px-3 py-2">{cookie.provider}</td>
                                <td className="px-3 py-2 leading-relaxed">
                                  {cookie.purpose[language]}
                                </td>
                                <td className="px-3 py-2 whitespace-nowrap">
                                  {cookie.duration[language]}
                                </td>
                                <td className="px-3 py-2">
                                  {cookie.country || "-"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer with Actions (EQUAL PROMINENCE) */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <Link
              href="/privacy-policy"
              className="underline hover:text-slate-800"
              onClick={closePreferences}
            >
              {t.privacyPolicy}
            </Link>
            <span>•</span>
            <Link
              href="/impressum"
              className="underline hover:text-slate-800"
              onClick={closePreferences}
            >
              {t.imprint}
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={rejectAll}
              className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 border border-slate-900 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              {t.rejectAllModal}
            </button>
            <button
              type="button"
              onClick={handleSaveSelection}
              className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:text-white bg-slate-100 hover:bg-slate-800 active:bg-slate-900 border border-slate-300 hover:border-slate-800 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              {t.saveSelection}
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 border border-slate-900 hover:border-teal-700 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              {t.acceptAllModal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CookiePreferencesModal() {
  const { isPreferencesOpen } = useCookieConsent();

  if (!isPreferencesOpen) {
    return null;
  }

  return <PreferencesDialogContent />;
}
