"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import MobileSearch from "@/components/MobileSearch";
import { navLinks } from "@/utils/NavLinks";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Left: Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-1 shrink-0"
          onClick={close}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg">
            <Image
              src="/vscode.png"
              width={700}
              height={700}
              alt="logo south venture"
              className="h-8 w-8 object-contain"
            />
          </div>
          <span className="text-xl font-semibold text-white">
            South venture
          </span>
        </Link>

        {/* Search (desktop) */}
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
                  "text-sm font-medium transition-colors " +
                  (l.highlight
                    ? "text-sky-500 hover:text-sky-400"
                    : "text-slate-300 hover:text-slate-100")
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/signUp">
            <Button title="Daftar" />
          </Link>
        </div>

        {/* Right (mobile) */}
        <div className="flex items-center gap-2 lg:hidden">
          <MobileSearch />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6 text-slate-100" />
            ) : (
              <Menu className="h-6 w-6 text-slate-100" />
            )}
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

          <ul className="mt-2 space-y-1 rounded-2xl border border-slate-700 bg-[#020617]/95 p-2 shadow-lg">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  className={
                    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors " +
                    (l.highlight
                      ? "text-sky-400 hover:bg-slate-800"
                      : "text-slate-200 hover:bg-slate-800")
                  }
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/signUp"
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
