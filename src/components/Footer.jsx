"use client";

import Link from "next/link";
import { Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { navLinks } from "@/utils/NavLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        mt-10 border-t
        border-slate-200 bg-slate-50
        dark:border-slate-800 dark:bg-[#020617]
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div
          className="mb-8 rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between
                        dark:border-sky-900/60 dark:bg-sky-500/5"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
              Ajak UMKM Naik Kelas
            </p>
            <h2 className="mt-1 text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100">
              Punya UMKM di Jakarta Selatan? Daftarin ke South venture biar
              makin kelihatan.
            </h2>
          </div>
          <Link
            href="/kontak-kami"
            className="
              inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold
              bg-sky-600 text-white hover:bg-sky-700
              dark:bg-sky-500 dark:hover:bg-sky-600
            "
          >
            Hubungi tim kami
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white text-sm font-bold">
                SV
              </div>
              <span className="text-base font-semibold text-slate-900 dark:text-slate-50">
                South venture
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Direktori UMKM Jakarta Selatan yang ngumpulin kuliner, jasa, dan
              usaha lokal biar gampang dicari warga + mitra.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-3">
              Navigasi
            </h3>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Kontak & Sosial
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-sky-500" />
                <span>Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-sky-500" />
                <a
                  href="mailto:hello@southventure.local"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  hello@southventure.local
                </a>
              </li>
            </ul>

            <div className="flex gap-3 pt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-sky-500 dark:hover:text-sky-400"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-sky-500 dark:hover:text-sky-400"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500 md:flex-row md:items-center">
          <p>© {year} South venture. Semua hak cipta.</p>
          <div className="flex gap-4">
            <button className="hover:text-slate-800 dark:hover:text-slate-300">
              Kebijakan Privasi
            </button>
            <button className="hover:text-slate-800 dark:hover:text-slate-300">
              Syarat & Ketentuan
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
