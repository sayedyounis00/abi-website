import React from "react";

export default function RoadmapSection() {
  const steps = [
    {
      step: "01",
      title: "Sprachliche Vorbereitung",
      subtitle: "A1 bis C1 Fachsprache",
      description:
        "Intensive Betreuung und zielgerichtete Vorbereitung auf anerkannte Sprachprüfungen (telc, Goethe, Fachsprache Medizin) in Partnerschaft mit zertifizierten Partnerinstituten.",
      deliverables: ["Medizinische Fachsprache", "Prüfungssimulationen", "Zertifikatserwerb B2/C1"],
      badgeClass: "bg-teal-50 text-teal-800 border border-teal-200/80 group-hover:bg-teal-100/70",
      iconBg: "bg-teal-50 text-teal-700 border border-teal-200/60 group-hover:bg-teal-100/80",
      dotColor: "bg-teal-600",
      hoverBorder: "hover:border-teal-400/60",
      subtitleClass: "text-teal-700",
      icon: (
        <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Anerkennungsverfahren",
      subtitle: "Behörden & Gleichstellung",
      description:
        "Komplette Zusammenstellung, amtliche Übersetzung und Einreichung aller Zeugnisse und Nachweise bei den zuständigen deutschen Anerkennungsstellen und Bezirksregierungen.",
      deliverables: ["Defizitbescheid-Prüfung", "Approbationsunterstützung", "Direkte Behördenkommunikation"],
      badgeClass: "bg-sky-50 text-sky-800 border border-sky-200/80 group-hover:bg-sky-100/70",
      iconBg: "bg-sky-50 text-sky-700 border border-sky-200/60 group-hover:bg-sky-100/80",
      dotColor: "bg-sky-600",
      hoverBorder: "hover:border-sky-400/60",
      subtitleClass: "text-sky-700",
      icon: (
        <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Matching & Visum",
      subtitle: "Arbeitsvertrag & Botschaft",
      description:
        "Vorstellung bei passenden deutschen Unternehmen, Arbeitgebern und Bildungseinrichtungen sowie Begleitung des beschleunigten Fachkräfteverfahrens bis zur Visumserteilung.",
      deliverables: [
        "Vorstellungsgespräche mit passenden Arbeitgebern",
        "Rechtssicherer Arbeits- oder Ausbildungsvertrag",
      ],
      badgeClass: "bg-teal-50 text-teal-800 border border-teal-200/80 group-hover:bg-teal-100/70",
      iconBg: "bg-teal-50 text-teal-700 border border-teal-200/60 group-hover:bg-teal-100/80",
      dotColor: "bg-teal-600",
      hoverBorder: "hover:border-teal-400/60",
      subtitleClass: "text-teal-700",
      icon: (
        <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Ankunft & Onboarding",
      subtitle: "Wohnen, Ämter & Integration",
      description:
        "Persönlicher Empfang am Flughafen, Übergabe der ersten Unterkunft und begleitete Behördengänge für Anmeldung, deutsches Bankkonto und gesetzliche Krankenversicherung.",
      deliverables: ["Flughafentransfer & Wohnung", "Einwohnermeldeamt & Steuern", "Begleitung am ersten Arbeitstag"],
      badgeClass: "bg-sky-50 text-sky-800 border border-sky-200/80 group-hover:bg-sky-100/70",
      iconBg: "bg-sky-50 text-sky-700 border border-sky-200/60 group-hover:bg-sky-100/80",
      dotColor: "bg-sky-600",
      hoverBorder: "hover:border-sky-400/60",
      subtitleClass: "text-sky-700",
      icon: (
        <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h.055M16 21a9 9 0 10-14.14-14.14M16 21a9 9 0 01-14.14-14.14" />
        </svg>
      ),
    },
  ];

  return (
    <section id="ablauf" className="py-20 lg:py-28 bg-slate-50/80 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Der strukturierte Ablauf nach Deutschland
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Von den ersten Sprachstunden bis zum erfolgreichen Berufsstart in Deutschland – vier transparente Meilensteine, die dich Schritt für Schritt begleiten.
          </p>
        </div>

        {/* Roadmap Cards Grid with connecting line on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle progressive connecting bridge line visible on large screens */}
          <div aria-hidden="true" className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-teal-500/35 via-sky-500/40 to-teal-500/35 -z-0 pointer-events-none" />

          {steps.map((item, index) => (
            <div
              key={index}
              className={`group card-lift bg-white border border-slate-200 ${item.hoverBorder} rounded-2xl p-6 flex flex-col justify-between shadow-sm relative z-10`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center transition-colors duration-300`}>
                    {item.icon}
                  </div>
                  <span className={`text-xs font-bold tracking-wider px-2.5 py-1 rounded-full transition-colors duration-300 ${item.badgeClass}`}>
                    PHASE {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-slate-950 transition-colors duration-200">
                  {item.title}
                </h3>
                <div className={`text-xs font-semibold mb-3 ${item.subtitleClass}`}>
                  {item.subtitle}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                  Leistungsumfang:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                  {item.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} flex-shrink-0 transition-transform duration-300 group-hover:scale-125`} />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
