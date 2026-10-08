import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import CookieTable from "@/components/cookie-consent/CookieTable";

export const metadata: Metadata = {
  title: "Datenschutzerklärung (Privacy Policy) - ABI",
  description: "Datenschutzerklärung von ABI (Arbeit Bildung International). Information über die Erhebung, Nutzung und Weitergabe personenbezogener Daten.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Brotkrumen-Navigation" className="flex items-center text-xs sm:text-sm text-slate-600 font-medium mb-8">
          <Link href="/" className="hover:text-teal-700 transition-colors">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-semibold">
            Datenschutzerklärung
          </span>
        </nav>

        <header className="mb-12 pb-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Datenschutzerklärung (Privacy Policy)
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            Zuletzt aktualisiert: 18. August 2026
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed font-normal [hyphens:auto]" lang="de">
          <p>
            Diese Datenschutzerklärung beschreibt unsere Grundsätze und Verfahren bei der Erfassung, Nutzung und Offenlegung Ihrer Informationen, wenn Sie den Dienst nutzen, und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt.
          </p>
          <p>
            Wir nutzen Ihre personenbezogenen Daten zur Bereitstellung und Verbesserung des Dienstes. Durch die Nutzung des Dienstes stimmen Sie der Erfassung und Nutzung von Informationen gemäß dieser Datenschutzerklärung zu.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Auslegung und Definitionen
            </h2>
            <h3 className="text-xl font-semibold text-slate-900">
              Auslegung
            </h3>
            <p>
              Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben unter den folgenden Bedingungen definierte Bedeutungen. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder Plural erscheinen.
            </p>

            <h3 className="text-xl font-semibold text-slate-900">
              Definitionen
            </h3>
            <p>Für die Zwecke dieser Datenschutzerklärung:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Konto (Account):</strong> bezeichnet ein eindeutiges Konto, das für Sie erstellt wurde, um auf unseren Dienst oder Teile unseres Dienstes zuzugreifen.
              </li>
              <li>
                <strong>Verbundenes Unternehmen (Affiliate):</strong> bezeichnet eine Einheit, die eine Partei kontrolliert, von ihr kontrolliert wird oder unter gemeinsamer Kontrolle steht.
              </li>
              <li>
                <strong>Unternehmen (Company / We / Us / Our):</strong> bezieht sich auf Personalvermittlung &amp; Kooperation internationaler Bildungsorganisationen, Schlossstraße 5, 19288 Ludwigslust, MV.
              </li>
              <li>
                <strong>Cookies:</strong> sind kleine Dateien, die von einer Website auf Ihrem Computer, Mobilgerät oder einem anderen Gerät abgelegt werden.
              </li>
              <li>
                <strong>Land (Country):</strong> bezieht sich auf Mecklenburg-Vorpommern, Deutschland.
              </li>
              <li>
                <strong>Gerät (Device):</strong> bezeichnet jedes Gerät, das auf den Dienst zugreifen kann, wie z.B. ein Computer, ein Mobiltelefon oder ein Tablet.
              </li>
              <li>
                <strong>Personenbezogene Daten (Personal Data):</strong> sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Einzelperson beziehen.
              </li>
              <li>
                <strong>Dienst (Service):</strong> bezieht sich auf die Website (abi-karriere.de).
              </li>
              <li>
                <strong>Dienstanbieter (Service Provider):</strong> bezeichnet jede natürliche oder juristische Person, die die Daten im Auftrag des Unternehmens verarbeitet.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Erfassung und Nutzung Ihrer personenbezogenen Daten
            </h2>
            <h3 className="text-xl font-semibold text-slate-900">
              Arten der erfassten Daten
            </h3>

            <h4 className="text-lg font-semibold text-slate-900">
              Personenbezogene Daten
            </h4>
            <p>
              Bei der Nutzung unseres Dienstes bitten wir Sie möglicherweise um die Angabe bestimmter personenbezogener Daten, die zur Kontaktaufnahme oder Identifizierung verwendet werden können:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>E-Mail-Adresse</li>
              <li>Nutzungsdaten</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-900">
              Nutzungsdaten (Usage Data)
            </h4>
            <p>
              Nutzungsdaten werden bei der Nutzung des Dienstes automatisch erfasst. Dazu gehören Informationen wie die IP-Adresse Ihres Geräts, Browsertyp, Browserversion, die von Ihnen besuchten Seiten unseres Dienstes, Uhrzeit und Datum Ihres Besuchs sowie weitere Diagnosedaten.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Tracking-Technologien, Cookies und Einwilligungsverwaltung
            </h2>
            <p>
              Gemäß § 25 TDDDG und der DSGVO setzen wir zustimmungspflichtige Cookies und Tracking-Technologien ausschließlich nach Ihrer ausdrücklichen und freiwilligen Einwilligung ein. Technisch notwendige Cookies werden auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG i.V.m. Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung der Grundfunktionen unserer Website gespeichert.
            </p>
            <p>
              In der folgenden Übersicht können Sie Ihren aktuellen Einwilligungsstatus einsehen, die Details aller eingesetzten Cookies und Drittanbieter prüfen sowie Ihre Einwilligung jederzeit mit Wirkung für die Zukunft anpassen oder widerrufen:
            </p>
            <CookieTable />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Kontaktieren Sie uns
            </h2>
            <p>
              Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns kontaktieren:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Per E-Mail:{" "}
                <a href="mailto:Info@abi-ug.de" className="text-teal-700 font-semibold hover:underline">
                  Info@abi-ug.de
                </a>
              </li>
              <li>
                Adresse: Personalvermittlung &amp; Kooperation internationaler Bildungsorganisationen, Schlossstraße 5, 19288 Ludwigslust, MV, Deutschland
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
