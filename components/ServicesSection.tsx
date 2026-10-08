import React from "react";
import Image from "next/image";
import translateServiceImg from "@/assets/translate_service.png";
import group50Img from "@/assets/Group-50.png";
import group30Img from "@/assets/Group-30.png";
import houseImg from "@/assets/house.png";

export default function ServicesSection() {
  const services = [
    {
      id: "sprache",
      title: "Sprachliche Vorbereitung & Fachsprache",
      tag: "A1 bis C1 Fachsprache",
      tagClass: "bg-teal-50 text-teal-800 border border-teal-200/80",
      iconBg: "bg-teal-50 border border-teal-200/70",
      bulletClass: "text-teal-600",
      linkClass: "text-teal-700 hover:text-teal-800",
      hoverBorder: "hover:border-teal-300",
      description:
        "In enger Zusammenarbeit mit unseren Partnern im Ausland bereiten wir Fachkräfte gezielt auf alle geforderten Prüfungsstufen des Gemeinsamen Europäischen Referenzrahmens vor. Für den medizinischen Sektor trainieren wir praxisnah die deutsche Fachterminologie, Arzt-Patienten-Gespräche und die medizinische Dokumentation.",
      features: [
        "Vorbereitung auf telc Deutsch B2 / C1 Medizin",
        "Medizinisches Kommunikationstraining",
        "Begleitete Prüfungssimulationen",
      ],
      icon: (
        <Image
          src={translateServiceImg}
          alt="Sprachliche Vorbereitung"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      id: "anerkennung",
      title: "Anerkennung von Abschlüssen & Urkunden",
      tag: "Offizielle Gleichstellung",
      tagClass: "bg-sky-50 text-sky-800 border border-sky-200/80",
      iconBg: "bg-sky-50 border border-sky-200/70",
      bulletClass: "text-sky-600",
      linkClass: "text-sky-700 hover:text-sky-800",
      hoverBorder: "hover:border-sky-300",
      description:
        "Wir übernehmen die vollständige Kommunikation und Antragsstellung bei den zuständigen Landesprüfungsämtern und Bezirksregierungen. Wir prüfen Unterlagen vorab, koordinieren beglaubigte Fachübersetzungen und begleiten das Verfahren bis zum Erhalt des Anerkennungs- bzw. Defizitbescheids.",
      features: [
        "Vorab-Prüfung der Gleichwertigkeit",
        "Approbations- & Berufserlaubnisanträge",
        "Organisation von Anpassungslehrgängen",
      ],
      icon: (
        <Image
          src={group50Img}
          alt="Anerkennung von Abschlüssen & Urkunden"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      id: "vermittlung",
      title: "Arbeitsvermittlung & Klinikbetreuung",
      tag: "Rechtssicheres Matching",
      tagClass: "bg-teal-50 text-teal-800 border border-teal-200/80",
      iconBg: "bg-teal-50 border border-teal-200/70",
      bulletClass: "text-teal-600",
      linkClass: "text-teal-700 hover:text-teal-800",
      hoverBorder: "hover:border-teal-300",
      description:
        "Wir verbinden qualifizierte Fachkräfte direkt mit führenden Krankenhäusern, Pflegeheimen und MVZ in ganz Deutschland. Deutschen Arbeitgebern nehmen wir alle bürokratischen und organisatorischen Vorarbeiten ab – von der Vorqualifikation bis zur Vertragserstellung.",
      features: [
        "Direkte Interviews & Hospitationsplanung",
        "Entlastung der klinischen Personalabteilungen",
        "Begleitung des Fachkräfteverfahrens (§ 81a)",
      ],
      icon: (
        <Image
          src={group30Img}
          alt="Arbeitsvermittlung & Klinikbetreuung"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      id: "integration",
      title: "Ankunft, Wohnen & Lokale Integration",
      tag: "Onboarding vor Ort",
      tagClass: "bg-sky-50 text-sky-800 border border-sky-200/80",
      iconBg: "bg-sky-50 border border-sky-200/70",
      bulletClass: "text-sky-600",
      linkClass: "text-sky-700 hover:text-sky-800",
      hoverBorder: "hover:border-sky-300",
      description:
        "Nach Erteilung des Visums nehmen wir die Kandidaten am Flughafen in Empfang und begleiten sie zu ihrer Unterkunft. Wir unterstützen aktiv bei der Anmeldung beim Einwohnermeldeamt, der Kontoeröffnung und dem Abschluss der gesetzlichen Kranken- und Sozialversicherungen.",
      features: [
        "Persönlicher Flughafen-Transfer",
        "Wohnraumorganisation vor Dienstantritt",
        "Behördengänge & Meldebestätigung",
      ],
      icon: (
        <Image
          src={houseImg}
          alt="Ankunft, Wohnen & Lokale Integration"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ),
    },
  ];

  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Unsere Leistungen im Detail
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Ganzheitliche Begleitung von der sprachlichen Ausbildung im Ausland bis zur erfolgreichen beruflichen und gesellschaftlichen Verankerung in Deutschland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`card-lift bg-white border border-slate-200 ${service.hoverBorder} rounded-3xl p-8 flex flex-col justify-between shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.tagClass}`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-800 font-medium">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <svg className={`w-4 h-4 ${service.bulletClass} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <a
                  href="#beratung"
                  className={`inline-flex items-center text-sm font-semibold ${service.linkClass} transition-colors group py-2.5 min-h-[44px]`}
                >
                  Individuelle Beratung anfordern
                  <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
