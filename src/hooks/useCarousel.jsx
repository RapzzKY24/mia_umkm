"use client";

import { useState, useEffect, useRef } from "react";

export function useCarousel(slides = [], interval = 4000) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoverRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const go = (i) => setIndex(i);

  // Auto slide
  useEffect(() => {
    if (!slides.length) return;

    timerRef.current = setInterval(() => {
      if (!hoverRef.current) next();
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [slides.length, interval]);

  return {
    index,
    next,
    prev,
    go,
    hoverRef,
  };
}
