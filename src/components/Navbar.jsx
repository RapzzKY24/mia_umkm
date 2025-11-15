"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import MobileSearch from "@/components/MobileSearch";
import { navLinks } from "@/utils/NavLinks";
import Button from "./Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavbarResponsive from "./NavbarResponsive";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={
                    "text-sm font-medium transition-colors " +
                    (active
                      ? "text-sky-400"
                      : "text-slate-300 hover:text-slate-100")
                  }
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

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

      <NavbarResponsive open={open} close={close} />
    </nav>
  );
};

export default Navbar;
