"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { umkmData } from "@/data/umkm";

const MAX_SUGGESTIONS = 5;

export default function SearchBar() {
  const [q, setQ] = useState("");
  const [suggestions, setSuggestions] = useState([]);
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

  useEffect(() => {
    const term = q.trim().toLowerCase();
    if (!term) {
      setSuggestions([]);
      return;
    }

    const filtered = umkmData
      .filter((item) => {
        const combined =
          `${item.name} ${item.category} ${item.location}`.toLowerCase();
        return combined.includes(term);
      })
      .slice(0, MAX_SUGGESTIONS);

    setSuggestions(filtered);
  }, [q]);

  const go = () => {
    const term = q.trim();
    if (!term) return;
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const goToUmkm = (id) => {
    setQ("");
    setSuggestions([]);
    router.push(`/umkm/${id}`);
  };

  return (
    <div className="group relative w-full">
      {/* input */}
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
        placeholder="Cari UMKM, kategori, lokasi…"
        className="w-full rounded-full border border-zinc-200 bg-white/70 px-9 py-2 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-sky-300 focus:bg-white focus:shadow-sm"
      />

      {/* clear button */}
      {q && (
        <button
          type="button"
          onClick={() => {
            setQ("");
            setSuggestions([]);
            inputRef.current?.focus();
          }}
          className="absolute right-20 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
        >
          <X height="15" width="15" />
        </button>
      )}

      {/* search button */}
      <button
        type="button"
        onClick={go}
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-sky-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-600"
      >
        Cari
      </button>

      {/* suggestions dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-40 mt-2 rounded-2xl border border-zinc-200 bg-white/95 shadow-lg backdrop-blur-sm">
          <ul className="max-h-72 overflow-y-auto py-2 text-sm">
            {suggestions.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goToUmkm(item.id)}
                  className="flex w-full items-start gap-2 px-3 py-2 hover:bg-zinc-100 text-left"
                >
                  <div className="mt-0.5 h-7 w-7 flex-shrink-0 overflow-hidden rounded-md bg-zinc-200">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-zinc-900 line-clamp-1">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-zinc-500 line-clamp-1">
                      {item.category} • {item.location}
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-zinc-200 px-3 py-1.5 text-[11px] text-zinc-500">
            Tekan{" "}
            <span className="font-mono text-[10px] bg-zinc-100 px-1 py-0.5 rounded">
              Enter
            </span>{" "}
            buat lihat semua hasil untuk &quot;{q}&quot;
          </div>
        </div>
      )}
    </div>
  );
}
