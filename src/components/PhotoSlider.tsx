"use client";
import Image from "next/image";
import styles from "./PhotoSlider.module.css";

const SLIDES = [
  { img: "/press-1.jpg", date: "Jul 08, 2026", title: "Authentic connections", info: "Date as you are",  color: "blue" },
  { img: "/press-2.jpg", date: "May 22, 2026", title: "Meet your match",       info: "Plant-based dating", color: "black" },
  { img: "/press-3.jpg", date: "Jan 29, 2026", title: "Real connections",      info: "No fake profiles",   color: "pink" },
  { img: "/press-1.jpg", date: "Jul 08, 2026", title: "Authentic connections", info: "Date as you are",  color: "blue" },
  { img: "/press-2.jpg", date: "May 22, 2026", title: "Meet your match",       info: "Plant-based dating", color: "black" },
  { img: "/press-3.jpg", date: "Jan 29, 2026", title: "Real connections",      info: "No fake profiles",   color: "pink" },
];

export default function PhotoSlider() {
  return (
    <section className={styles.section4} aria-label="Photo gallery">
      <div className={styles.swiperContainer}>
        <div className={styles.swiperWrapper}>
          {SLIDES.map((s, i) => (
            <div className={styles.swiperSlide} key={i}>
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 450px, 640px"
              />
              <div className={`${styles.hoverBlock} ${styles[s.color]}`}>
                <span className={styles.badgeDate}>{s.date}</span>
                <span className={styles.slideTitle}>{s.title}</span>
                <span className={styles.slideInfo}>{s.info}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
