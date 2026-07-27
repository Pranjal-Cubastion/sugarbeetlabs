"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook. Attach `ref` to an element and toggle a `visible`
 * class when it scrolls into view. Fires once.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect users who prefer reduced motion — reveal immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    // Use a 0 threshold with a bottom rootMargin so the reveal reliably fires
    // on tall sections and short (mobile) viewports, where a fractional
    // threshold may never be reached. `threshold` is kept as a small hint.
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: Math.min(threshold, 0.01), rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}
