"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import SearchBar from "./SearchBar";

export default function MobileSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open search"
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-full hover:bg-zinc-100"
      >
        <Search className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm">
          <div className="absolute left-1/2 top-10 w-[92%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Cari</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 hover:bg-zinc-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <SearchBar />
          </div>
        </div>
      )}
    </>
  );
}
