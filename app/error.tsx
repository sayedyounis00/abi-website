"use client";

import React, { useEffect } from "react";

export default function RootErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-slate-50 text-slate-900 p-6">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Etwas ist schiefgelaufen
        </h2>
        <p className="text-sm text-slate-700 mb-6 font-normal">
          Der Inhalt konnte nicht geladen werden. Bitte versuchen Sie es erneut.
        </p>
        <button
          onClick={() => reset()}
          className="py-2.5 px-6 rounded-xl text-white font-semibold gradient-bg hover:opacity-95 transition-opacity text-sm cursor-pointer"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
