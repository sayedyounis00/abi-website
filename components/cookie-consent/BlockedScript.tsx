"use client";

import React from "react";
import Script from "next/script";
import { ConsentCategory } from "@/config/cookieConsent";
import { useCookieConsent } from "./CookieConsentProvider";

interface BlockedScriptProps {
  id: string;
  category: ConsentCategory;
  src?: string;
  strategy?: "afterInteractive" | "lazyOnload";
  children?: string;
  onLoad?: () => void;
}

/**
 * Renders a script that remains blocked until the user consents to the corresponding category.
 *
 * Markup pattern:
 * When consent is not granted, outputs:
 * <script type="text/plain" data-cookie-category="[category]" ...>
 *
 * When consent is granted, dynamically executes or renders normal Next.js Script.
 */
export default function BlockedScript({
  id,
  category,
  src,
  strategy = "afterInteractive",
  children,
  onLoad,
}: BlockedScriptProps) {
  const { hasConsent, isInitialized } = useCookieConsent();
  const allowed = isInitialized ? hasConsent(category) : false;

  if (!isInitialized) {
    return null;
  }

  // If consent is granted, execute script
  if (allowed) {
    if (src) {
      return (
        <Script
          id={id}
          src={src}
          strategy={strategy}
          onLoad={onLoad}
        />
      );
    }
    if (children) {
      return (
        <Script
          id={id}
          strategy={strategy}
          dangerouslySetInnerHTML={{ __html: children }}
        />
      );
    }
    return null;
  }

  // Blocked state: plain text script with data attribute for script unblocking engine
  return (
    <script
      id={id}
      type="text/plain"
      data-cookie-category={category}
      {...(src ? { "data-src": src } : {})}
      dangerouslySetInnerHTML={{
        __html: children || "",
      }}
    />
  );
}
