"use client";

import { useRef } from "react";

import Carousel from "@/components/Carousel";
import UmkmCard from "@/components/UmkmCard";
import { umkmData } from "@/data/umkm";
import slides from "@/data/slides.json";
import ServiceCard from "@/components/ServiceCard";
import {
  Lightbulb,
  Handshake,
  LayoutList,
  Compass,
  LayoutGrid,
  Users,
  Search,
} from "lucide-react";
import Link from "next/link";
import { getTopRatedUmkm } from "@/utils/umkm";
import Button from "@/components/Button";
import { MissionCard } from "@/components/MissionCard";
import { useHomePageAnimations } from "@/hooks/useHomePageAnimations";

export default function HomePage() {
  const featured = getTopRatedUmkm(umkmData, 5);
  const rootRef = useRef(null);

  useHomePageAnimations(rootRef);

  return (
    <main
      ref={rootRef}
      className="min-h-screen pt-20 md:pt-24 bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-slate-100"
    >
      {/* Hero mobile */}
      <section className="px-4 sm:px-6 lg:px-8 md:hidden hero-section sv-section">
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
                className="flex-1 rounded-xl text-center text-xs font-semibold px-3 py-2"
              >
                <Button title={"Liat UMKM"} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero desktop (carousel) */}
      <section className="px-4 sm:px-6 lg:px-8 hidden md:block hero-section sv-section">
        <div className="mx-auto w-[95%] max-w-7xl">
          <Carousel slides={slides} />
        </div>
      </section>

      {/* Top 5 UMKM */}
      <section className="mt-12 md:mt-20 sv-section" id="top-umkm">
        <div className="mx-auto w-[95%] max-w-7xl text-center">
          <h2 className="mt-2 text-2xl font-bold md:text-2xl  text-slate-900 dark:text-slate-50">
            <span className="text-sky-500">Top 5</span> UMKM dengan Rating
            Tertinggi
          </h2>
          <p className="mt-2 text-xs font-light text-slate-500 dark:text-slate-400">
            Dicari berdasarkan ulasan pelanggan & kualitas layanan terbaik.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 top-5-grid">
            {featured.map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-12 md:h-20" />

      {/* Tentang SV, visi dan misi */}
      <section
        id="tentang-kami"
        className="mx-auto w-[95%] max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 about-section sv-section"
      >
        <div className="text-center mb-10 md:mb-16 about-section-title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            South Venture
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Tentang Kami
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            South Venture adalah platform yang didedikasikan untuk mendukung
            UMKM di Jakarta Selatan. Kami percaya bahwa setiap usaha kecil
            memiliki potensi besar untuk berkembang dan berkontribusi pada
            ekonomi lokal.
          </p>
        </div>

        {/* Visi */}
        <div className="bg-white/90 border border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 mb-10 md:mb-16 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] vision-card">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300 transition-transform duration-300 hover:scale-110">
              <Lightbulb className="h-10 w-10" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50">
                Visi Kami
              </h3>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-3xl">
                Menjadi ruang digital yang membantu UMKM kecil berkembang,
                dikenal, dan mudah ditemukan oleh masyarakat luas.
              </p>
            </div>
          </div>
        </div>

        {/* Misi */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">
            Misi Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mission-grid">
            <MissionCard
              icon={<Search className="h-8 w-8" />}
              title="Akses Cepat & Akurat"
              description="Menyediakan akses pencarian UMKM yang cepat, akurat, dan mudah dijangkau oleh semua pengguna."
            />
            <MissionCard
              icon={<LayoutList className="h-8 w-8" />}
              title="Identitas Digital Profesional"
              description="Membantu UMKM membangun identitas digital melalui etalase bisnis yang informatif dan profesional."
            />
            <MissionCard
              icon={<Handshake className="h-8 w-8" />}
              title="Dukungan & Kolaborasi"
              description="Mendukung perkembangan UMKM dengan menghadirkan sistem rating, promosi, dan peluang kolaborasi yang memperluas jangkauan mereka."
            />
          </div>
        </div>
      </section>

      <div className="h-6 md:h-10" />

      {/* Services */}
      <section className="mb-10 md:mb-16 sv-section" id="service">
        <div className="mx-auto w-[95%] max-w-7xl text-center">
          <div className="service-title">
            <h2 className="text-xl md:text-2xl font-light text-slate-900 dark:text-slate-50">
              Apa yang kalian dapatkan disini?
            </h2>
            <p className="mt-1 text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Platform untuk bantu UMKM ditemukan, dikelola, dan diajak
              kolaborasi.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 services-grid">
            <ServiceCard
              icon={<Compass className="h-8 w-8" />}
              title="Cari Produk UMKM"
              description="Cari produk sesuai kebutuhan dengan filter kategori, lokasi, dan harga."
            />
            <ServiceCard
              icon={<LayoutGrid className="h-8 w-8" />}
              title="Etalase UMKM"
              description="Tampilkan produk UMKM kalian ke lebih banyak pembeli potensial."
            />
            <ServiceCard
              icon={<Users className="h-8 w-8" />}
              title="Kolaborasi & Mitra"
              description="Hubungkan UMKM dengan mitra bisnis dan peluang kerja sama baru."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
