"use client";
import React from "react";
import { notFound } from "next/navigation";
import { getUmkmById } from "@/utils/umkm";
import Image from "next/image";

export default function UmkmDetailPage({ params }) {
  const { id } = params;

  const item = getUmkmById(id);
  if (!item) return notFound();

  const {
    name,
    category,
    rating,
    ratingNumber,
    totalStars,
    description,
    location,
    imageUrl,
    coordinates,
    mapsUrl,
  } = item;

  return (
    <div className="w-full bg-gray-950 text-gray-200 min-h-screen">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mt-12">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 sm:p-8 shadow-xl ring-1 ring-white/5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                {name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
                {description}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 bg-blue-600/90 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow">
              <span className="w-2 h-2 rounded-full bg-white/90" /> {category}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <article className="lg:col-span-3 bg-slate-900/60 rounded-2xl shadow-lg ring-1 ring-white/5 p-6 md:p-8">
            <div className="flex flex-wrap items-center text-slate-400 text-sm mb-5 gap-x-6 gap-y-2">
              <div
                className="flex items-center gap-2"
                aria-label={`Rating ${ratingNumber} dari 5`}
              >
                {Array.from({ length: totalStars }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < ratingNumber ? "fill-yellow-400" : "fill-slate-600"
                    }`}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
                  </svg>
                ))}
                <span className="ml-2 text-slate-300 font-medium">
                  {rating}
                </span>
              </div>
              <div>📍 {location}</div>
            </div>

            <div className="mb-6">
              <Image
                className="w-full h-56 sm:h-72 md:h-80 lg:h-96 rounded-xl shadow-md object-cover"
                src={imageUrl}
                alt={`Tampilan UMKM ${name}`}
                loading="lazy"
                width={600}
                height={600}
              />
            </div>
          </article>

          <aside className="lg:col-span-1 grid grid-cols-1 grid-rows-2 gap-6">
            <section className="bg-slate-900/60 rounded-2xl shadow-lg ring-1 ring-white/5 p-6 flex flex-col">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                Lokasi UMKM
              </h3>
              <div className="w-full flex-grow bg-slate-800/70 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://placehold.co/600x400/1e293b/a0aec0?text=Google+Maps+Preview"
                  alt="Pratinjau lokasi di peta"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-slate-400 text-sm mt-4 flex flex-wrap items-center gap-2">
                <span>
                  {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
                </span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Lihat di Maps
                </a>
              </p>
            </section>
            <section className="bg-slate-900/60 rounded-2xl shadow-lg ring-1 ring-white/5 p-6 flex flex-col">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                Testimoni
              </h3>
              <div className="flex-grow space-y-4">
                {item.testimonials?.map((t, idx) => (
                  <blockquote
                    key={idx}
                    className="text-slate-300 italic text-sm"
                  >
                    “{t.quote.replace(t.highlight, "")}
                    <span
                      className={`font-semibold not-italic ${
                        t.highlightColor === "green"
                          ? "text-green-300"
                          : "text-blue-300"
                      }`}
                    >
                      {t.highlight}
                    </span>
                    ”
                    <footer className="block text-xs text-slate-500 mt-1">
                      — {t.author}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
