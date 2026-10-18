import Link from "next/link";
import { Wallet, Home, Download, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "404 — Page Not Found | Wallet Manager",
  description: "The page you are looking for does not exist. Return to Wallet Manager homepage.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 flex flex-col justify-between selection:bg-coral-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 py-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 focus:outline-none group"
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
            className="text-xs font-bold text-coral-700 dark:text-coral-400 hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main 404 Hero */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-coral-500/10 text-coral-600 dark:text-coral-400 mb-6 border border-coral-500/20 shadow-sm">
            <span className="text-3xl font-extrabold">404</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Page Not Found
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been moved, or the link may have been mistyped.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-warmOrange-500 text-white font-bold text-sm shadow-md hover:scale-102 active:scale-98 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              href="/#install"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Download className="w-4 h-4 text-coral-500" />
              <span>Download Android APK</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
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
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 Wallet Manager • Offline-First Personal Finance
      </footer>
    </div>
  );
}
