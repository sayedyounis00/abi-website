"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useSyncExternalStore,
  useEffect,
} from "react";
import {
  ConsentCategory,
  ConsentState,
  TRANSLATIONS,
} from "@/config/cookieConsent";
import {
  setConsentCookie,
  applyConsent,
} from "@/lib/cookieConsent";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  subscribeConsentStore,
  setConsentSnapshot,
} from "@/lib/cookieConsentStore";

interface CookieConsentContextType {
  consent: ConsentState | null;
  isInitialized: boolean;
  isBannerOpen: boolean;
  isPreferencesOpen: boolean;
  language: "de" | "en";
  setLanguage: (lang: "de" | "en") => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (choices: {
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  hasConsent: (category: ConsentCategory) => boolean;
  t: typeof TRANSLATIONS["de"];
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

const emptySubscribe = () => () => {};

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const consent = useSyncExternalStore(
    subscribeConsentStore,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  // Hydration-safe client detection via useSyncExternalStore
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);
  const [language, setLanguage] = useState<"de" | "en">("de");

  // Re-apply existing consent scripts/events once mounted on client
  useEffect(() => {
    const existing = getConsentSnapshot();
    if (existing) {
      applyConsent(existing);
    }
  }, []);

  // Banner is visible on client if no valid consent exists and modal is not open
  const isBannerOpen = isClient && consent === null && !isBannerDismissed;

  const acceptAll = useCallback(() => {
    const prev = consent;
    const next = setConsentCookie({
      preferences: true,
      analytics: true,
      marketing: true,
    });
    setConsentSnapshot(next);
    setIsPreferencesOpen(false);
    setIsBannerDismissed(true);
    applyConsent(next, prev);
  }, [consent]);

  const rejectAll = useCallback(() => {
    const prev = consent;
    const next = setConsentCookie({
      preferences: false,
      analytics: false,
      marketing: false,
    });
    setConsentSnapshot(next);
    setIsPreferencesOpen(false);
    setIsBannerDismissed(true);
    applyConsent(next, prev);
  }, [consent]);

  const savePreferences = useCallback(
    (choices: {
      preferences: boolean;
      analytics: boolean;
      marketing: boolean;
    }) => {
      const prev = consent;
      const next = setConsentCookie(choices);
      setConsentSnapshot(next);
      setIsPreferencesOpen(false);
      setIsBannerDismissed(true);
      applyConsent(next, prev);
    },
    [consent]
  );

  const openPreferences = useCallback(() => {
    setIsPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
  }, []);

  const hasConsent = useCallback(
    (category: ConsentCategory): boolean => {
      if (category === "necessary") return true;
      if (!consent) return false;
      return Boolean(consent[category]);
    },
    [consent]
  );

  const t = useMemo(() => TRANSLATIONS[language], [language]);

  const value = useMemo(
    () => ({
      consent,
      isInitialized: isClient,
      isBannerOpen,
      isPreferencesOpen,
      language,
      setLanguage,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
      hasConsent,
      t,
    }),
    [
      consent,
      isClient,
      isBannerOpen,
      isPreferencesOpen,
      language,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
      hasConsent,
      t,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextType {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}
