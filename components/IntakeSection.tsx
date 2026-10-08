"use client";

import React, { useState } from "react";

export default function IntakeSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Applicant form state
  const [applicantProfession, setApplicantProfession] = useState("Humanmedizin / Arzt");
  const [applicantGermanLevel, setApplicantGermanLevel] = useState("B1/B2");
  const [applicantGoal, setApplicantGoal] = useState("Studium im Ausland");
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantNotes, setApplicantNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const resetForm = () => {
    setApplicantName("");
    setApplicantEmail("");
    setApplicantPhone("");
    setApplicantNotes("");
    setApplicantProfession("Humanmedizin / Arzt");
    setApplicantGermanLevel("B1/B2");
    setApplicantGoal("Studium im Ausland");
    setErrorMessage(null);
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profession: applicantProfession,
          germanLevel: applicantGermanLevel,
          goal: applicantGoal,
          name: applicantName,
          email: applicantEmail,
          phone: applicantPhone,
          notes: applicantNotes,
          hp_field: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Es gab ein Problem beim Absenden des Formulars.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="beratung" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Kostenlose Erstberatung & Eignungsprüfung
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            Starten Sie unverbindlich: Wir prüfen Ihre Ausgangslage, Qualifikationen und den rechtlichen Anerkennungsweg nach Deutschland.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden transition-all duration-300">
          <div className="p-6 sm:p-10">
            {submitted ? (
              <div role="status" aria-live="polite" className="text-center py-10 animate-scale-in">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-slate-700 text-sm sm:text-base max-w-lg mx-auto mb-6 font-normal">
                  Wir haben Ihre Angaben erhalten und eine Bestätigung an <strong>{applicantEmail}</strong> gesendet. Unser spezialisiertes Beratungsteam prüft die Eignung und meldet sich innerhalb von 24–48 Stunden mit konkreten Schritten bei Ihnen.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer py-2.5 min-h-[44px]"
                >
                  &larr; Neue Anfrage starten
                </button>
              </div>
            ) : (
              <form
                id="panel-applicant"
                onSubmit={handleSubmit}
                className="space-y-6 animate-fade-in"
              >
                {/* Anti-spam honeypot field - invisible to real users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_url_hp">Website URL</label>
                  <input
                    id="website_url_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 animate-shake"
                  >
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Übermittlung fehlgeschlagen</p>
                      <p className="text-rose-700 text-xs mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="applicant-goal" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Ziel der Kontaktaufnahme
                    </label>
                    <select
                      id="applicant-goal"
                      value={applicantGoal}
                      onChange={(e) => setApplicantGoal(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    >
                      <option value="Studium im Ausland">Studium im Ausland</option>
                      <option value="Ausbildung">Ausbildung</option>
                      <option value="Jobsuche">Jobsuche</option>
                      <option value="Zeugnisanerkennung">Zeugnisanerkennung</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="applicant-profession" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Fachbereich / Berufszweig
                    </label>
                    <select
                      id="applicant-profession"
                      value={applicantProfession}
                      onChange={(e) => setApplicantProfession(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    >
                      <option value="Humanmedizin / Arzt">Humanmedizin (Arzt / Facharzt)</option>
                      <option value="Pflegefachkraft">Pflegefachkraft (Stationär / Intensiv)</option>
                      <option value="Physiotherapie">Physiotherapie & Rehabilitation</option>
                      <option value="Ingenieurwesen">Ingenieurwesen & IT</option>
                      <option value="Studienplatz">Studienplatzvermittlung (Universität)</option>
                      <option value="Berufsausbildung">Berufliche Ausbildung (Azubi)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="applicant-german-level" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Aktuelles Deutschniveau
                    </label>
                    <select
                      id="applicant-german-level"
                      value={applicantGermanLevel}
                      onChange={(e) => setApplicantGermanLevel(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    >
                      <option value="Keine Vorkenntnisse">Noch keine Kenntnisse (A0)</option>
                      <option value="A1/A2">Grundkenntnisse (A1 / A2)</option>
                      <option value="B1/B2">Fortgeschritten (B1 / B2)</option>
                      <option value="C1">Verhandlungssicher / Fachsprache (C1)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="applicant-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Ihr vollständiger Name *
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      required
                      aria-required="true"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      disabled={isSubmitting}
                      placeholder="z.B. Dr. Tariq Al-Mansoor"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500 font-normal transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="applicant-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      id="applicant-email"
                      type="email"
                      required
                      aria-required="true"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      disabled={isSubmitting}
                      placeholder="beispiel@domain.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500 font-normal transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="applicant-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Telefon / WhatsApp
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      disabled={isSubmitting}
                      placeholder="+49 ... oder Ländervorwahl"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500 font-normal transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="applicant-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Ihre aktuelle Situation / Fragen (optional)
                  </label>
                  <textarea
                    id="applicant-notes"
                    rows={3}
                    value={applicantNotes}
                    onChange={(e) => setApplicantNotes(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="z.B. Ich habe mein Medizinstudium abgeschlossen und lerne derzeit Deutsch B1..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500 font-normal transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-600 font-medium">
                    Ihre Daten werden streng vertraulich nach DSGVO behandelt.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-press w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white gradient-bg shadow-md hover:shadow-teal-500/25 hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      "Kostenlose Prüfung anfordern"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
