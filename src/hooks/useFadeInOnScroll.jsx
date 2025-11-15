"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useFadeInOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: options.y ?? 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options.y, options.duration]);

  return ref;
}
