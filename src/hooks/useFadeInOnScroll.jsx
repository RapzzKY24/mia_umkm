"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useFadeInOnScroll(options = {}) {
  const ref = useRef(null);

  const {
    y = 24,
    duration = 0.6,
    stagger = 0,
    childSelector,
    animateChildren = false,
    once = false,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      let targets = ref.current;

      if (animateChildren) {
        targets = ref.current.children;
      } else if (childSelector) {
        const q = gsap.utils.selector(ref);
        targets = q(childSelector);
      }

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: once
              ? "play none none none"
              : "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, duration, stagger, childSelector, animateChildren, once]);

  return ref;
}
