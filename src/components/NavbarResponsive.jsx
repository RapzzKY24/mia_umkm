"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { navLinks } from "@/utils/NavLinks";

export default function NavbarResponsive({ open, close }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
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
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  className={
                    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors " +
                    (active
                      ? "bg-slate-800 text-sky-400"
                      : "text-slate-200 hover:bg-slate-800")
                  }
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
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
  );
}
