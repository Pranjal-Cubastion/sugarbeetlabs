"use client";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      id="home"
      aria-label="SugarBeet — Date as you are"
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
            <span>Date as</span>
            <span>you are</span>
          </h1>
          <p className={styles.tagline}>Stay YOU. Connect MORE</p>
          <a
            href="#download"
            className={styles.cta}
            aria-label="Explore SugarBeet now"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}
