"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Badge from "@/components/Badge";
import Carousel from "@/components/Carousel";
import Button from "@/components/Button";
import { getUmkmById } from "@/utils/umkm";
import { useMap } from "@/hooks/useMap";
import { getRatingParts } from "@/utils/rating";

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
    menus,
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

  const { fullStars, hasHalf } = getRatingParts(ratingNumber, totalStars);

  return (
    <div
      className="
        min-h-screen 
        bg-slate-50 text-slate-900 
        dark:bg-gray-950 dark:text-slate-100
      "
    >
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="mb-4">
          <Link
            href="/umkm"
            className="
              inline-flex items-center gap-2 rounded-full
              border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700
              hover:bg-slate-100
              dark:bg-slate-900/70 dark:border-slate-700 dark:text-slate-100
              dark:hover:bg-slate-800
            "
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke daftar UMKM</span>
          </Link>
        </div>

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
            <div className="flex-1 min-w-[220px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {name}
              </h1>

              <p
                className="
                  mt-2 text-xs sm:text-sm md:text-base 
                  leading-relaxed
                  text-slate-600 dark:text-slate-300 
                  max-w-xl sm:max-w-2xl
                "
              >
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
                {Array.from({ length: totalStars }).map((_, i) => {
                  if (i < fullStars) {
                    return (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
                      </svg>
                    );
                  }

                  if (i === fullStars && hasHalf) {
                    return (
                      <div key={i} className="relative h-5 w-5">
                        <svg
                          className="h-5 w-5 fill-slate-300 dark:fill-slate-600"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
                        </svg>
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ width: "50%" }}
                        >
                          <svg
                            className="h-5 w-5 fill-yellow-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
                          </svg>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-slate-300 dark:fill-slate-600"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z" />
                    </svg>
                  );
                })}

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

            {menus?.length > 0 && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Daftar Menu
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Pilihan menu utama yang sering dipesan pelanggan.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {menus.map((m, idx) => (
                    <div
                      key={idx}
                      className="
            rounded-xl border border-slate-200 bg-slate-50/80
            dark:bg-slate-900/70 dark:border-slate-800
            px-4 py-3 flex flex-col gap-1
          "
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {m.name}
                          </h4>
                          {m.desc && (
                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                              {m.desc}
                            </p>
                          )}
                        </div>

                        {m.price && (
                          <span className="text-sm font-semibold text-sky-600 dark:text-sky-400 whitespace-nowrap">
                            {m.price}
                          </span>
                        )}
                      </div>

                      {m.tags?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {m.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                    rounded-full bg-slate-100 px-2 py-0.5 
                    text-[11px] text-slate-600
                    dark:bg-slate-800 dark:text-slate-300
                  "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="flex gap-2 mt-2">
              <Button title="Nomor Telfon" />
              <Button title="Email" />
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

              <div className="relative w-full flex-row rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
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
