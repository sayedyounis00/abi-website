# Production Cookie Consent Solution (GDPR / TDDDG § 25 Compliant)

Production-ready, privacy-first cookie banner and preference center engineered for websites operating under German and European Union jurisdiction (GDPR Art. 4(11), 6(1)(a), 7, 13; TDDDG § 25; ePrivacy Directive 2002/58/EC; CJEU Planet49 C-673/17; BGH "Cookie-Einwilligung II"; DSK Orientierungshilfe; WCAG 2.1 AA).

---

> [!IMPORTANT]
> **Rechtlicher Hinweis (Legal Disclaimer):**
> Dieses Modul wurde nach den aktuellen technischen und rechtlichen Vorgaben (Stand 2026) für TDDDG § 25, DSGVO, BGH und die DSK-Orientierungshilfe konzipiert. Es stellt jedoch keine Rechtsberatung dar und ersetzt nicht die individuelle Prüfung der konkreten Texte (Datenschutzerklärung, Impressum) sowie der eingesetzten Dienste durch einen qualifizierten Rechtsanwalt oder Datenschutzbeauftragten (DSB).

---

## 1. Compliance-Architektur & Rechtsgrundlagen

| Kriterium | Anforderung (DSGVO / TDDDG / DSK / BGH) | Technische Umsetzung in dieser Lösung |
| :--- | :--- | :--- |
| **Opt-in-Prinzip** | Keine vorangekreuzten Kästchen, aktive freiwillige Handlung erforderlich (Planet49, BGH). | Alle Kategorien (außer "Notwendig") sind standardmäßig **deaktiviert** (`false`). |
| **Gleichwertigkeit (DSK)** | "Alle ablehnen" muss auf der 1. Ebene genauso auffällig und einfach sein wie "Alle akzeptieren". | 3 Buttons mit **exakt gleicher Größe, Gewichtung und Kontrast**: *Alle akzeptieren*, *Alle ablehnen*, *Einstellungen*. Kein Dark Pattern, kein Nudging. |
| **TDDDG § 25 Abs. 1 & 2** | Zugriff auf Endgeräte nur nach Einwilligung, außer technisch unbedingt erforderlich. | Skripte und Drittanbieter-Anfragen (Google Analytics, YouTube) sind vor Einwilligung **vollständig blockiert**. |
| **Widerrufbarkeit (Art. 7(3) DSGVO)** | Widerruf muss so einfach sein wie die Erteilung. | Persistenter Link in der Fußzeile aller Seiten + dezentes Floating-Icon unten links ("Cookie-Einstellungen"). |
| **Cookie-Löschung bei Widerruf** | Beim Entzug von Rechten müssen gesetzte Cookies gelöscht werden. | Automatische Säuberung von bekannten Cookies (`_ga`, `_gid`, `_gcl_au`, etc.) auf Domain- und Subdomain-Ebene. |
| **Google Consent Mode v2** | Standardmäßig auf `denied` für alle relevanten Tags vor Einwilligung. | Inline-Initialisierung im `<head>` via `GoogleConsentMode.tsx`. Statusaktualisierung bei Nutzerentscheidung. |
| **Nachweispflicht (Art. 7(1) DSGVO)** | Verantwortlicher muss die Einwilligung nachweisen können. | Pseudonymisierter API-Endpunkt `POST /api/consent-log`. **Keine Speicherung der vollständigen IP-Adresse**. |
| **Barrierefreiheit (WCAG 2.1 AA)** | Tastaturbedienung, Screenreader-Kompatibilität, Farbkontraste. | Focus-Trap, ESC-Schließen, ARIA-Rollen (`dialog`, `region`, `switch`, `aria-checked`), 4.5:1 Mindestkontrast. |
| **Privacy by Design** | Keine externen CDNs für das Banner selbst. | Lokale Schriftarten (Geist), Tailwind CSS, keine externen Schriftarten oder Tracker für das Banner. |

---

## 2. Dateistruktur

```
abi-website/
├── config/
│   └── cookieConsent.ts                 # Zentrale Konfiguration (Kategorien, Texte, Cookies, Version)
├── lib/
│   └── cookieConsent.ts                 # Core-Logik (Cookie Read/Write, Purge, Skript-Aktivierung, GCM v2)
├── components/
│   └── cookie-consent/
│       ├── CookieConsentProvider.tsx    # React Context & Lifecycle-Management
│       ├── CookieBanner.tsx             # 1. Ebene: Banner mit 3 gleichwertigen Buttons & Sprachumschaltung
│       ├── CookiePreferencesModal.tsx   # 2. Ebene: Granulare Kategorien, Switches & detaillierte Cookie-Tabellen
│       ├── CookieFloatingButton.tsx     # Dezentes Floating-Badge zum jederzeitigen Widerruf/Änderung
│       ├── CookieFooterButton.tsx       # Integrierter Footer-Link für gesetzliche Vorgaben
│       ├── GoogleConsentMode.tsx        # Google Consent Mode v2 Head-Snippet
│       ├── BlockedScript.tsx            # Komponente zur deklarativen Blockierung von Skripten
│       ├── YouTubeConsentEmbed.tsx      # 2-Klick-Lösung für YouTube-Videos (DSGVO-konform)
│       ├── CookieTable.tsx              # Dynamische Cookie-Tabelle für die Datenschutzerklärung
│       └── CookieConsentExamples.tsx    # Referenzbeispiele für Entwickler
└── app/
    ├── api/
    │   └── consent-log/
    │       └── route.ts                 # Pseudonymisierter API-Endpunkt für Art. 7(1) DSGVO Nachweise
    ├── privacy-policy/
    │   └── page.tsx                     # Datenschutzerklärung mit integrierter CookieTable
    └── layout.tsx                       # Globale Einbindung in den Next.js App Router
```

---

## 3. Cookie-Speicherung (Spezifikation)

- **Cookie-Name:** `cookie_consent`
- **Gültigkeitsdauer (Max-Age):** `15552000` Sekunden (6 Monate / 180 Tage). *Hält die DSK-Grenze von max. 12 Monaten strikt ein.*
- **Attribute:** `Path=/; Secure; SameSite=Lax; Max-Age=15552000`
- **Format:** URL-kodiertes JSON:
```json
{
  "version": "1.0",
  "timestamp": "2026-10-07T11:00:00.000Z",
  "necessary": true,
  "preferences": false,
  "analytics": false,
  "marketing": false
}
```

---

## 4. Wie man Skripte und Medien blockiert

### A. Reaktive Skripte mit der `<BlockedScript>`-Komponente (Empfohlen für React)
Verwenden Sie die Komponente in Ihren Seiten oder Komponenten. Das Skript wird erst geladen/ausgeführt, wenn die Kategorie genehmigt wurde:

```tsx
import BlockedScript from "@/components/cookie-consent/BlockedScript";

export default function MyAnalyticsComponent() {
  return (
    <>
      {/* Externes Skript */}
      <BlockedScript
        id="meta-pixel-script"
        category="marketing"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />

      {/* Inline-Skript */}
      <BlockedScript
        id="custom-tracker"
        category="analytics"
      >
        {`console.log("Analytics gestartet nach Einwilligung");`}
      </BlockedScript>
    </>
  );
}
```

### B. Standard-HTML Markierung (`<script type="text/plain">`)
Statische oder template-basierte Skripte werden über das HTML-Attribut markiert. Der Browser führt diese nicht aus. Sobald der Nutzer zustimmt, aktiviert die Engine in `lib/cookieConsent.ts` die Skripte automatisch:

```html
<!-- Analytics Tracker -->
<script
  type="text/plain"
  data-cookie-category="analytics"
  src="https://example.com/analytics.js"
></script>

<!-- Marketing Pixel -->
<script
  type="text/plain"
  data-cookie-category="marketing"
>
  fbq('init', '1234567890');
  fbq('track', 'PageView');
</script>
```

### C. Eingebettete YouTube-Videos (2-Klick-Lösung)
Statt direkt ein ungesichertes `<iframe>` einzubinden (das ohne Zustimmung IP-Adressen an Google in die USA übertragen würde), nutzen Sie die Komponente `YouTubeConsentEmbed`:

```tsx
import YouTubeConsentEmbed from "@/components/cookie-consent/YouTubeConsentEmbed";

export default function VideoSection() {
  return (
    <YouTubeConsentEmbed
      videoId="dQw4w9WgXcQ"
      title="ABI - Vorstellungsvideo"
      aspectRatio="16/9"
    />
  );
}
```

---

## 5. Google Consent Mode v2

Google Consent Mode v2 ist standardmäßig in `app/layout.tsx` über `<GoogleConsentMode />` eingebunden.

### Initialer Status (vor Nutzerentscheidung):
```javascript
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
```

### Nach Nutzerentscheidung:
Wenn der Nutzer z. B. nur Analytics akzeptiert, sendet die Engine sofort:
```javascript
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'personalization_storage': 'denied',
  'functionality_storage': 'granted',
  'security_storage': 'granted'
});
```

Um eine Google Analytics 4 Mess-ID zu hinterlegen, tragen Sie in Ihrer `.env`-Datei folgendes ein:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 6. Neuen Cookie / Anbieter hinzufügen

Öffnen Sie `config/cookieConsent.ts` und fügen Sie den Cookie unter der passenden Kategorie in das `cookies`-Array ein:

```typescript
{
  name: "_fbp",
  provider: "Meta Platforms Ireland Limited",
  purpose: {
    de: "Wird von Facebook verwendet, um Werbung zu personalisieren und Conversions zu messen.",
    en: "Used by Facebook to deliver and measure targeted advertisements.",
  },
  duration: {
    de: "3 Monate",
    en: "3 months",
  },
  type: "HTTP-Cookie",
  country: "USA (EU-US Data Privacy Framework)",
  legalBasis: {
    de: "Art. 6 Abs. 1 lit. a DSGVO",
    en: "Art. 6 (1) lit. a GDPR",
  },
}
```

Tragen Sie den Namen zusätzlich in `knownCookiesToDelete.marketing` ein, damit der Cookie bei einem späteren Widerruf automatisch gelöscht wird.

---

## 7. Version aktualisieren (Erneute Einwilligung anfordern)

Wenn Sie wesentliche neue Tracking-Dienste hinzufügen oder die Datenschutzhinweise substanziell ändern, müssen Sie die Einwilligung der bestehenden Besucher erneut einholen.

1. Öffnen Sie `config/cookieConsent.ts`.
2. Erhöhen Sie den Versions-String:
   ```typescript
   export const COOKIE_CONSENT_CONFIG = {
     version: "1.1", // Vorher: "1.0"
     ...
   };
   ```
3. Beim nächsten Seitenaufruf erkennt die Lösung die veraltete Version im Cookie des Nutzers, ignoriert den alten Stand und zeigt das Einwilligungsbanner erneut an.

---

## 8. Test- und Verifikations-Checkliste

Führen Sie vor dem Go-Live folgende Tests in den Browser-DevTools durch:

| # | Testfall | Erwartetes Ergebnis |
| :--- | :--- | :--- |
| **1** | **Erster Besuch (Inkognito-Fenster)** | - Banner erscheint auf der 1. Ebene.<br>- Unter **DevTools > Application > Cookies** ist **kein** Tracking-Cookie (`_ga`, `_gid`, etc.) vorhanden.<br>- Nur technisch notwendige Ressourcen werden geladen. |
| **2** | **Klick auf "Alle ablehnen"** | - Banner schließt sich.<br>- Cookie `cookie_consent` enthält `{"preferences":false,"analytics":false,"marketing":false}`.<br>- Es werden keine Tracking-Skripte geladen. |
| **3** | **Persistenz bei Seitenwechsel / Reload** | - Seite neu laden (`F5`) oder Unterseite `/impressum` aufrufen.<br>- Banner erscheint **nicht** erneut.<br>- Gespeicherte Präferenzen bleiben erhalten. |
| **4** | **Klick auf "Alle akzeptieren"** | - Cookie wird mit `true` für alle Kategorien aktualisiert.<br>- GCM v2 meldet `granted`.<br>- Blockierte Skripte werden ausgeführt. |
| **5** | **Widerruf über Footer / Floating Button** | - Klick auf "Cookie-Einstellungen" in der Fußzeile oder links unten öffnet die 2. Ebene.<br>- Nach Abwählen von Analytics/Marketing und "Auswahl speichern" werden vorhandene Tracker-Cookies im Browser sofort gelöscht.<br>- GCM v2 meldet `denied`. |
| **6** | **Tastaturnavigation & WCAG 2.1 AA** | - Mit `Tab` lässt sich der Fokus logisch durch das Banner / Modal steuern.<br>- Fokus ist im Modal gefangen (Focus Trap).<br>- `ESC`-Taste schließt das Einstellungsmodal.<br>- Screenreader liest Rollen (`dialog`, `switch`, Status) korrekt vor. |
