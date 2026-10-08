export type ConsentCategory = "necessary" | "preferences" | "analytics" | "marketing";

export interface ConsentState {
  version: string;
  timestamp: string; // ISO-8601
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieItem {
  name: string;
  provider: string;
  purpose: {
    de: string;
    en: string;
  };
  duration: {
    de: string;
    en: string;
  };
  type: string;
  country?: string;
  legalBasis?: {
    de: string;
    en: string;
  };
}

export interface CategoryConfig {
  id: ConsentCategory;
  required: boolean;
  defaultState: boolean;
  title: {
    de: string;
    en: string;
  };
  shortDescription: {
    de: string;
    en: string;
  };
  fullDescription: {
    de: string;
    en: string;
  };
  cookies: CookieItem[];
}

export interface CookieConsentConfig {
  version: string;
  cookieName: string;
  cookieMaxAgeSeconds: number; // 6 months (15552000s) - max 12 months under GDPR
  defaultLanguage: "de" | "en";
  categories: CategoryConfig[];
  knownCookiesToDelete: Record<ConsentCategory, string[]>;
}

export const COOKIE_CONSENT_CONFIG: CookieConsentConfig = {
  version: "1.0",
  cookieName: "cookie_consent",
  cookieMaxAgeSeconds: 15552000, // 6 months = 180 days (within GDPR / DSK limits)
  defaultLanguage: "de",

  // Cookie purge mapping when consent is revoked
  knownCookiesToDelete: {
    necessary: [],
    preferences: ["abi_lang", "abi_theme", "abi_pref"],
    analytics: [
      "_ga",
      "_gid",
      "_gat",
      "_ga_*",
      "_gat_gtag_*",
      "__utma",
      "__utmb",
      "__utmc",
      "__utmz",
      "__utmv",
    ],
    marketing: [
      "_gcl_au",
      "_fbp",
      "_fbc",
      "IDE",
      "test_cookie",
      "GPS",
      "YSC",
      "VISITOR_INFO1_LIVE",
      "VISITOR_PRIVACY_METADATA",
      "PREF",
    ],
  },

  categories: [
    {
      id: "necessary",
      required: true,
      defaultState: true,
      title: {
        de: "Notwendig",
        en: "Strictly Necessary",
      },
      shortDescription: {
        de: "Diese Cookies sind für den grundlegenden Betrieb der Website technisch unerlässlich.",
        en: "These cookies are technically essential for the core functionality of the website.",
      },
      fullDescription: {
        de: "Technisch erforderliche Cookies ermöglichen Kernfunktionen wie Sicherheit, Netzwerkintegrität und Speicherung Ihrer Cookie-Einwilligungsentscheidung. Ohne diese Dienste kann die Website nicht ordnungsgemäß funktionieren. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG i.V.m. Art. 6 Abs. 1 lit. f DSGVO.",
        en: "Technically necessary cookies enable basic functions such as security, network integrity, and storing your consent preferences. The website cannot function properly without these cookies. Legal basis: § 25 (2) No. 2 TDDDG in conjunction with Art. 6 (1) lit. f GDPR.",
      },
      cookies: [
        {
          name: "cookie_consent",
          provider: "ABI - Arbeit Bildung International (Erstanbieter)",
          purpose: {
            de: "Speichert Ihre getroffenen Einstellungen zur Cookie-Einwilligung.",
            en: "Stores your cookie consent preferences and choices.",
          },
          duration: {
            de: "6 Monate",
            en: "6 months",
          },
          type: "HTTP-Cookie",
          country: "Deutschland (EU)",
          legalBasis: {
            de: "§ 25 Abs. 2 Nr. 2 TDDDG",
            en: "§ 25 (2) No. 2 TDDDG",
          },
        },
      ],
    },
    {
      id: "preferences",
      required: false,
      defaultState: false,
      title: {
        de: "Präferenzen & Funktional",
        en: "Preferences & Functional",
      },
      shortDescription: {
        de: "Ermöglicht erweiterte Funktionen und die Speicherung personalisierter Benutzereinstellungen.",
        en: "Enables enhanced functionality and storage of personalized user settings.",
      },
      fullDescription: {
        de: "Funktionale Cookies ermöglichen es der Website, von Ihnen getroffene Angaben (wie Sprachauswahl oder Region) zu speichern und Ihnen verbesserte, persönlichere Funktionen anzubieten. Rechtsgrundlage: § 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO.",
        en: "Functional cookies allow the website to remember choices you make (such as preferred language) and provide enhanced, more personal features. Legal basis: § 25 (1) TDDDG in conjunction with Art. 6 (1) lit. a GDPR.",
      },
      cookies: [
        {
          name: "abi_lang",
          provider: "ABI - Arbeit Bildung International",
          purpose: {
            de: "Speichert die vom Nutzer bevorzugte Sprachauswahl.",
            en: "Stores the user's preferred language choice.",
          },
          duration: {
            de: "6 Monate",
            en: "6 months",
          },
          type: "HTTP-Cookie",
          country: "Deutschland (EU)",
          legalBasis: {
            de: "Art. 6 Abs. 1 lit. a DSGVO",
            en: "Art. 6 (1) lit. a GDPR",
          },
        },
      ],
    },
    {
      id: "analytics",
      required: false,
      defaultState: false,
      title: {
        de: "Statistik & Analyse",
        en: "Statistics & Analytics",
      },
      shortDescription: {
        de: "Hilft uns zu verstehen, wie Besucher mit der Website interagieren, um Inhalte zu verbessern.",
        en: "Helps us understand how visitors interact with the website to improve content.",
      },
      fullDescription: {
        de: "Analyse-Cookies erfassen pseudonymisierte Informationen darüber, wie unsere Website genutzt wird (z. B. Besuchsdauer, Seitenaufrufe, Herkunft). Alle Daten werden vor der Übertragung aggregiert und gekürzt (IP-Anonymisierung). Drittlandübermittlung: USA (zertifiziert nach EU-US Data Privacy Framework / Standardvertragsklauseln). Rechtsgrundlage: § 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO.",
        en: "Analytics cookies collect pseudonymized information about how our website is used (e.g. visit duration, page views, referral sources). IP anonymization is active. Third-country transfer: USA (certified under EU-US Data Privacy Framework / Standard Contractual Clauses). Legal basis: § 25 (1) TDDDG in conjunction with Art. 6 (1) lit. a GDPR.",
      },
      cookies: [
        {
          name: "_ga, _ga_*",
          provider: "Google Ireland Limited (Google Analytics 4)",
          purpose: {
            de: "Wird von Google Analytics verwendet, um Seitenaufrufe zu unterscheiden und pseudonymisierte Sitzungsdaten zu erfassen.",
            en: "Used by Google Analytics to distinguish users and collect pseudonymized session metrics.",
          },
          duration: {
            de: "Bis zu 14 Monate",
            en: "Up to 14 months",
          },
          type: "HTTP-Cookie",
          country: "Irland / USA (EU-US DPF)",
          legalBasis: {
            de: "Art. 6 Abs. 1 lit. a DSGVO, Art. 45 Abs. 1 DSGVO",
            en: "Art. 6 (1) lit. a GDPR, Art. 45 (1) GDPR",
          },
        },
      ],
    },
    {
      id: "marketing",
      required: false,
      defaultState: false,
      title: {
        de: "Marketing & Externe Medien",
        en: "Marketing & External Media",
      },
      shortDescription: {
        de: "Wird für interaktive Inhalte wie YouTube-Videos und gezielte Kampagnenauswertungen genutzt.",
        en: "Used for interactive embeds like YouTube videos and targeted campaign measurement.",
      },
      fullDescription: {
        de: "Marketing- und Medien-Cookies werden verwendet, um Besuchern relevante Inhalte und Medien (wie eingebettete YouTube-Videos oder Social-Media-Widgets) bereitzustellen. Beim Laden externer Medien können Daten an externe Server (u. a. Google LLC in den USA) übertragen werden. Drittlandübermittlung: USA (EU-US Data Privacy Framework). Rechtsgrundlage: § 25 Abs. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO.",
        en: "Marketing and media cookies are used to provide relevant external media (such as embedded YouTube videos) to visitors. Loading external media can transfer data to servers in third countries (e.g. Google LLC in the USA). Legal basis: § 25 (1) TDDDG in conjunction with Art. 6 (1) lit. a GDPR.",
      },
      cookies: [
        {
          name: "YSC, VISITOR_INFO1_LIVE",
          provider: "Google Ireland Limited / YouTube LLC",
          purpose: {
            de: "Speichert Benutzereinstellungen beim Abspielen eingebetteter YouTube-Videos und erfasst Bandbreite.",
            en: "Stores user preferences when playing embedded YouTube videos and estimates bandwidth.",
          },
          duration: {
            de: "Sitzung / 6 Monate",
            en: "Session / 6 months",
          },
          type: "HTTP-Cookie",
          country: "USA (EU-US DPF)",
          legalBasis: {
            de: "Art. 6 Abs. 1 lit. a DSGVO",
            en: "Art. 6 (1) lit. a GDPR",
          },
        },
        {
          name: "_gcl_au",
          provider: "Google LLC / Google Ads",
          purpose: {
            de: "Wird von Google AdSense/Ads zur Conversion-Messung und Kampagnenoptimierung genutzt.",
            en: "Used by Google AdSense/Ads for conversion measurement and campaign attribution.",
          },
          duration: {
            de: "90 Tage",
            en: "90 days",
          },
          type: "HTTP-Cookie",
          country: "USA (EU-US DPF)",
          legalBasis: {
            de: "Art. 6 Abs. 1 lit. a DSGVO",
            en: "Art. 6 (1) lit. a GDPR",
          },
        },
      ],
    },
  ],
};

export const TRANSLATIONS = {
  de: {
    bannerTitle: "Privatsphäre & Cookie-Einstellungen",
    bannerDescription:
      "Wir nutzen Cookies und ähnliche Technologien, um Ihnen eine optimale Website-Erfahrung zu bieten, grundlegende Funktionen bereitzustellen und unser Informationsangebot zu verbessern. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Weitere Informationen finden Sie in unserer",
    bannerAcceptAll: "Alle akzeptieren",
    bannerRejectAll: "Alle ablehnen",
    bannerSettings: "Einstellungen",
    privacyPolicy: "Datenschutzerklärung",
    imprint: "Impressum",
    and: "und im",
    cookieSettings: "Cookie-Einstellungen",
    floatingButtonLabel: "Cookie-Einstellungen öffnen",

    // Modal
    modalTitle: "Präferenzen für Cookies & Datenschutz",
    modalDescription:
      "Hier können Sie detaillierte Einstellungen zu den verwendeten Cookies vornehmen. Technisch notwendige Cookies sind für die Bereitstellung des Webangebots zwingend erforderlich und können nicht deaktiviert werden. Ihre Auswahl können Sie jederzeit mit Wirkung für die Zukunft ändern oder widerrufen.",
    saveSelection: "Auswahl speichern",
    acceptAllModal: "Alle akzeptieren",
    rejectAllModal: "Alle ablehnen",
    closeModal: "Schließen",
    alwaysActive: "Immer aktiv",
    active: "Aktiv",
    inactive: "Inaktiv",
    cookieDetails: "Details & Anbieter anzeigen",
    hideCookieDetails: "Details verbergen",
    colName: "Cookie / Name",
    colProvider: "Anbieter",
    colPurpose: "Zweck",
    colDuration: "Gültigkeit",
    colCountry: "Land / Drittland",

    // Two-click YouTube embed
    embedBlockedTitle: "Externes Video blockiert",
    embedBlockedDescription:
      "Dieses Video wird von YouTube bereitgestellt. Beim Laden des Videos werden Daten (u. a. Ihre IP-Adresse) an Server von Google in den USA übermittelt.",
    embedLoadOnce: "Video einmalig laden",
    embedAcceptMarketing: "Marketing-Cookies dauerhaft akzeptieren",

    // Feedback
    consentSavedNotice: "Ihre Cookie-Einstellungen wurden erfolgreich gespeichert.",
    statusActive: "Einwilligung erteilt",
    statusDenied: "Einwilligung abgelehnt",
  },
  en: {
    bannerTitle: "Privacy & Cookie Settings",
    bannerDescription:
      "We use cookies and similar technologies to provide an optimal browsing experience, deliver essential core features, and continuously improve our website. You can decide which categories you wish to allow. For more information, please visit our",
    bannerAcceptAll: "Accept all",
    bannerRejectAll: "Reject all",
    bannerSettings: "Settings",
    privacyPolicy: "Privacy Policy",
    imprint: "Imprint / Legal Notice",
    and: "and our",
    cookieSettings: "Cookie Settings",
    floatingButtonLabel: "Open cookie settings",

    // Modal
    modalTitle: "Cookie & Privacy Preferences",
    modalDescription:
      "Manage your granular cookie and data protection preferences. Technically strictly necessary cookies are required to operate this site and cannot be disabled. You may modify or revoke your consent at any time with effect for the future.",
    saveSelection: "Save selection",
    acceptAllModal: "Accept all",
    rejectAllModal: "Reject all",
    closeModal: "Close",
    alwaysActive: "Always active",
    active: "Active",
    inactive: "Inactive",
    cookieDetails: "Show cookie details & vendors",
    hideCookieDetails: "Hide details",
    colName: "Cookie / Name",
    colProvider: "Provider",
    colPurpose: "Purpose",
    colDuration: "Duration",
    colCountry: "Country / Transfer",

    // Two-click YouTube embed
    embedBlockedTitle: "External video blocked",
    embedBlockedDescription:
      "This video is hosted by YouTube. By loading the video, personal data (including your IP address) will be transmitted to Google servers in the USA.",
    embedLoadOnce: "Load video once",
    embedAcceptMarketing: "Always accept marketing cookies",

    // Feedback
    consentSavedNotice: "Your cookie settings have been saved successfully.",
    statusActive: "Consent granted",
    statusDenied: "Consent denied",
  },
};
