"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

// Honest, pre-launch value props — no fabricated user/like counts.
const SLIDES = [
  { num: "100%", label: "plant-based",     blob: "/home-heart.svg", cls: "slide-like" },
  { num: "1%",   label: "pledged to good", blob: "/home-user.svg",  cls: "slide-user" },
  { num: "18+",  label: "verified & safe", blob: "/home-bell.svg",  cls: "slide-message" },
];

const AUTOPLAY_MS = 3500;

export default function StatsSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const stopAuto = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAuto = () => {
    stopAuto();
    // Respect users who prefer reduced motion — no auto-rotation.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    timerRef.current = setInterval(
      () => setActive((p) => (p + 1) % SLIDES.length),
      AUTOPLAY_MS
    );
  };

  const go = (i: number) => {
    setActive(i);
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.01, rootMargin: "0px 0px -10% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section2} id="about" ref={ref} aria-label="Why Sugarbeet">
      <div className={styles.wrapper}>
        {/* Left block */}
        <div className={`${styles.leftBlock} ${visible ? styles.visible : ""}`}>
          <h2 className={styles.mainTitle}>
            The Plant-Powered<br />
            <b>Connection App</b>
          </h2>
          <p>
            <span>Find dates, friends, or even community collaborators who </span>
            <span>share your plant-based lifestyle and values. Sugarbeet isn&rsquo;t just another generic dating app — it&rsquo;s a community of conscious eaters and ethical partners.</span>
          </p>
          <p>
            <span>Here, your </span>
            <span>lifestyle</span>
            <span> matters.</span>
          </p>
        </div>

        {/* Right block — vertical stats swiper */}
        <div className={styles.rightBlock}>
          <div
            className={styles.swiperContainer}
            aria-label="What Sugarbeet stands for"
            aria-live="polite"
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
            onFocus={stopAuto}
            onBlur={startAuto}
          >
            <div className={styles.swiperWrapper}>
              {SLIDES.map((s, i) => (
                <button
                  type="button"
                  key={s.num}
                  className={`${styles.swiperSlide} ${styles[s.cls as keyof typeof styles]} ${i === active ? styles.swiperSlideActive : ""}`}
                  onClick={() => go(i)}
                  aria-label={`${s.num} ${s.label}`}
                  aria-current={i === active}
                >
                  {/* Decorative blob — tracks the active number */}
                  <span
                    className={`${styles.blob} ${visible && active === i ? styles.blobActive : ""}`}
                    style={{ backgroundImage: `url(${s.blob})` }}
                    aria-hidden="true"
                  />
                  <span className={styles.title}>
                    {s.num}
                    <b>{s.label}</b>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
