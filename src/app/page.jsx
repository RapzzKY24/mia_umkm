import Carousel from "@/components/Carousel";
import UmkmCard from "@/components/UmkmCard";
import { umkmData } from "@/data/umkm";
import slides from "@/data/slides.json";
import ServiceCard from "@/components/ServiceCard";
import { HandCoins, Search, Store } from "lucide-react";
import Link from "next/link";
import { getTopRatedUmkm } from "@/utils/umkm";
import Button from "@/components/Button";

export default function HomePage() {
  const featured = getTopRatedUmkm(umkmData, 5);

  return (
    <main className="min-h-screen pt-20 md:pt-24 bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-slate-100">
      <section className="px-4 sm:px-6 lg:px-8 md:hidden">
        <div className="mx-auto w-[95%] max-w-7xl">
          <div
            className="
        rounded-2xl px-4 py-5 shadow-lg border
        bg-white/90 border-slate-200
        dark:bg-slate-900/80 dark:border-slate-700
        backdrop-blur-lg
      "
          >
            <p
              className="text-xs font-medium uppercase tracking-wide 
        text-sky-600 dark:text-sky-300"
            >
              UMKM Jakarta Selatan
            </p>

            <h1
              className="mt-1 text-xl font-semibold 
        text-slate-900 dark:text-slate-50"
            >
              Temukan UMKM lokal di sekitar kamu
            </h1>

            <p
              className="mt-2 text-xs 
        text-slate-600 dark:text-slate-300"
            >
              Jelajahi kuliner, jasa, dan usaha rumahan dari pelaku usaha
              Jakarta Selatan dalam satu tempat.
            </p>

            <div className="mt-4 flex gap-2">
              <Link
                href="/umkm"
                className="
    flex-1 rounded-xl text-center text-xs font-semibold px-3 py-2
    text-black
  "
              >
                <Button title={"Liat UMKM"} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="mx-auto w-[95%] max-w-7xl">
          <Carousel slides={slides} />
        </div>
      </section>

      <section className="mt-8 md:mt-10">
        <div className="mx-auto w-[95%] max-w-7xl text-center">
          <h2 className="mt-2 text-xl md:text-2xl font-light text-slate-900 dark:text-slate-50">
            Top 5 UMKM dengan Rating Tertinggi
          </h2>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Dicari berdasarkan ulasan pelanggan & kualitas layanan terbaik.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {featured.map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-14 mb-10 md:mb-16">
        <div className="mx-auto w-[95%] max-w-7xl text-center">
          <h2 className="text-xl font-light text-slate-900 dark:text-slate-50">
            Apa yang kalian dapatkan disini?
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
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
