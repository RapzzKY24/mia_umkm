// hooks/useUmkmSearch.js
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { umkmData } from "@/data/umkm";

const MAX_SUGGESTIONS = 5;

export function useUmkmSearch() {
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

  return {
    q,
    setQ,
    suggestions,
    inputRef,
    go,
    goToUmkm,
  };
}
