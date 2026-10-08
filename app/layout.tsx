import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressSlider from "@/components/ScrollProgressSlider";
import GoogleConsentMode from "@/components/cookie-consent/GoogleConsentMode";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import CookieBanner from "@/components/cookie-consent/CookieBanner";
import CookiePreferencesModal from "@/components/cookie-consent/CookiePreferencesModal";
import CookieFloatingButton from "@/components/cookie-consent/CookieFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abi-karriere.de"),
  title: "ABI - Arbeit Bildung International",
  description:
    "Ihr kompetenter Partner für die Vermittlung qualifizierter Fachkräfte aus dem Ausland auf den deutschen Arbeitsmarkt sowie akademische und berufliche Ausbildung in Deutschland.",
  keywords: [
    "ABI",
    "Arbeit Bildung International",
    "Fachkräftevermittlung",
    "Deutschland",
    "Medizinscher Sektor",
    "Pflegefachkräfte",
    "Ärzte",
    "Ausbildung",
    "Studienplatzvermittlung",
  ],
  openGraph: {
    title: "ABI - Arbeit Bildung International",
    description: "Vermittlung qualifizierter Fachkräfte aus dem Ausland auf den deutschen Arbeitsmarkt.",
    url: "https://abi-karriere.de",
    siteName: "ABI UG",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "ABI - Arbeit Bildung International Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABI - Arbeit Bildung International",
    description: "Ihr Partner für die Vermittlung qualifizierter ausländischer Fachkräfte nach Deutschland.",
    images: ["/images/og-image.jpg"], // Placeholder for actual OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-abi-2.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo-abi-2.svg",
    apple: "/logo-abi-2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth light`}
    >
      <head>
        <GoogleConsentMode />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <CookieConsentProvider>
          <ScrollProgressSlider />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieBanner />
          <CookiePreferencesModal />
          <CookieFloatingButton />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
