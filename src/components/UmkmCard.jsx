"use client";
import Link from "next/link";

export default function UmkmCard({ item }) {
  return (

    <Link
      href={`/umkm/${item.id}`}
      className="group block rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <div className="relative h-36 sm:h-40">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white">
          {item.category}
        </span>
        <span className="absolute right-2 top-2 rounded-full bg-sky-500/90 px-2 py-0.5 text-[10px] font-medium text-white">
          {item.rating}
        </span>
      </div>

      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-zinc-900 group-hover:text-sky-600">
          {item.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-zinc-600">
          {item.description}
        </p>
        <p className="mt-2 text-[11px] text-zinc-500">{item.location}</p>
      </div>
    </Link>
  );
}