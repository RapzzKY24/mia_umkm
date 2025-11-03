"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = () => {
    const term = q.trim();
    if (!term) return;
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="group relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
        placeholder="Cari UMKM, kategori, lokasi…"
        className="w-full rounded-full border border-zinc-200 bg-white/70 px-9 py-2 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-sky-300 focus:bg-white focus:shadow-sm"
      />
      {q && (
        <button
          type="button"
          onClick={() => setQ("")}
          className="absolute right-20 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
        >
          clear
        </button>
      )}
      <button
        type="button"
        onClick={go}
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-sky-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-600"
      >
        Cari
      </button>
    </div>
  );
}
