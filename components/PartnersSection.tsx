import React from "react";
import Image from "next/image";
import dseLogo from "@/assets/dse_logo.png";

export default function PartnersSection() {
  const standards = [
    {
      title: "GER-zertifizierte Sprachausbildung",
      description: "Vollständige Abdeckung der Niveaustufen A1 bis C1 mit gezielter telc Deutsch- und Goethe-Zertifikatsausrichtung.",
      badge: "telc / Goethe",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200/80",
    },
    {
      title: "Medizinische Fachsprache & FSP",
      description: "Intensivcurriculum für die Fachsprachenprüfung (FSP) vor den Landesärztekammern inklusive Patientengesprächssimulationen.",
      badge: "Ärztekammern",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-200/80",
    },
    {
      title: "Verifizierte Behördendokumentation",
      description: "Lückenlose Echtheitsprüfung und zertifizierte Vorbereitung für die Bezirksregierungen und das beschleunigte Fachkräfteverfahren (§ 81a).",
      badge: "§ 81a AufenthG",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200/80",
    },
  ];

  return (
    <section id="partner" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Unser akkreditiertes Partnernetzwerk
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Für eine verlässliche und standardisierte Ausbildung arbeiten wir mit renommierten Sprachinstituten und Partnern im In- und Ausland zusammen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Accredited Partner Card */}
          <div className="lg:col-span-7 card-lift bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-2 shadow-sm overflow-hidden relative">
                    <Image
                      src={dseLogo}
                      alt="DSE Institut Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">
                      DSE Institut
                    </h3>
                    <p className="text-sm font-semibold text-teal-700">
                      Akkreditierter Partner für Sprachausbildung & Vorbereitung
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/share/1cbLzf9vWZ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-700 border border-slate-200 px-4 py-2.5 rounded-xl hover:border-teal-500/50 transition-all min-h-[44px]"
                >
                  Offizielles Profil
                  <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed my-6 font-normal">
                Das DSE Institut führt im Auftrag von ABI intensive Vorbereitungskurse auf allen Stufen des Gemeinsamen Europäischen Referenzrahmens durch. Besonderer Wert wird auf berufsbezogenes Deutsch, strukturierte Prüfungssimulationen und eine interkulturelle Vorbereitung auf das Berufsleben in Deutschland gelegt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 flex-shrink-0" />
                <span>telc & Goethe Vorbereitung</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600 flex-shrink-0" />
                <span>C1 Fachsprache Medizin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-700 flex-shrink-0" />
                <span>Direkte ABI-Schnittstelle</span>
              </div>
            </div>
          </div>

          {/* Quality Standards & Verification Pillar */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">
                Qualitätsstandards & Schnittstellen
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-6 font-normal">
                Verbindliche Leitlinien unserer Kooperation für rechtssichere Anerkennungsergebnisse.
              </p>

              <div className="space-y-5">
                {standards.map((std, sIdx) => (
                  <div key={sIdx} className="pb-4 border-b border-slate-100 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-sm text-slate-900">
                        {std.title}
                      </h4>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${std.badgeColor}`}>
                        {std.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {std.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-600 font-medium">
              Kooperationsvereinbarungen unterliegen kontinuierlicher Qualitätsprüfung.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
