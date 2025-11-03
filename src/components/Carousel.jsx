"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({
  slides = [],
  interval = 4000,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoverRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const go = (i) => setIndex(i);

  useEffect(() => {
    if (!slides.length) return;
    timerRef.current = setInterval(() => {
      if (!hoverRef.current) next();
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 ${className}`}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="relative min-w-full h-56 sm:h-64 md:h-80 lg:h-96"
          >
            <img
              src={s.img}
              alt={s.title || `slide-${i}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 sm:p-8 text-white">
              {s.kicker && (
                <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
                  {s.kicker}
                </span>
              )}
              {s.title && (
                <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-tight">
                  {s.title}
                </h3>
              )}
              {s.desc && (
                <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/90">
                  {s.desc}
                </p>
              )}
              {s.cta && s.href && (
                <a
                  href={s.href}
                  className="mt-4 inline-flex w-fit items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600"
                >
                  {s.cta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        aria-label="Prev"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`pointer-events-auto h-2.5 w-2.5 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
