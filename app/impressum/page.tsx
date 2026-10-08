import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - ABI (Arbeit.Bildung.International)",
  description:
    "Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 DDG (vormals § 5 TMG) von ABI (Arbeit.Bildung.International).",
};

export default function ImpressumPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Brotkrumen-Navigation"
          className="flex items-center text-xs sm:text-sm text-slate-600 font-medium mb-8"
        >
          <Link href="/" className="hover:text-teal-700 transition-colors">
            Startseite
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-semibold">Impressum</span>
        </nav>

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Impressum
          </h1>
          <p className="text-sm text-slate-600 font-medium">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) / ehemals § 5 Telemediengesetz (TMG)
          </p>
        </header>

        <div
          className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed font-normal [hyphens:auto]"
          lang="de"
        >
          {/* Diensteanbieter */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Diensteanbieter
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-[11px] leading-relaxed space-y-1">
              <p className="font-bold text-slate-900 text-sm mb-2">
                Abi UG (haftungsbeschränkt)
              </p>
              <p className="text-slate-600 font-medium">Study Abroad &amp; Career Services</p>
              <p>Schlossstraße 5</p>
              <p>19288 Ludwigslust, Mecklenburg-Vorpommern</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Vertreten durch */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Vertreten durch
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-[11px] leading-relaxed">
              <p>
                <strong>Geschäftsführung:</strong> Herr Ibrahim Alassal, vertreten durch die Geschäftsführung
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Kontakt
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-[11px] leading-relaxed space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold text-slate-900 sm:w-24">Telefon:</span>
                <a
                  href="tel:+4938746292468"
                  className="text-teal-700 font-semibold hover:underline"
                >
                  +49 3874 6292 468
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold text-slate-900 sm:w-24">E-Mail:</span>
                <a
                  href="mailto:Info@abi-ug.de"
                  className="text-teal-700 font-semibold hover:underline"
                >
                  Info@abi-ug.de
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-semibold text-slate-900 sm:w-24">Website:</span>
                <a
                  href="https://abi-karriere.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold hover:underline"
                >
                  www.abi-karriere.de
                </a>
              </div>
            </div>
          </section>

          {/* Registereintrag */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Registereintrag
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-[11px] leading-relaxed space-y-1.5">
              <p>Eintragung im Handelsregister</p>
              <p>
                <strong>Registergericht:</strong> Amtsgericht Schwerin
              </p>
              <p>
                <strong>Registernummer:</strong> HRB 15379
              </p>
            </div>
          </section>

          {/* Steuernummer & Umsatzsteuer-ID */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Steuernummer &amp; Umsatzsteuer-ID
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-[11px] leading-relaxed space-y-1.5">
              <p>
                <strong>Steuernummer:</strong>{" "}
                <span className="font-mono font-semibold text-slate-900">087/105/00925</span>
              </p>
              <p>
                <strong>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:</strong>{" "}
                <span className="text-slate-600">DE459361391</span>
              </p>
            </div>
          </section>

          {/* Aufsichtsbehörde */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Aufsichtsbehörde
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-[11px] leading-relaxed space-y-1">
              <p className="font-semibold text-slate-900">Gewerbeamt der Stadt Ludwigslust</p>
              <p>Schloßstraße 38</p>
              <p>19288 Ludwigslust</p>
              <p>Deutschland</p>
            </div>
          </section>


          {/* Streitbeilegungsverfahren */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Streitbeilegungsverfahren / Verbraucherschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 font-semibold hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG / TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG / TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Bildquellen */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Bildquellen &amp; Urheberrechte
            </h2>
            <p>
              Alle auf dieser Website verwendeten Bilder und Grafiken unterliegen dem Urheberrecht. Sofern nicht anders gekennzeichnet, liegen die Rechte bei der ABI (Arbeit.Bildung.International) oder den jeweiligen Lizenzgebern. Eine Nutzung ohne vorherige schriftliche Zustimmung ist nicht gestattet.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
