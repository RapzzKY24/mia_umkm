"use client";

import { Search, X } from "lucide-react";
import { useUmkmSearch } from "@/hooks/useUmkmSearch";

export default function SearchBar() {
  const { q, setQ, suggestions, inputRef, go, goToUmkm } = useUmkmSearch();

  return (
    <div className="group relative w-full">
      {/* Icon search */}
      <Search
        className="
          pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2
          text-zinc-400 dark:text-slate-300
        "
      />

      {/* Input */}
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
        placeholder="Cari UMKM, kategori, lokasi…"
        className="
          w-full rounded-full px-9 py-2 text-sm outline-none
          border border-zinc-200 bg-white text-zinc-800 placeholder:text-zinc-400
          focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50

          dark:bg-slate-800 dark:text-slate-100 
          dark:border-slate-500 dark:placeholder:text-slate-400
          dark:focus:border-sky-400 dark:focus:ring-sky-400/60
        "
      />

      {/* Tombol clear (X) */}
      {q && (
        <button
          type="button"
          onClick={() => setQ("")}
          className="
            absolute right-20 top-1/2 -translate-y-1/2
            text-xs text-zinc-400 hover:text-zinc-600
            dark:text-slate-400 dark:hover:text-slate-200
          "
        >
          <X height={15} width={15} />
        </button>
      )}

      {/* Tombol Cari */}
      <button
        type="button"
        onClick={go}
        className="
          absolute right-1 top-1/2 -translate-y-1/2
          rounded-full px-3 py-1.5 text-xs font-medium
          bg-sky-500 text-white hover:bg-sky-600
          dark:bg-sky-500 dark:hover:bg-sky-600
        "
      >
        Cari
      </button>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <div
          className="
            absolute z-40 mt-1 w-full rounded-2xl border shadow-lg
            border-slate-200 bg-white
            dark:border-slate-700 dark:bg-slate-900
          "
        >
          <ul className="max-h-64 overflow-y-auto py-1 text-sm">
            {suggestions.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goToUmkm(item.id)}
                  className="
                    flex w-full flex-col items-start px-3 py-2 text-left
                    hover:bg-slate-100 dark:hover:bg-slate-800
                  "
                >
                  <span className="font-medium text-slate-900 dark:text-slate-50">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.category} • {item.location}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
