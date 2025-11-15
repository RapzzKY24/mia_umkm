"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { navLinks } from "@/utils/NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function NavbarResponsive({ open, close }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`
        lg:hidden overflow-hidden 
        transition-all duration-500 ease-in-out 
        backdrop-blur-xl
        ${open ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"}
        motion-reduce:transition-none motion-reduce:max-h-[450px]
      `}
    >
      <div className="px-4 sm:px-6 pb-4">
        <div className="md:hidden py-2">
          <SearchBar />
        </div>

        <ul
          className="
            mt-2 space-y-1 rounded-2xl 
            border shadow-xl
            backdrop-blur-2xl
            bg-white/90 border-slate-200
            dark:bg-[#020617]/95 dark:border-slate-700
            
            transition-all duration-300
            motion-reduce:transition-none
          "
        >
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  className={`
                    block rounded-lg px-3 py-2 text-sm font-medium
                    transition-colors duration-300
                    motion-reduce:transition-none
                    ${
                      active
                        ? "bg-slate-100 text-sky-600 dark:bg-slate-800 dark:text-sky-400"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }
                  `}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
