"use client";

import UmkmCard from "@/components/UmkmCard";
import { UmkmMapSection } from "@/components/UmkmMapSection";
import UmkmFilterCard from "@/components/UmkmFilterCard";
import { umkmData } from "@/data/umkm";
import { useUmkmFilter } from "@/hooks/useUmkmFilter";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

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

  const headerRef = useFadeInOnScroll({
    y: 30,
    duration: 0.7,
  });

  const gridRef = useFadeInOnScroll({
    y: 30,
    duration: 0.7,
    stagger: 0.08,
    animateChildren: true,
  });

  return (
    <div
      className="min-h-screen pt-20 md:pt-24 
      bg-slate-50 text-slate-900 
      dark:bg-gray-950 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header ref={headerRef} className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-500 ">
            UMKM di Jakarta Selatan
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Jelajahi berbagai UMKM lokal dengan layanan dan produk yang beragam.
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

        <section
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"
        >
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
