import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#FF5E57",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wallet-manager-km.vercel.app"),
  title: "Wallet Manager — Offline-First Personal Finance & Expense Tracker",
  description:
    "Double-entry bookkeeping, visual charts, receipt photo storage, and encrypted Google Drive auto-sync. Completely offline-first, no ads, no bank SMS scraping. 100% private Android app.",
  keywords: [
    "Wallet Manager",
    "Money Manager",
    "Expense Tracker",
    "Personal Finance",
    "Offline Budget App",
    "Double Entry Bookkeeping",
    "Android APK Download",
    "Google Drive Sync Expense",
  ],
  authors: [{ name: "Kamlesh Mali" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wallet Manager — The Easiest Way to Manage Personal Finances",
    description:
      "Offline-first, 100% private expense tracker with double-entry ledger, receipt storage, and encrypted Google Drive sync.",
    type: "website",
    url: "https://wallet-manager-km.vercel.app",
    siteName: "Wallet Manager",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wallet Manager — Offline-First Personal Finance & Expense Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallet Manager — Offline-First Expense Tracker",
    description:
      "Manage transactions, visual charts, and encrypted Google Drive auto-sync with zero tracking.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#FAFAFC] text-slate-800 dark:bg-[#0B0F17] dark:text-slate-100 font-sans antialiased selection:bg-coral-500 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
