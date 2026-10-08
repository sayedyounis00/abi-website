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
  title: "ABI - Arbeit.Bildung.International",
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
