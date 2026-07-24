"use client";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      id="home"
      aria-label="Sugarbeet — Rooted in Compassion"
    >
      {/* Full-bleed background photo */}
      <div className={styles.bg}>
        <Image
          src="/hero-couple.png"
          alt="A happy couple sharing a moment together in a lush garden"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={styles.bgImg}
        />
      </div>

      {/* Legibility scrim */}
      <div className={styles.scrim} aria-hidden="true" />

      {/* Content */}
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.h1}>
            <span>Rooted in</span>
            <span>Compassion</span>
          </h1>
          <p className={styles.tagline}>
            Connect with people who care about animals, the planet, and each
            other.
          </p>
          <a
            href="#download"
            className={styles.cta}
            aria-label="Explore Sugarbeet now"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
