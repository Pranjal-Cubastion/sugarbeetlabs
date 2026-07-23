"use client";
import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-label="About SugarBeet">
      <h1 className={styles.h1}>
        <span className={styles.line1}>Come as you are</span>
        <span className={styles.line2}>Let&rsquo;s grow something beet-ter together</span>
      </h1>
      <div className={styles.imageWrap}>
        <Image
          src="/about-hero.webp"
          alt="Two friends looking up at a bright blue sky, framing the moment with their hands"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={styles.image}
        />
      </div>
    </section>
  );
}
