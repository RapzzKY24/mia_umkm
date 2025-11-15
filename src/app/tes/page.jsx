import UmkmCard from "@/components/UmkmCard";
import { UmkmMapSection } from "@/components/UmkmMapSection";
import { umkmData } from "@/data/umkm";

export default function UmkmPage() {
  return (
    <div className="w-full bg-gray-950 text-gray-200 min-h-screen mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-50">
            UMKM di Jakarta Selatan
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Jelajahi berbagai UMKM lokal dengan layanan dan produk yang beragam.
          </p>
        </header>
        <div className="hidden md:block">
          <UmkmMapSection />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {umkmData.map((item) => (
            <UmkmCard key={item.id} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
}
