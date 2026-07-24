"use client";
import Image from "next/image";
import { useReveal } from "./useReveal";
import styles from "./SwimSafe.module.css";

const ITEMS = [
  { img: "/safe-1.svg", t: "Zero tolerance for nudity or hate" },
  { img: "/safe-2.svg", t: "Strictly 18+, no exceptions" },
  { img: "/safe-3.svg", t: "Suspicious accounts banned automatically" },
  { img: "/safe-4.svg", t: "Every report reviewed within 24 hours" },
];

export default function SwimSafe() {
  const { ref, visible } = useReveal<HTMLElement>(0.12);

  return (
    <section
      ref={ref}
      id="safety"
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-label="Staying safe on Sugarbeet"
    >
      <div className={styles.topTitle}>
        <span className={styles.mainTitle}>
          A safe
          <br />
          place to
          <br />
          be <b>yourself</b>
        </span>
        <span className={styles.mainInfo}>
          Dating should feel good and safe. We work hard behind the scenes — so
          you can relax, be yourself, and focus on the connections that matter.
        </span>
      </div>

      <div className={styles.grid}>
        {ITEMS.map((it, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.imgBlock}>
              <Image
                src={it.img}
                alt={it.t}
                fill
                sizes="220px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className={styles.itemTitle}>{it.t}</span>
          </div>
        ))}
      </div>

      <a href="/#download" className={styles.buttonDwn} aria-label="Try Sugarbeet now">
        <b>Try Sugarbeet now</b>
      </a>
    </section>
  );
}
