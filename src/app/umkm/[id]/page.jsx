"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import { getUmkmById } from "@/utils/umkm";
import Badge from "@/components/Badge";
import Carousel from "@/components/Carousel";
import { useMap } from "@/hooks/useMap";
import Button from "@/components/Button";

export default function UmkmDetailPage(props) {
  const { id } = use(props.params);

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
    testimonials,
    images,
  } = item;

  const { showMap, openMap, embedSrc, externalMapsUrl } = useMap({
    coordinates,
    name,
    location,
    mapsUrl,
  });

  const slides =
    images && images.length > 0
      ? images.map((src) => ({ img: src, title: name }))
      : [{ img: imageUrl, title: name }];

  return (
    <div
      className="
        min-h-screen 
        bg-slate-50 text-slate-900 
        dark:bg-gray-950 dark:text-slate-100
      "
    >
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div
          className="
            relative overflow-hidden rounded-2xl 
            shadow-xl border 
            bg-white/90 border-slate-200 
            dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-900 dark:to-black 
            dark:border-white/10
            p-6 sm:p-8
          "
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {name}
              </h1>

              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                {description}
              </p>
            </div>

            <Badge color="sky" variant="soft" className="sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-current opacity-80" />
              {category}
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <article
            className="
              lg:col-span-3 rounded-2xl shadow-lg border
              bg-white/90 border-slate-200
              dark:bg-slate-900/60 dark:border-slate-800 dark:ring-1 dark:ring-white/5
              p-6 md:p-8
            "
          >
            <div className="flex flex-wrap items-center text-sm mb-5 gap-x-6 gap-y-2 text-slate-700 dark:text-slate-400">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalStars }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < ratingNumber
                        ? "fill-yellow-400"
                        : "fill-slate-300 dark:fill-slate-600"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
                  </svg>
                ))}
                <span className="ml-1 font-medium text-slate-800 dark:text-slate-300">
                  {rating}
                </span>
              </div>

              <div className="text-slate-600 dark:text-slate-400">
                📍 {location}
              </div>
            </div>

            <div className="mb-6">
              <Carousel
                slides={slides}
                interval={5000}
                className="border-0 bg-transparent rounded-xl"
                itemClassName="relative min-w-full aspect-[16/9]"
              />
            </div>
            <div className="flex gap-2 mt-2">
              <Button title={"Nomor Telfon"} />
              <Button title={"Email"} />
            </div>
          </article>
          <aside className="lg:col-span-1 grid grid-cols-1 grid-rows-2 gap-6">
            <section
              className="
                rounded-2xl shadow-lg border
                bg-white/90 border-slate-200
                dark:bg-slate-900/60 dark:border-slate-800 dark:ring-1 dark:ring-white/5
                p-6 flex flex-col
              "
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-blue-400 mb-4">
                Lokasi UMKM
              </h3>

              <div className="relative w-full flex-grow rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                {showMap ? (
                  <iframe
                    src={embedSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={openMap}
                    className="flex h-full w-full items-center justify-center text-xs sm:text-sm text-slate-400"
                  >
                    Google Maps Preview
                  </button>
                )}
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-400 mt-4 flex items-center gap-3 flex-wrap">
                <span>
                  {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
                </span>

                {externalMapsUrl && (
                  <a
                    href={externalMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 dark:text-blue-400 hover:underline text-xs"
                  >
                    Buka di Google Maps
                  </a>
                )}
              </p>
            </section>

            <section
              className="
                rounded-2xl shadow-lg border
                bg-white/90 border-slate-200
                dark:bg-slate-900/60 dark:border-slate-800 dark:ring-1 dark:ring-white/5
                p-6 flex flex-col
              "
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-blue-400 mb-4">
                Testimoni
              </h3>

              <div className="space-y-4">
                {testimonials?.map((t, idx) => (
                  <blockquote
                    key={idx}
                    className="italic text-sm text-slate-700 dark:text-slate-300"
                  >
                    “{t.quote.replace(t.highlight, "")}
                    <span
                      className={`font-semibold not-italic ${
                        t.highlightColor === "green"
                          ? "text-green-500 dark:text-green-300"
                          : "text-blue-600 dark:text-blue-300"
                      }`}
                    >
                      {t.highlight}
                    </span>
                    ”
                    <footer className="block text-xs text-slate-500 dark:text-slate-500 mt-1">
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
