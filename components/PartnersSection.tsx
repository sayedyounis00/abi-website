"use client";

import React, { useState } from "react";
import Image from "next/image";
import dseLogo from "@/assets/dse_logo.png";
import superiorLogo from "@/assets/superior_education_logo.png";

export default function PartnersSection() {
  const [activePartnerId, setActivePartnerId] = useState<"dse" | "superior">("dse");

  const partners = [
    {
      id: "dse" as const,
      name: "DSE Institut",
      tagline: "Sprachausbildung Deutschland",
      role: "Akkreditierter Partner für Sprachausbildung & Vorbereitung",
      logo: dseLogo,
      logoAlt: "DSE Institut Logo",
      link: "https://www.facebook.com/share/1cbLzf9vWZ/",
      linkLabel: "Offizielles Profil",
      description:
        "Das DSE Institut führt im Auftrag von ABI intensive Vorbereitungskurse auf allen Stufen des Gemeinsamen Europäischen Referenzrahmens durch. Besonderer Wert wird auf berufsbezogenes Deutsch, strukturierte Prüfungssimulationen und eine interkulturelle Vorbereitung auf das Berufsleben in Deutschland gelegt.",
      highlights: [
        { label: "telc & Goethe Vorbereitung", dotColor: "bg-teal-600" },
        { label: "C1 Fachsprache Medizin", dotColor: "bg-sky-600" },
        { label: "Direkte ABI-Schnittstelle", dotColor: "bg-teal-700" },
      ],
      standardsTitle: "Qualitätsstandards & Schnittstellen",
      standardsSubtitle: "Verbindliche Leitlinien unserer Kooperation für rechtssichere Anerkennungsergebnisse.",
      standardsFooter: "Kooperationsvereinbarungen unterliegen kontinuierlicher Qualitätsprüfung.",
      standards: [
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
      ],
    },
    {
      id: "superior" as const,
      name: "Superior Education",
      tagline: "Internationale Bildungsberatung (UK)",
      role: "Akkreditierter Partner für Bildungsberatung & Sprachqualifizierung",
      logo: superiorLogo,
      logoAlt: "Superior Education Logo",
      link: "https://www.superioreducation.co.uk/",
      linkLabel: "Offizielle Website",
      description:
        "Superior Education Limited ist ein im Vereinigten Königreich ansässiges Bildungsunternehmen. Im Rahmen unserer Partnerschaft unterstützt Superior Education Bewerber mit Online-Sprachkursen (Englisch & Deutsch), internationaler Studienzulassungsberatung (UK, EU, USA, Kanada), Bildungsreisen sowie amtlich anerkannten Fachübersetzungen für Hochschulen und Visaverfahren.",
      highlights: [
        { label: "Sprachkurse & Testvorbereitung", dotColor: "bg-teal-600" },
        { label: "Studien- & Zulassungsberatung", dotColor: "bg-sky-600" },
        { label: "Zertifizierte Dokumentenübersetzung", dotColor: "bg-teal-700" },
      ],
      standardsTitle: "Leistungsstandards & Kernangebote",
      standardsSubtitle: "Verifizierte Bildungs- und Übersetzungsstandards für internationale Bildungs- und Berufswege.",
      standardsFooter: "Registriert im Vereinigten Königreich als Superior Education Limited (Companies House).",
      standards: [
        {
          title: "Online-Sprachschule „Only English“",
          description: "Qualifizierte muttersprachliche Vorbereitungskurse (Englisch & Deutsch) für alle Niveaustufen sowie Training für Duolingo, IELTS und TOEFL.",
          badge: "IELTS / TOEFL",
          badgeColor: "bg-teal-50 text-teal-800 border-teal-200/80",
        },
        {
          title: "Internationale Studienberatung",
          description: "Individuelle Begleitung für Universitäten & Colleges, Vorbereitung auf Aufnahmeprüfungen sowie Stipendienanträge (10–50 % Gebührenermäßigung).",
          badge: "UK / EU / USA",
          badgeColor: "bg-sky-50 text-sky-800 border-sky-200/80",
        },
        {
          title: "Zertifizierte Fachübersetzungen",
          description: "Offiziell im britischen Handelsregister geführte Übersetzungen (SIC 74300) für Universitätsbewerbungen, Visaverfahren und Behörden.",
          badge: "UK SIC 74300",
          badgeColor: "bg-teal-50 text-teal-800 border-teal-200/80",
        },
      ],
    },
  ];

  const activePartner = partners.find((p) => p.id === activePartnerId) ?? partners[0];

  return (
    <section id="partner" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Unser akkreditiertes Partnernetzwerk
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Für eine verlässliche und standardisierte Ausbildung arbeiten wir mit renommierten Sprachinstituten und Bildungspartnern im In- und Ausland zusammen. Wählen Sie einen Partner, um dessen Profil und Standards einzusehen.
          </p>
        </div>

        {/* Partner Selection Switcher */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-10"
          role="tablist"
          aria-label="Akkreditierte Partner"
        >
          {partners.map((partner) => {
            const isSelected = activePartnerId === partner.id;
            return (
              <button
                key={partner.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`partner-panel-${partner.id}`}
                id={`partner-tab-${partner.id}`}
                onClick={() => setActivePartnerId(partner.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-white border-teal-600 shadow-sm ring-2 ring-teal-600/15"
                    : "bg-white/60 hover:bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-1.5 shadow-xs relative flex-shrink-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-slate-900 truncate">
                        {partner.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 block truncate">
                      {partner.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                      Ausgewählt
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-slate-500 hover:text-teal-700">
                      Details anzeigen →
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Partner Details & Standards Grid */}
        <div
          id={`partner-panel-${activePartner.id}`}
          role="tabpanel"
          aria-labelledby={`partner-tab-${activePartner.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Main Accredited Partner Card */}
          <div className="lg:col-span-7 card-lift bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-2 shadow-sm overflow-hidden relative flex-shrink-0">
                    <Image
                      src={activePartner.logo}
                      alt={activePartner.logoAlt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">
                      {activePartner.name}
                    </h3>
                    <p className="text-sm font-semibold text-teal-700">
                      {activePartner.role}
                    </p>
                  </div>
                </div>

                <a
                  href={activePartner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-700 border border-slate-200 px-4 py-2.5 rounded-xl hover:border-teal-500/50 transition-all min-h-[44px] flex-shrink-0"
                >
                  {activePartner.linkLabel}
                  <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed my-6 font-normal">
                {activePartner.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs font-semibold text-slate-800">
              {activePartner.highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${h.dotColor} flex-shrink-0`} />
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Standards & Verification Pillar */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">
                {activePartner.standardsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-6 font-normal">
                {activePartner.standardsSubtitle}
              </p>

              <div className="space-y-5">
                {activePartner.standards.map((std, sIdx) => (
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
              {activePartner.standardsFooter}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
