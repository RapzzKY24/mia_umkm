"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import MobileSearch from "@/components/MobileSearch";
import { navLinks } from "@/utils/NavLinks";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/berita", label: "Berita", highlight: true },
  { href: "/umkm", label: "UMKM" },
  { href: "/mitra", label: "Mitra" },
  { href: "/kontak-kami", label: "Kontak Kami" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-sm border-b border-zinc-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={close}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-cyan-600">
            <span className="text-xl font-bold text-white">⚡</span>
          </div>
          <span className="text-xl font-bold text-gray-900">UMKM</span>
        </Link>

        {/* Search */}
        <div className="hidden md:block w-full max-w-lg mx-4">
          <SearchBar />
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  "font-medium transition-colors " +
                  (l.highlight
                    ? "text-sky-600 hover:text-sky-700"
                    : "text-gray-700 hover:text-gray-900")
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:from-sky-600 hover:to-sky-700"
          >
            Daftar <span className="ml-0.5">›</span>
          </Link>
        </div>

        {/* Right (mobile) */}
        <div className="flex items-center gap-2 lg:hidden">
          <MobileSearch />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-zinc-100"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-4">
          <div className="md:hidden py-2">
            <SearchBar />
          </div>

          <ul className="mt-2 space-y-1 rounded-2xl border border-zinc-200 bg-white/90 p-2 shadow-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  className={
                    "block rounded-lg px-3 py-2 text-sm font-medium " +
                    (l.highlight
                      ? "text-sky-600 hover:bg-sky-50"
                      : "text-gray-700 hover:bg-zinc-50")
                  }
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/signup"
                onClick={close}
                className="block rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-3 py-2 text-center text-sm font-semibold text-white hover:from-sky-600 hover:to-sky-700"
              >
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
