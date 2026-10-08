"use client";

import React from "react";
import BlockedScript from "@/components/cookie-consent/BlockedScript";
import YouTubeConsentEmbed from "@/components/cookie-consent/YouTubeConsentEmbed";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

/**
 * Example showcase for developers:
 * Demonstrates:
 * 1. Declarative script blocking with BlockedScript
 * 2. Two-click YouTube video embed with YouTubeConsentEmbed
 * 3. Raw HTML script markup pattern: <script type="text/plain" data-cookie-category="...">
 */
export default function CookieConsentExamples() {
  const { hasConsent, openPreferences } = useCookieConsent();

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-xl font-bold text-slate-900">
          Cookie Consent Integration Examples
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Referenzbeispiele für Skript-Blockierung und 2-Klick-Medieneinbettungen
          nach TDDDG § 25 und DSGVO.
        </p>
      </div>

      {/* Status banner */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
        <div className="text-sm">
          <span className="font-semibold text-slate-800">
            Marketing-Einwilligung:{" "}
          </span>
          <span
            className={
              hasConsent("marketing")
                ? "text-teal-700 font-bold"
                : "text-amber-700 font-bold"
            }
          >
            {hasConsent("marketing") ? "Erteilt (Aktiv)" : "Blockiert (Inaktiv)"}
          </span>
        </div>
        <button
          type="button"
          onClick={openPreferences}
          className="text-xs font-semibold px-3 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
        >
          Präferenzen öffnen
        </button>
      </div>

      {/* Example 1: 2-Click YouTube Embed */}
      <div className="space-y-3">
        <h4 className="text-base font-bold text-slate-900">
          Beispiel 1: 2-Klick YouTube Embed (Two-Click Solution)
        </h4>
        <p className="text-xs text-slate-600">
          Wird blockiert, bis der Nutzer die Marketing-Kategorie akzeptiert oder
          das Video einmalig freigibt. Verwendet standardmäßig die
          datenschutzfreundliche Domain <code>youtube-nocookie.com</code>.
        </p>
        <YouTubeConsentEmbed
          videoId="dQw4w9WgXcQ"
          title="ABI Fachkräftevermittlung - Video-Einführung"
          className="max-w-xl mx-auto"
        />
      </div>

      {/* Example 2: BlockedScript Component */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <h4 className="text-base font-bold text-slate-900">
          Beispiel 2: React Component Skript-Blockierung (BlockedScript)
        </h4>
        <p className="text-xs text-slate-600">
          Führt Inline-Code oder Drittanbieter-Skripte nur dann aus, wenn der
          Nutzer der Zielkategorie zugestimmt hat:
        </p>

        {/* This demo script will only execute if analytics consent is granted */}
        <BlockedScript
          id="demo-analytics-logger"
          category="analytics"
        >
          {`console.log('[ConsentDemo] Analytics script successfully executed after user consent!');`}
        </BlockedScript>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          {`<BlockedScript
  id="meta-pixel"
  category="marketing"
  src="https://connect.facebook.net/en_US/fbevents.js"
/>`}
        </div>
      </div>

      {/* Example 3: Plain HTML markup pattern */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <h4 className="text-base font-bold text-slate-900">
          Beispiel 3: Standard-HTML Markierung für statische Skripte
        </h4>
        <p className="text-xs text-slate-600">
          Jedes native <code>&lt;script&gt;</code>-Tag mit Typ{" "}
          <code>type=&quot;text/plain&quot;</code> und Attribut{" "}
          <code>data-cookie-category=&quot;analytics|marketing|preferences&quot;</code>{" "}
          wird automatisch von der Engine erkannt und bei Einwilligung aktiviert:
        </p>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          {`<script
  type="text/plain"
  data-cookie-category="analytics"
  src="https://example.com/analytics-tracker.js"
></script>`}
        </div>
      </div>
    </div>
  );
}
