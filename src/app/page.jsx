import Carousel from "@/components/Carousel";
import UmkmCard from "@/components/UmkmCard";
import { umkmData } from "@/data/umkm";
import slides from "@/data/slides.json";
import ServiceCard from "@/components/ServiceCard";
import { HandCoins, Search, Store } from "lucide-react";
import Link from "next/link";
import { getTopRatedUmkm } from "@/utils/umkm";

export default function HomePage() {
  const featured = getTopRatedUmkm(umkmData, 5);

  return (
    <main className="pt-20 md:pt-24">
      {/* mobile hero */}
      <section className="px-4 sm:px-6 lg:px-8 md:hidden">
        <div className="mx-auto w-[95%] max-w-7xl">
          <div className="rounded-2xl bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-950 border border-sky-500/20 px-4 py-5 shadow-lg">
            <p className="text-xs font-medium uppercase tracking-wide text-sky-300">
              UMKM Jakarta Selatan
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-50">
              Temukan UMKM lokal di sekitar kamu
            </h1>
            <p className="mt-2 text-xs text-slate-200">
              Jelajahi kuliner, jasa, dan usaha rumahan dari pelaku usaha
              Jakarta Selatan dalam satu tempat.
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                href="/tes"
                className="flex-1 rounded-xl bg-sky-500 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-sky-600"
              >
                Lihat semua UMKM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 hidden md:block">
        <Carousel slides={slides} />
      </section>

      {/* Top 5 */}
      <section className="mt-8 md:mt-12 mb-8 md:mb-12">
        <div className="mx-auto w-[95%] max-w-7xl text-center">
          <h2 className="text-xl mt-4 md:text-2xl font-light text-slate-50">
            Top 5 UMKM dengan Rating Tertinggi
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Dicari berdasarkan ulasan pelanggan & kualitas layanan terbaik.
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {featured.map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="mt-10 md:mt-14 mb-12">
        <div className="mx-auto w-[95%] max-w-7xl text-center">
          <h2 className="text-xl font-light text-slate-50">
            Apa yang kalian dapatkan disini?
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Platform untuk bantu UMKM ditemukan, dikelola, dan diajak
            kolaborasi.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
