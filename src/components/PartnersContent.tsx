"use client";
import Image from "next/image";
import { useReveal } from "./useReveal";
import styles from "./PartnersContent.module.css";

const TILES = [
  {
    src: "/partner/DSC01419.webp",
    alt: "Kids smiling during a Tankproof swim lesson",
    cls: "t1",
  },
  {
    src: "/partner/91677BD3-EB76-4118-9B4D-25A830092F87.webp",
    alt: "Instructor guiding a young swimmer in the pool",
    cls: "t2",
  },
  {
    src: "/partner/image-asset-1-1.webp",
    alt: "Black History Month — marking 100 years of recognition",
    cls: "t3",
  },
  {
    src: "/partner/image-asset.webp",
    alt: "How you can support Tankproof",
    cls: "t4",
  },
  {
    src: "/about-hero.webp",
    alt: "Friends celebrating together under a blue sky",
    cls: "t5",
  },
];

export default function PartnersContent() {
  const feature = useReveal<HTMLElement>(0.08);
  const cta = useReveal<HTMLElement>(0.2);

  return (
    <>
      {/* Hero — white, huge type */}
      <section className={styles.hero} aria-label="Sugarbeet partners">
        <div className={styles.heroInner}>
          <h1 className={styles.h1}>
            <span>We grow good</span>
            <span>
              <b>together</b>
            </span>
          </h1>
          <p className={styles.lead}>
            Our 1% Pledge comes to life through partners doing real work on the
            ground. Meet the people we stand behind.
          </p>
        </div>
      </section>

      {/* Featured partner — dark band */}
      <section
        ref={feature.ref}
        className={`${styles.dark} ${feature.visible ? styles.visible : ""}`}
        aria-label="Our partner Tankproof"
      >
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.logoWrap}>
              <Image
                src="/partner/TankproofLogo.webp"
                alt="Tankproof"
                width={520}
                height={150}
                className={styles.logo}
              />
            </div>
            <p className={styles.desc}>
              An events and education-based 501(c)(3) non-profit organization
              on a mission to provide equitable access to aquatics and food
              security to minorities across the U.S.
            </p>
            <a
              href="https://tankproof.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.learnBtn}
            >
              Visit Tankproof &rarr;
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.foldBanner}>
              <span>Get in the fold</span>
            </div>
            <div className={styles.bento}>
              {TILES.map((t) => (
                <div
                  key={t.src}
                  className={`${styles.tile} ${styles[t.cls as keyof typeof styles]}`}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    className={styles.tileImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={cta.ref}
        className={`${styles.ctaSection} ${cta.visible ? styles.visible : ""}`}
        aria-label="Become a partner"
      >
        <a
          href="/contact"
          className={styles.buttonDwn}
          aria-label="Become a Sugarbeet partner"
        >
          Become a partner
        </a>
      </section>
    </>
  );
}
