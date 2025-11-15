"use client";
import Link from "next/link";

export default function UmkmCard({ item }) {
  return (
    <Link
      href={`/tes/${item.id}`}
      className="group block rounded-2xl border border-slate-800 bg-slate-900/80 shadow-md hover:shadow-xl hover:border-sky-500/40 transition-all overflow-hidden"
    >
      <div className="relative h-36 sm:h-40">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />

        <span className="absolute left-2 top-2 rounded-full bg-slate-900/80 border border-white/10 px-2 py-0.5 text-[10px] text-slate-100">
          {item.category}
        </span>

        <span className="absolute right-2 top-2 rounded-full bg-sky-500/90 px-2 py-0.5 text-[10px] font-medium text-white shadow-sm">
          ⭐ {item.rating}
        </span>
      </div>

      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-50 group-hover:text-sky-400 transition-colors">
          {item.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-300">
          {item.description}
        </p>
        <p className="mt-2 text-[11px] text-slate-400">📍 {item.location}</p>
      </div>
    </Link>
  );
}
