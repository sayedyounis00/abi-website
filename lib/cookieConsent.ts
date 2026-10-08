import {
  COOKIE_CONSENT_CONFIG,
  ConsentCategory,
  ConsentState,
} from "@/config/cookieConsent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Safely parse cookie consent state from document.cookie
 */
export function getConsentCookie(): ConsentState | null {
  if (typeof document === "undefined") {
    return null;
  }

  const name = `${COOKIE_CONSENT_CONFIG.cookieName}=`;
  const decodedCookie = document.cookie;
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    const c = cookieArray[i].trim();
    if (c.indexOf(name) === 0) {
      const rawValue = c.substring(name.length, c.length);
      try {
        const parsed = JSON.parse(decodeURIComponent(rawValue)) as ConsentState;
        // Verify policy version matches current version
        if (parsed && parsed.version === COOKIE_CONSENT_CONFIG.version) {
          return {
            version: parsed.version,
            timestamp: parsed.timestamp || new Date().toISOString(),
            necessary: true,
            preferences: Boolean(parsed.preferences),
            analytics: Boolean(parsed.analytics),
            marketing: Boolean(parsed.marketing),
          };
        }
      } catch (err) {
        console.warn("[CookieConsent] Failed to parse consent cookie:", err);
      }
    }
  }

  return null;
}

/**
 * Persist consent choices in a first-party cookie
 * Path=/; Secure; SameSite=Lax; Max-Age=15552000 (6 months)
 */
export function setConsentCookie(
  choices: {
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
  }
): ConsentState {
  const consentState: ConsentState = {
    version: COOKIE_CONSENT_CONFIG.version,
    timestamp: new Date().toISOString(),
    necessary: true,
    preferences: choices.preferences,
    analytics: choices.analytics,
    marketing: choices.marketing,
  };

  if (typeof document !== "undefined") {
    const serialized = encodeURIComponent(JSON.stringify(consentState));
    const maxAge = COOKIE_CONSENT_CONFIG.cookieMaxAgeSeconds;
    const isSecure = window.location.protocol === "https:";

    // Cookie attributes according to GDPR / TDDDG requirements
    let cookieString = `${COOKIE_CONSENT_CONFIG.cookieName}=${serialized}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
    if (isSecure) {
      cookieString += "; Secure";
    }

    document.cookie = cookieString;
  }

  return consentState;
}

/**
 * Purge cookies associated with revoked categories
 */
export function deleteCookiesForCategory(category: ConsentCategory): void {
  if (typeof document === "undefined") return;

  const knownList = COOKIE_CONSENT_CONFIG.knownCookiesToDelete[category] || [];
  const currentCookies = document.cookie.split(";").map((c) => c.trim().split("=")[0]);
  const host = window.location.hostname;
  const domainParts = host.split(".");

  // Build candidate domains (e.g. abi-karriere.de, .abi-karriere.de, localhost)
  const domainsToTest: string[] = ["", host, `.${host}`];
  if (domainParts.length >= 2) {
    const rootDomain = domainParts.slice(-2).join(".");
    domainsToTest.push(rootDomain, `.${rootDomain}`);
  }

  const deleteCookieName = (name: string) => {
    domainsToTest.forEach((domain) => {
      const domainAttr = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax${domainAttr}`;
    });
  };

  // Match known cookies, including wildcards like _ga_*
  knownList.forEach((pattern) => {
    if (pattern.endsWith("*")) {
      const prefix = pattern.slice(0, -1);
      currentCookies.forEach((existingName) => {
        if (existingName.startsWith(prefix)) {
          deleteCookieName(existingName);
        }
      });
    } else {
      deleteCookieName(pattern);
    }
  });
}

/**
 * Update Google Consent Mode v2 state
 */
export function updateGoogleConsentMode(consent: ConsentState): void {
  if (typeof window === "undefined") return;

  const consentModeUpdate = {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    personalization_storage: consent.preferences ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  };

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", consentModeUpdate);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["consent", "update", consentModeUpdate]);
  }
}

/**
 * Activate all blocked scripts for a granted category
 * Finds <script type="text/plain" data-cookie-category="...">
 */
export function activateBlockedScripts(category: ConsentCategory): void {
  if (typeof document === "undefined") return;

  const selector = `script[type="text/plain"][data-cookie-category="${category}"]`;
  const scripts = document.querySelectorAll<HTMLScriptElement>(selector);

  scripts.forEach((oldScript) => {
    if (oldScript.dataset.activated === "true") return;

    const newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.dataset.activated = "true";
    newScript.dataset.cookieCategory = category;

    // Copy attributes
    Array.from(oldScript.attributes).forEach((attr) => {
      if (attr.name !== "type") {
        newScript.setAttribute(attr.name, attr.value);
      }
    });

    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent;
    }

    // Replace old script with newly activated script to trigger browser execution
    oldScript.parentNode?.replaceChild(newScript, oldScript);
  });
}

/**
 * Apply consent across all mechanisms:
 * 1. Google Consent Mode v2
 * 2. Revoked cookie cleanup
 * 3. Script activation
 * 4. Dispatch custom event
 * 5. Asynchronous proof logging
 */
export function applyConsent(
  consent: ConsentState,
  previousConsent?: ConsentState | null
): void {
  if (typeof window === "undefined") return;

  // 1. Google Consent Mode v2
  updateGoogleConsentMode(consent);

  // 2. Cookie cleanup for revoked categories
  const categories: ConsentCategory[] = ["preferences", "analytics", "marketing"];
  categories.forEach((cat) => {
    const wasGranted = previousConsent ? previousConsent[cat] : false;
    const isGranted = consent[cat];

    if (wasGranted && !isGranted) {
      deleteCookiesForCategory(cat);
    }

    if (isGranted) {
      activateBlockedScripts(cat);
    }
  });

  // 3. Dispatch global custom event
  window.dispatchEvent(
    new CustomEvent("cookie_consent_updated", {
      detail: { consent },
    })
  );

  // 4. Consent proof logging (non-blocking)
  sendConsentProofLog(consent);
}

/**
 * Log consent record asynchronously for GDPR Art. 7(1) compliance
 */
async function sendConsentProofLog(consent: ConsentState): Promise<void> {
  try {
    // Generate/retrieve an anonymous ephemeral consent UUID
    let consentId = "";
    if (typeof sessionStorage !== "undefined") {
      consentId = sessionStorage.getItem("abi_consent_uuid") || "";
      if (!consentId) {
        consentId =
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `cid_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        sessionStorage.setItem("abi_consent_uuid", consentId);
      }
    }

    await fetch("/api/consent-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        consentId,
        timestamp: consent.timestamp,
        version: consent.version,
        choices: {
          necessary: consent.necessary,
          preferences: consent.preferences,
          analytics: consent.analytics,
          marketing: consent.marketing,
        },
      }),
      keepalive: true,
    });
  } catch {
    // Silently continue - consent logging failure must not block the user interface
  }
}
