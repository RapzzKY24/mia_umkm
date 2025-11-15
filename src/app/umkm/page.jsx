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
    <div className="w-full bg-gray-950 text-gray-200 min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-4 md:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-50">
            UMKM di Jakarta Selatan
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Jelajahi berbagai UMKM lokal dengan layanan dan produk yang beragam.
          </p>
        </header>

        <div className="hidden md:block">
          <UmkmMapSection total={umkmData.length} />
        </div>

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

        <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredAndSorted.map((item) => (
            <UmkmCard key={item.id} item={item} />
          ))}

          {filteredAndSorted.length === 0 && (
            <p className="text-sm text-slate-400">
              Nggak ada UMKM yang cocok dengan filter sekarang. Coba ubah
              kategori atau lokasi.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
