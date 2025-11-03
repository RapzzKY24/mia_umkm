import Link from "next/link";
import React from "react";
import { ChevronDown } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import MobileSearch from "@/components/MobileSearch";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between gap-4 px-8 py-4 backdrop-blur-sm bg-white/70">
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
          <span className="text-xl font-bold text-white">⚡</span>
        </div>
        <span className="text-xl font-bold text-gray-900">UMKM</span>
      </div>

      {/* Search (desktop) */}
      <div className="hidden md:block w-full max-w-lg mx-4">
        <SearchBar />
      </div>

      {/* Nav Items */}
      <ul className="hidden lg:flex items-center gap-8">
        <li>
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-gray-900"
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            href="/use-cases"
            className="font-medium text-pink-600 hover:text-pink-700"
          >
            Berita
          </Link>
        </li>
        <li>
          <Link
            href="/resources"
            className="font-medium text-gray-700 hover:text-gray-900"
          >
            UMKM
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className="font-medium text-gray-700 hover:text-gray-900"
          >
            Mitra
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className="font-medium text-gray-700 hover:text-gray-900"
          >
            Kontak Kami
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <MobileSearch />
        <Link
          href="/signup"
          className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:from-pink-600 hover:to-pink-700"
        >
          Daftar <span className="ml-0.5">›</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
