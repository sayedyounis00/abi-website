import React from "react";
import Script from "next/script";
import { COOKIE_CONSENT_CONFIG } from "@/config/cookieConsent";

interface GoogleConsentModeProps {
  gaMeasurementId?: string;
}

/**
 * Initializes Google Consent Mode v2 strictly BEFORE any analytics or ad tags load.
 * Defaults all storage to 'denied' in accordance with GDPR & TDDDG §25.
 * If a valid first-party consent cookie is already present, applies it immediately.
 */
export default function GoogleConsentMode({ gaMeasurementId }: GoogleConsentModeProps) {
  const measurementId =
    gaMeasurementId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  const inlineConsentScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    // 1. Set Google Consent Mode v2 strict defaults (ALL DENIED)
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'personalization_storage': 'denied',
      'functionality_storage': 'granted',
      'security_storage': 'granted',
      'wait_for_update': 500
    });

    // 2. Read existing consent cookie if available to prevent flicker
    (function() {
      try {
        var name = "${COOKIE_CONSENT_CONFIG.cookieName}=";
        var cookies = document.cookie ? document.cookie.split(';') : [];
        for (var i = 0; i < cookies.length; i++) {
          var c = cookies[i].trim();
          if (c.indexOf(name) === 0) {
            var raw = c.substring(name.length);
            var parsed = JSON.parse(decodeURIComponent(raw));
            if (parsed && parsed.version === "${COOKIE_CONSENT_CONFIG.version}") {
              gtag('consent', 'update', {
                'analytics_storage': parsed.analytics ? 'granted' : 'denied',
                'ad_storage': parsed.marketing ? 'granted' : 'denied',
                'ad_user_data': parsed.marketing ? 'granted' : 'denied',
                'ad_personalization': parsed.marketing ? 'granted' : 'denied',
                'personalization_storage': parsed.preferences ? 'granted' : 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted'
              });
            }
            break;
          }
        }
      } catch (e) {
        // Silently continue if parse error
      }
    })();
  `;

  return (
    <>
      {/* Consent mode default inline initialization executed synchronously in head */}
      <script
        id="google-consent-mode-init"
        dangerouslySetInnerHTML={{ __html: inlineConsentScript }}
      />

      {/* If GA4 Measurement ID is configured, load GA4 tag asynchronously */}
      {measurementId && (
        <>
          <Script
            id="google-gtag-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
          <Script
            id="google-analytics-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}', {
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=Lax;Secure'
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}
