import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  Cloud,
  FileCheck,
  EyeOff,
  ArrowLeft,
  Wallet,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy — Wallet Manager",
  description:
    "Privacy Policy for Wallet Manager: an offline-first, private personal finance app for Android. No SMS scraping, no ads, encrypted Google Drive sync, and open-source transparency.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 selection:bg-coral-500 selection:text-white flex flex-col">
      {/* Header Bar */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0B0F17]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Return to Wallet Manager Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-coral-500 to-warmOrange-500 flex items-center justify-center text-white shadow-glow-coral group-hover:scale-105 transition-transform">
              <Wallet className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
              Wallet Manager
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-700 dark:text-coral-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Privacy Policy Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Zero-Knowledge & Offline-First
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            Effective Date: October 18, 2026 • Version 1.1
          </p>
        </div>

        <div className="space-y-10 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          {/* Summary Callout */}
          <section className="p-6 rounded-2xl bg-coral-500/5 dark:bg-coral-500/10 border border-coral-500/20">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Lock className="w-5 h-5 text-coral-600 dark:text-coral-400" />
              Summary of Our Privacy Commitments
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Wallet Manager is an <strong>offline-first, zero-telemetry Android application</strong> designed from the ground up so that your personal financial records never touch our servers. We have no user accounts, no login portals, no tracking cookies, no advertising SDKs, and zero bank SMS scraping.
            </p>
          </section>

          {/* 1. On-Device Data Storage */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-coral-600 dark:text-coral-400" />
              1. 100% Local On-Device Data Storage
            </h2>
            <p>
              When you record transactions, accounts, categories, budgets, and attach receipt photographs, all data is written directly to a private, sandboxed <strong>SQLite database</strong> residing exclusively within your device&apos;s internal storage.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li>Your financial records are never uploaded to any proprietary server or third-party database.</li>
              <li>You own 100% of your data. Uninstalling the app removes local files unless you have exported a database backup or synchronized with Google Drive.</li>
            </ul>
          </section>

          {/* 2. No SMS or Contact Scraping */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-coral-600 dark:text-coral-400" />
              2. Zero SMS Scraping & Minimal Device Permissions
            </h2>
            <p>
              Unlike commercial finance apps, Wallet Manager <strong>never</strong> requests or utilizes invasive Android permissions:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li><strong>NO READ_SMS or RECEIVE_SMS:</strong> We do not scan your text messages, bank transaction alerts, or OTPs.</li>
              <li><strong>NO READ_CONTACTS or LOCATION:</strong> We do not access your address book, phone state, or physical GPS location.</li>
              <li><strong>Camera / Storage (Optional):</strong> Only requested if you choose to photograph or attach physical paper receipts to your transactions. Receipt photos stay saved locally on your phone.</li>
              <li><strong>Biometrics (Optional):</strong> Utilizes official Android <code>BiometricPrompt</code> to unlock the app locally via fingerprint or face recognition. Biometric data never leaves hardware-backed secure storage.</li>
            </ul>
          </section>

          {/* 3. Google Drive AppData Sync */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              3. Google Drive AppData Synchronization
            </h2>
            <p>
              If you optionally enable cloud backup, Wallet Manager communicates directly from your device to your personal Google Drive account via the official Google Drive API:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li>The app requests only the restricted <code>https://www.googleapis.com/auth/drive.appdata</code> scope.</li>
              <li>Backups are stored inside your private Google Drive Application Data folder, which is hidden from standard folder browsing and inaccessible to other applications.</li>
              <li>Backups are encrypted on your device prior to upload.</li>
              <li>No intermediary or relay servers ever handle or inspect your Google OAuth credentials or backup files.</li>
            </ul>
          </section>

          {/* 4. GitHub-Hosted APK & Open-Source Code */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              4. GitHub-Hosted Releases & Open-Source Transparency
            </h2>
            <p>
              Wallet Manager is free and open-source software licensed under the MIT License. The official installation APK packages are built transparently using GitHub Actions and hosted on official GitHub Releases:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li>Source repository: <a href={SITE_CONFIG.github.repoUrl} target="_blank" rel="noopener noreferrer" className="text-coral-700 dark:text-coral-400 underline font-semibold">github.com/{SITE_CONFIG.github.owner}/{SITE_CONFIG.github.repo}</a></li>
              <li>The landing page fetches latest release tags and package sizes directly from the public GitHub Releases API.</li>
              <li>Anyone is free to audit the source code, verify dependencies, or build the APK directly from source.</li>
            </ul>
          </section>

          {/* 5. Website Telemetry & Cookies */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Website Analytics & Cookie Policy
            </h2>
            <p>
              This showcase website (<code>wallet-manager-km.vercel.app</code>) is hosted on Vercel. In keeping with our strict privacy philosophy:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li><strong>Zero Cookies:</strong> We do not set tracking cookies or cross-site tracking identifiers. You do not need to accept a cookie banner because no tracking cookies exist.</li>
              <li><strong>Privacy-Friendly Analytics:</strong> We use privacy-first Vercel Analytics, which collects aggregated metrics (page views, referrer, browser family) without collecting IP addresses, personal identifiers, or persistent device fingerprints.</li>
              <li><strong>Local Storage:</strong> Your browser&apos;s local storage is used solely to remember your chosen theme (Light mode vs Dark mode).</li>
            </ul>
          </section>

          {/* 6. Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              6. Children&apos;s Privacy
            </h2>
            <p>
              Because Wallet Manager does not collect any personal data, it does not knowingly collect, store, or solicit information from anyone under the age of 13.
            </p>
          </section>

          {/* 7. Changes to This Policy & Contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              7. Questions & Contact
            </h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy or the security of Wallet Manager, please open an issue or start a discussion on our official GitHub repository:
            </p>
            <p className="pt-2">
              <a
                href={SITE_CONFIG.github.issuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                Open an Issue on GitHub
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-600 dark:text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 Wallet Manager • MIT License</div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <a
              href={SITE_CONFIG.github.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
