"use client";
import Image from "next/image";
import { useReveal } from "./useReveal";
import styles from "./MissionContent.module.css";

const CAUSES = [
  { n: "1", t: "Hunger relief & food security" },
  { n: "2", t: "Animal protection & welfare" },
  { n: "3", t: "Environmental conservation & sustainability" },
];

export default function MissionContent() {
  const causes = useReveal<HTMLElement>(0.15);
  const impact = useReveal<HTMLElement>(0.12);

  return (
    <>
      {/* Hero — white, huge type like the About hero */}
      <section className={styles.hero} aria-label="Our 1% Pledge">
        <div className={styles.heroInner}>
          <h1 className={styles.h1}>
            <span>Small actions,</span>
            <span>
              <b>big impact</b>
            </span>
          </h1>
          <p className={styles.lead}>
            Sugarbeet believes connection should do more than bring people
            together — it should help the world we live in. That&rsquo;s our 1%
            Pledge: one percent of every subscription goes to causes our
            community cares about.
          </p>
        </div>
      </section>

      {/* Where the 1% goes — purple band with numbered causes */}
      <section
        ref={causes.ref}
        className={`${styles.causes} ${causes.visible ? styles.visible : ""}`}
        aria-label="Where your 1% goes"
      >
        <div className={styles.causesInner}>
          <h2 className={styles.causesTitle}>
            Where your <b>1%</b> goes
          </h2>
          <div className={styles.causesGrid}>
            {CAUSES.map((c) => (
              <div className={styles.cause} key={c.n}>
                <i className={styles.number}>{c.n}</i>
                <span className={styles.causeTitle}>{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The pledge in action — image + black pledge card + giant CTA */}
      <section
        ref={impact.ref}
        className={`${styles.impact} ${impact.visible ? styles.visible : ""}`}
        aria-label="The pledge in action"
      >
        <div className={styles.impactInner}>
          <div className={styles.impactText}>
            <h2 className={styles.impactTitle}>
              Join Sugarbeet, rooted in <b>love</b>
            </h2>
            <p>
              When you join Sugarbeet, you&rsquo;re not just finding your
              people — you&rsquo;re helping feed communities, protect animals,
              and care for the planet.
            </p>
            <p>Connect with purpose. Grow with impact.</p>
          </div>

          <div className={styles.impactMedia}>
            <div className={styles.imgWrap}>
              <Image
                src="/blog-2.png"
                alt="Friends sharing a plant-based meal at a garden cafe"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.img}
              />
            </div>
            <div className={styles.card}>
              <span className={styles.cardTitle}>The 1% Pledge</span>
              <ul className={styles.cardList}>
                <li>
                  <i>✓</i> 1% of every subscription
                </li>
                <li>
                  <i>✓</i> Donated every quarter
                </li>
                <li>
                  <i>✓</i> Reported with full transparency
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <a
            href="/#download"
            className={styles.buttonDwn}
            aria-label="Join the 1% Pledge — Sugarbeet is coming soon"
          >
            Join the 1% Pledge
          </a>
        </div>
      </section>
    </>
  );
}
