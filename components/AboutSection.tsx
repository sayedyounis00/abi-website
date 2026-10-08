import React from "react";

export default function AboutSection() {
  const stats = [
    {
      value: "1.000+",
      label: "Stunden gezielte Sprachvorbereitung",
      detail: "Fachsprache B2/C1 Medizin & Pflege",
      colorClass: "text-teal-700",
      hoverBorder: "hover:border-teal-400/50",
    },
    {
      value: "500+",
      label: "Begleitete Fachkräfte & Studierende",
      detail: "Erfolgreich nach Deutschland vermittelt",
      colorClass: "text-sky-700",
      hoverBorder: "hover:border-sky-400/50",
    },
    {
      value: "7+",
      label: "Jahre Praxiserfahrung",
      detail: "Anerkennungsrecht & Behördenprozesse",
      colorClass: "text-teal-800",
      hoverBorder: "hover:border-teal-500/50",
    },
  ];

  return (
    <section id="ueber-uns" className="py-20 lg:py-28 bg-slate-100/70 text-slate-900 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Brücken bauen zwischen Talent und deutscher Institution
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <p>
                Bei <strong className="text-slate-900 font-semibold">ABI (Arbeit.Bildung.International)</strong> schaffen wir sichere, transparente Übergänge in den deutschen Arbeits- und Ausbildungsmarkt. Unser primärer Schwerpunkt liegt im medizinischen Sektor: Wir begleiten Ärzte, Pflegefachkräfte und Physiotherapeuten durch das anspruchsvolle Anerkennungsverfahren und entlasten deutsche Kliniken von bürokratischem Vorlauf.
              </p>
              <p>
                Gleichzeitig öffnen wir nachhaltige Bildungswege durch die gezielte Vermittlung von Studienplätzen an staatlichen und privaten Hochschulen sowie Ausbildungsplätzen in gefragten Zukunftsbranchen.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#beratung"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white gradient-bg shadow-md hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center min-h-[44px]"
              >
                Kostenlose Erstberatung anfordern
              </a>
              <a
                href="mailto:Info@abi-ug.de"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-all text-center min-h-[44px]"
              >
                Direktkontakt: Info@abi-ug.de
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Unsere Grundsätze
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-sky-50 text-sky-700 border border-sky-200/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span><strong className="text-slate-900">Bürokratischer Schutzschild:</strong> Vollständige Übernahme der Behördenkommunikation mit Gleichstellungsstellen.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span><strong className="text-slate-900">Ethische Vermittlung:</strong> Faire Bedingungen, garantierte Mindeststandards und Wertschätzung der Kandidaten.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-sky-50 text-sky-700 border border-sky-200/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span><strong className="text-slate-900">Ankunft & Integration:</strong> Persönlicher Empfang am Zielflughafen, Wohnraumsuche und Meldeamtsbetreuung.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-white border border-slate-200 ${stat.hoverBorder} rounded-2xl p-7 text-left shadow-sm transition-colors`}
            >
              <div className={`text-4xl sm:text-5xl font-extrabold ${stat.colorClass} mb-2 tabular-nums`}>
                {stat.value}
              </div>
              <div className="text-slate-900 font-bold text-base mb-1">
                {stat.label}
              </div>
              <div className="text-slate-700 font-medium text-xs sm:text-sm">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
