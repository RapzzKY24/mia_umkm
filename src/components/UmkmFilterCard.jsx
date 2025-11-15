"use client";

import React from "react";

export default function UmkmFilterCard({
  total,
  categoryOptions,
  locationOptions,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  sortBy,
  setSortBy,
  onReset,
}) {
  return (
    <div className="mt-6 mb-4 rounded-2xl bg-slate-900/80 border border-slate-800 px-4 py-4 sm:px-6 sm:py-5 shadow-lg flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-medium text-sky-300 uppercase tracking-wide">
          Filter & Urutkan
        </p>
        <p className="text-sm text-slate-100 mt-1">
          Menampilkan{" "}
          <span className="font-semibold text-sky-300">{total}</span> UMKM yang
          sesuai.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:items-center">
        <div className="flex flex-col gap-1 text-left">
          <label className="text-[11px] uppercase tracking-wide text-slate-400">
            Kategori
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-9 rounded-xl bg-slate-900 border border-slate-700 px-3 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
          >
            <option value="all">Semua kategori</option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 text-left">
          <label className="text-[11px] uppercase tracking-wide text-slate-400">
            Lokasi
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="h-9 rounded-xl bg-slate-900 border border-slate-700 px-3 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
          >
            <option value="all">Semua lokasi</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 text-left">
          <label className="text-[11px] uppercase tracking-wide text-slate-400">
            Urutkan
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-9 rounded-xl bg-slate-900 border border-slate-700 px-3 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
          >
            <option value="featured">Rekomendasi</option>
            <option value="rating-desc">Rating tertinggi</option>
            <option value="rating-asc">Rating terendah</option>
            <option value="name-asc">Nama A–Z</option>
          </select>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="mt-1 sm:mt-5 md:mt-6 text-[11px] text-slate-400 hover:text-slate-200 underline-offset-2 hover:underline"
        >
          Reset filter
        </button>
      </div>
    </div>
  );
}
