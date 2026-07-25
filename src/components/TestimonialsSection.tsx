"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TestimonialsSection.module.css";

const TESTIMONIALS = [
  {
    emoji: "🌿", stars: 5,
    text: "I never thought I'd find someone who gets excited about farmers markets as much as I do. Sugarbeet matched us on shared values, not just photos. We've been together 14 months now! 💚",
    name: "Priya & Sam", location: "San Francisco, CA", tag: "Matched 14 months ago",
  },
  {
    emoji: "🌸", stars: 5,
    text: "As a long-time vegan, dating apps always felt off. Sugarbeet changed that completely. Every profile here actually cares about the same things I do. Found my person in 3 weeks.",
    name: "Jordan M.", location: "London, UK", tag: "Member since 2023",
  },
  {
    emoji: "🍃", stars: 5,
    text: "Our first date was a vegan food festival. Our second was volunteering at an animal sanctuary. Sugarbeet brought us together, and our shared lifestyle keeps us growing closer every day.",
    name: "Mei & Alex", location: "Toronto, Canada", tag: "Matched 8 months ago",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => setActive(p => (p + 1) % TESTIMONIALS.length), 4500);
  };

  useEffect(() => { startTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, []);

  const goTo = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.2 }
    );
    el.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.testimonials} id="stories" ref={ref} aria-label="Success stories">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.eyebrow}>Love Stories</span>
          <h2 className={styles.heading}>Real couples, <em>real roots</em></h2>
          <p className={styles.sub}>Thousands of plant-based people found their person on Sugarbeet.</p>
        </div>

        <div className={`${styles.carousel} reveal reveal-delay-2`} role="region" aria-label="Testimonials" aria-live="polite">
          {TESTIMONIALS.map((t, i) => (
            <article key={t.name} className={`${styles.card} ${i === active ? styles.cardActive : ""}`} aria-hidden={i !== active} aria-label={`From ${t.name}`}>
              <div className={styles.quote} aria-hidden="true">&ldquo;</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.footer}>
                <div className={styles.avatar} aria-hidden="true"><span>{t.emoji}</span></div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.location}>{t.location}</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.stars} aria-label={`${t.stars} stars`}>{"★".repeat(t.stars)}</div>
                  <span className={`tag tag-green ${styles.tag}`}>{t.tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.dots} role="tablist" aria-label="Testimonial nav">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`} onClick={() => goTo(i)} role="tab" aria-selected={i === active} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>

        <div className={`${styles.sideCards} reveal reveal-delay-3`} aria-hidden="true">
          <div className={styles.sideCard}><span>🎯</span><div><strong>94%</strong><span>match accuracy</span></div></div>
          <div className={styles.sideCard}><span>💬</span><div><strong>3 days</strong><span>avg. to first date</span></div></div>
        </div>
      </div>
    </section>
  );
}
