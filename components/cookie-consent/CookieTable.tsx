"use client";

import React from "react";
import { COOKIE_CONSENT_CONFIG } from "@/config/cookieConsent";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieTable() {
  const { consent, language, openPreferences, t } = useCookieConsent();

  return (
    <div className="space-y-8 my-8">
      {/* Current consent status block */}
      <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            {language === "de"
              ? "Ihr aktueller Einwilligungsstatus"
              : "Your current consent status"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {consent
              ? language === "de"
                ? `Gespeichert am: ${new Date(
                    consent.timestamp
                  ).toLocaleString("de-DE")} (Version ${consent.version})`
                : `Saved on: ${new Date(
                    consent.timestamp
                  ).toLocaleString("en-US")} (Version ${consent.version})`
              : language === "de"
              ? "Noch keine Einwilligung gespeichert."
              : "No consent saved yet."}
          </p>
          {consent && (
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-slate-200 text-slate-800">
                Notwendig: Aktiv
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                  consent.preferences
                    ? "bg-teal-100 text-teal-800"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                Präferenzen: {consent.preferences ? "Aktiv" : "Inaktiv"}
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                  consent.analytics
                    ? "bg-teal-100 text-teal-800"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                Statistik: {consent.analytics ? "Aktiv" : "Inaktiv"}
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                  consent.marketing
                    ? "bg-teal-100 text-teal-800"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                Marketing: {consent.marketing ? "Aktiv" : "Inaktiv"}
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={openPreferences}
          className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer self-start sm:self-center shadow-xs"
        >
          {t.cookieSettings}
        </button>
      </div>

      {/* Structured Category Cookie Tables */}
      <div className="space-y-6">
        {COOKIE_CONSENT_CONFIG.categories.map((category) => (
          <div
            key={category.id}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs"
          >
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900">
                  {category.title[language]}
                </h4>
                {category.required ? (
                  <span className="text-xs font-bold text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded-full">
                    {t.alwaysActive}
                  </span>
                ) : (
                  <span className="text-xs text-slate-500">
                    Einwilligungspflichtig gem. § 25 Abs. 1 TDDDG
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {category.fullDescription[language]}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700 divide-y divide-slate-200">
                <thead className="bg-slate-100 font-semibold text-slate-800">
                  <tr>
                    <th className="px-4 py-2.5">{t.colName}</th>
                    <th className="px-4 py-2.5">{t.colProvider}</th>
                    <th className="px-4 py-2.5">{t.colPurpose}</th>
                    <th className="px-4 py-2.5">{t.colDuration}</th>
                    <th className="px-4 py-2.5">{t.colCountry}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {category.cookies.map((cookie, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-mono font-medium text-slate-900 whitespace-nowrap">
                        {cookie.name}
                      </td>
                      <td className="px-4 py-3">{cookie.provider}</td>
                      <td className="px-4 py-3 leading-relaxed">
                        {cookie.purpose[language]}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {cookie.duration[language]}
                      </td>
                      <td className="px-4 py-3">{cookie.country || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
