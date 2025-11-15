"use client";

import UmkmCard from "@/components/UmkmCard";
import { UmkmMapSection } from "@/components/UmkmMapSection";
import { umkmData } from "@/data/umkm";
import UmkmFilterCard from "@/components/UmkmFilterCard";
import { useUmkmFilter } from "@/hooks/useUmkmFilter";

export default function UmkmPage() {
  const {
    filteredAndSorted,
    categoryOptions,
    locationOptions,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    sortBy,
    setSortBy,
    resetFilters,
  } = useUmkmFilter(umkmData);

  return (
    <div
      className="min-h-screen pt-20 md:pt-24 
      bg-slate-50 text-slate-900 
      dark:bg-gray-950 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-6 md:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            UMKM
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold">
            Etalase UMKM Jakarta Selatan
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Bantu pelaku UMKM di Jakarta Selatan menjangkau lebih banyak
            pelanggan, menerima pembayaran non-tunai, dan mengelola usahanya
            secara digital dalam satu platform.
          </p>
        </header>

        <div className="hidden md:block mb-8">
          <UmkmMapSection total={umkmData.length} />
        </div>

        <div className="mb-6">
          <UmkmFilterCard
            total={filteredAndSorted.length}
            categoryOptions={categoryOptions}
            locationOptions={locationOptions}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onReset={resetFilters}
          />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {filteredAndSorted.length > 0 ? (
            filteredAndSorted.map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full py-10 flex flex-col items-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Belum ada UMKM yang cocok dengan filter yang dipilih.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
