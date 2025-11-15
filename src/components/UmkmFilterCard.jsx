"use client";

import { FilterSelect } from "@/utils/FilterSelect";
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
    <div
      className="
        mt-6 mb-6 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 shadow-lg flex flex-col gap-5 md:flex-row md:items-center md:justify-between
        bg-white/90 border border-slate-200
        dark:bg-slate-900/80 dark:border-slate-800
        transition-colors
      "
    >
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wide 
          text-sky-700 dark:text-sky-300"
        >
          Filter & Urutkan
        </p>

        <p className="text-sm mt-1 text-slate-600 dark:text-slate-200">
          Menampilkan{" "}
          <span className="font-semibold text-sky-700 dark:text-sky-300">
            {total}
          </span>{" "}
          UMKM yang sesuai
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:items-end">
        {/* Category */}
        <FilterSelect
          label="Kategori"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          options={categoryOptions}
          defaultLabel="Semua kategori"
        />

        {/* Location */}
        <FilterSelect
          label="Lokasi"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          options={locationOptions}
          defaultLabel="Semua lokasi"
        />

        {/* Sorting */}
        <FilterSelect
          label="Urutkan"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          options={[
            { value: "rating-desc", label: "Rating tertinggi" },
            { value: "rating-asc", label: "Rating terendah" },
            { value: "name-asc", label: "Nama A–Z" },
          ]}
          defaultLabel="Rekomendasi"
          defaultValue="featured"
        />

        {/* Reset */}
        <button
          onClick={onReset}
          className="
            text-xs text-slate-500 dark:text-slate-400 
            hover:text-sky-600 dark:hover:text-sky-300 
            underline-offset-2 hover:underline mt-1
            transition
          "
        >
          Reset filter
        </button>
      </div>
    </div>
  );
}
