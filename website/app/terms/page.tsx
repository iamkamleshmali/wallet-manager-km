import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft, Wallet, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Wallet Manager",
  description:
    "Terms & Conditions for Wallet Manager: open-source MIT software license, offline data ownership, warranty disclaimer, and usage terms.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
            <Scale className="w-3.5 h-3.5" />
            Open Source • MIT Licensed
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            Effective Date: October 18, 2026 • Version 1.0
          </p>
        </div>

        <div className="space-y-10 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          {/* 1. Agreement to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using the Wallet Manager Android application or visiting this website (<code>wallet-manager-km.vercel.app</code>), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not install or use the application or website.
            </p>
          </section>

          {/* 2. Open-Source MIT License */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Open-Source MIT License
            </h2>
            <p>
              Wallet Manager is free software released under the terms of the <strong>MIT License</strong>. You are granted permission, free of charge, to inspect, study, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the conditions outlined in the official license.
            </p>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 font-mono text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 leading-normal">
              THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
            </div>
          </section>

          {/* 3. User Responsibility & Data Ownership */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Data Ownership & User Responsibility
            </h2>
            <p>
              Wallet Manager operates as an <strong>offline-first</strong> utility. Because all financial ledger data is stored locally in SQLite on your physical device:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li>You maintain exclusive ownership and control over your transaction logs, account balances, and receipt photographs.</li>
              <li>You are solely responsible for creating periodic backups (via local export or Google Drive sync) to safeguard your data against device loss, factory resets, or hardware failure.</li>
              <li>The creators and maintainers of Wallet Manager have no access to your device, no recovery keys, and cannot restore deleted local databases.</li>
            </ul>
          </section>

          {/* 4. Google Drive AppData Sync Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Google Drive Synchronization
            </h2>
            <p>
              If you utilize the Google Drive AppData sync feature:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li>Your usage of Google Drive is subject to Google&apos;s own Terms of Service and Privacy Policy.</li>
              <li>Wallet Manager only accesses your personal account&apos;s isolated <code>drive.appdata</code> folder to store encrypted backup archives.</li>
              <li>We do not control Google&apos;s service availability, rate limits, or network uptime.</li>
            </ul>
          </section>

          {/* 5. Direct APK Downloads & Installation */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. APK Installation & Updates
            </h2>
            <p>
              Official Android APK packages are published on GitHub Releases. When installing APK files directly:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm pl-2">
              <li>Always ensure you download packages only from the official GitHub repository or verified links on this website.</li>
              <li>You are responsible for confirming that your device settings permit app installation from your browser or file manager.</li>
            </ul>
          </section>

          {/* 6. No Financial or Accounting Advice */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              6. Not Financial or Tax Advice
            </h2>
            <p>
              Wallet Manager is an expense logging and bookkeeping utility. It does not provide certified financial, investment, tax, or legal advice. Calculations and balances generated by the application should be verified independently before filing official tax returns or financial disclosures.
            </p>
          </section>

          {/* 7. Contact Information */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              7. Contact & Contributions
            </h2>
            <p>
              Wallet Manager is maintained by Kamlesh Mali and open-source contributors. For bug reports, feature requests, or questions regarding these Terms:
            </p>
            <p className="pt-2">
              <a
                href="https://github.com/iamkamleshmali/wallet-manager-app/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                GitHub Issue Tracker
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
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a
              href="https://github.com/iamkamleshmali/wallet-manager-app"
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
