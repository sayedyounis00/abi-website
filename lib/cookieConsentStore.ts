import { ConsentState } from "@/config/cookieConsent";
import { getConsentCookie } from "@/lib/cookieConsent";

let cachedConsent: ConsentState | null = null;
let isStoreInitialized = false;
const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((callback) => {
    try {
      callback();
    } catch (err) {
      console.error("[ConsentStore] Listener error:", err);
    }
  });
}

/**
 * Returns current snapshot of consent state (SSR safe)
 */
export function getConsentSnapshot(): ConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }
  if (!isStoreInitialized) {
    cachedConsent = getConsentCookie();
    isStoreInitialized = true;
  }
  return cachedConsent;
}

/**
 * SSR fallback snapshot
 */
export function getServerConsentSnapshot(): ConsentState | null {
  return null;
}

/**
 * React 19 external store subscription
 */
export function subscribeConsentStore(callback: () => void): () => void {
  subscribers.add(callback);

  // Also listen for cross-window / browser events
  const handleEvent = () => {
    cachedConsent = getConsentCookie();
    callback();
  };

  if (typeof window !== "undefined") {
    window.addEventListener("cookie_consent_updated", handleEvent);
  }

  return () => {
    subscribers.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("cookie_consent_updated", handleEvent);
    }
  };
}

/**
 * Updates in-memory store snapshot and notifies all React subscribers
 */
export function setConsentSnapshot(newState: ConsentState): void {
  cachedConsent = newState;
  isStoreInitialized = true;
  notifySubscribers();
}
