import Carousel from "@/components/Carousel";
import UmkmCard from "@/components/UmkmCard";
import { umkmData } from "@/data/umkm";
import slides from "@/data/slides.json";
import ServiceCard from "@/components/ServiceCard";
import { HandCoins, Search, Store } from "lucide-react";

export default function HomePage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="px-4 sm:px-6 lg:px-8">
        <Carousel slides={slides} />
      </section>

      <section className="mt-10">
        <div className="mx-auto w-[95%] max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {umkmData.slice(0, 5).map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="mx-auto w-[95%] max-w-7xl text-center mb-1 mt-25">
          <h1 className="text-xl font-light">
            Apa yang kalian dapatkan disini?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Search className="h-10 w-10" />}
              title="Cari Produk UMKM"
              description="Cari produk sesuai kebutuhan dengan filter kategori, lokasi, dan harga."
            />
            <ServiceCard
              icon={<Store className="h-10 w-10" />}
              title="Etalase UMKM"
              description="Tampilkan produk UMKM kalian ke lebih banyak pembeli potensial."
            />
            <ServiceCard
              icon={<HandCoins className="h-10 w-10" />}
              title="Kolaborasi & Mitra"
              description="Hubungkan UMKM dengan mitra bisnis dan peluang kerja sama baru."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
