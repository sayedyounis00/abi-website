import React from "react";
import Link from "next/link";
import AbiLogo from "./AbiLogo";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 pt-16 pb-[max(3rem,env(safe-area-inset-bottom))] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1 & 2: Brand */}
          <div className="sm:col-span-2 flex flex-col items-start">
            <Link href="/" className="mb-4">
              <AbiLogo
                className="h-9 sm:h-10 w-auto"
                textClassName="text-slate-900"
                subtextClassName="text-teal-700"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6 text-slate-700 font-normal">
              Ihr kompetenter Partner für die Vermittlung qualifizierter Fachkräfte aus dem Ausland auf den deutschen Arbeitsmarkt sowie für akademische und berufliche Ausbildung in Deutschland.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="mailto:Info@abi-ug.de"
                className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
              >
                <svg className="w-4 h-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Info@abi-ug.de
              </a>
              <span className="hidden sm:inline text-slate-300">|</span>
              <a
                href="tel:+4938746292468"
                className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
              >
                <svg className="w-4 h-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 3874 6292 468
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="block py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/#ueber-uns" className="block py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#ablauf" className="block py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center">
                  Ablauf &amp; Phasen
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="block py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center">
                  Unsere Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#beratung" className="block py-2 hover:text-teal-800 transition-colors font-semibold text-teal-700 min-h-[44px] flex items-center">
                  Erstberatung anfragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Rechtliches & Kontakt */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-4">
              Rechtliches &amp; Compliance
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/privacy-policy" className="block py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center">
                  Datenschutzerklärung (DSGVO)
                </Link>
              </li>
              <li>
                <a href="#partner" className="block py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center">
                  Partnernetzwerk
                </a>
              </li>
              <li>
                <Link href="/impressum" className="block py-2 hover:text-teal-700 transition-colors min-h-[44px] flex items-center">
                  Impressum &amp; Kontakt
                </Link>
              </li>
            </ul>

            {/* Impressum | Datenschutzhinweis in small font */}
            <div className="mt-3 flex flex-wrap items-center text-xs text-slate-500 font-normal gap-y-1">
              <Link
                href="/impressum"
                className="hover:text-teal-700 transition-colors"
              >
                Impressum
              </Link>
              <span className="mx-2 text-slate-400 select-none" aria-hidden="true">
                |
              </span>
              <Link
                href="/privacy-policy"
                className="hover:text-teal-700 transition-colors"
              >
                Datenschutzhinweis
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-medium gap-4">
          <p>© 2026 ABI - Arbeit Bildung International. Alle Rechte vorbehalten.</p>
          <p>Fachkräftevermittlung & Studienberatung nach deutschem Recht</p>
        </div>
      </div>
    </footer>
  );
}
