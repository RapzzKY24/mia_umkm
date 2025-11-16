"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

export default function UmkmCard({ item }) {
  return (
    <Link
      href={`/umkm/${item.id}`}
      className="
        group block overflow-hidden rounded-2xl border shadow-md transition-all duration-300
        bg-white/90 border-slate-200
        hover:shadow-lg hover:border-sky-300/70
        dark:bg-slate-900/80 dark:border-slate-800
        dark:hover:shadow-xl dark:hover:border-sky-500/40
        transform hover:-translate-y-1
      "
    >
      <div className="relative h-36 sm:h-40">
        <Image
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover"
          fill
        />

        <div
          className="
            pointer-events-none absolute inset-0 
            bg-gradient-to-t from-black/70 via-transparent
            dark:from-slate-950/80
          "
        />

        <Badge variant="solid" color="slate" className="absolute left-2 top-2">
          {item.category}
        </Badge>

        <span
          className="
            absolute right-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-medium shadow-sm
            bg-sky-500/90 text-white
          "
        >
          ⭐ {item.rating}
        </span>
      </div>

      <div className="p-3">
        <h3
          className="
            line-clamp-1 text-sm font-semibold transition-colors
            text-slate-900 group-hover:text-sky-600
            dark:text-slate-50 dark:group-hover:text-sky-400
          "
        >
          {item.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-600 dark:text-slate-300">
          {item.description}
        </p>
        <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
          📍 {item.location}
        </p>
      </div>
    </Link>
  );
}
