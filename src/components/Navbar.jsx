"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import MobileSearch from "@/components/MobileSearch";
import { navLinks } from "@/utils/NavLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarResponsive from "./NavbarResponsive";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="
        fixed inset-x-0 top-0 z-50 
        border-b backdrop-blur-xl
        bg-white/80 border-slate-200
        dark:bg-[#020617]/90 dark:border-white/5
      "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          onClick={close}
        >
          <div
            className="
              flex h-8 w-8 items-center justify-center rounded-lg
              bg-slate-100 dark:bg-slate-900
            "
          >
            <Image
              src="/vscode.png"
              width={32}
              height={32}
              alt="logo south venture"
              className="h-6 w-6 object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
            South venture
          </span>
        </Link>

        <div className="hidden md:block w-full max-w-lg mx-4">
          <SearchBar />
        </div>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={
                    "text-sm font-medium transition-colors " +
                    (active
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100")
                  }
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <ThemeToggle />
        </ul>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="
              inline-flex items-center justify-center rounded-md p-2 
              hover:bg-slate-100 dark:hover:bg-slate-800 
              transition-colors
            "
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6 text-slate-900 dark:text-slate-100" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900 dark:text-slate-100" />
            )}
          </button>
        </div>
      </div>

      <NavbarResponsive open={open} close={close} />
    </nav>
  );
};

export default Navbar;
