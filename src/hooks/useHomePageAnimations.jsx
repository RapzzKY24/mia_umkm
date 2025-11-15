"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useHomePageAnimations(rootRef) {
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".sv-section");

      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}
