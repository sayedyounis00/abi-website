"use client";

import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Fehler beim Anmelden.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Ein unerwarteter Fehler ist aufgetreten.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-teal-50/80 via-sky-50/60 to-slate-50 border border-teal-200/80 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-sm">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:4xl font-extrabold tracking-tight mb-4 text-slate-900">
              Aktuelle Entwicklungen im Zuwanderungs- und Arbeitsrecht
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Abonnieren Sie unsere monatlichen Fachinformationen zu beschleunigten Anerkennungsverfahren, neuen Visaregelungen und aktuellen Stellenbedarfen in deutschen Kliniken.
            </p>

            {submitted ? (
              <div role="status" aria-live="polite" className="bg-teal-50 border border-teal-200/80 rounded-2xl p-6 text-teal-900 font-medium">
                <svg className="w-10 h-10 mx-auto mb-3 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Vielen Dank! Ihre E-Mail-Adresse wurde erfolgreich für unsere Fachinformationen vorgemerkt.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Ihre E-Mail-Adresse
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="Ihre dienstliche oder private E-Mail"
                    aria-label="Ihre E-Mail-Adresse für Fachinformationen"
                    className="flex-1 px-5 py-4 rounded-xl text-slate-900 bg-white border border-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 text-sm sm:text-base font-normal shadow-sm disabled:bg-slate-100"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-4 rounded-xl text-white gradient-bg font-bold text-sm sm:text-base hover:opacity-95 transition-opacity shadow-md cursor-pointer disabled:opacity-70 flex items-center justify-center min-w-[120px]"
                  >
                    {isSubmitting ? "..." : "Anmelden"}
                  </button>
                </div>
                {errorMessage && (
                  <p role="alert" className="text-xs text-rose-600 font-medium mt-1 text-left">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}

            <p className="text-xs text-slate-600 font-medium mt-4">
              Jederzeit mit einem Klick abbestellbar. Hinweise zum Datenschutz finden Sie in unserer Datenschutzerklärung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
