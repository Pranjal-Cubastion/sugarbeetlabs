"use client";
import { useReveal } from "./useReveal";
import styles from "./HowStarted.module.css";

const REASONS = [
  { n: "1", t: "43M+ plant-based people already in" },
  { n: "2", t: "Plenty of them are right near you" },
  { n: "3", t: "Real, warm, and rooted like you" },
];

export default function HowStarted() {
  const start = useReveal<HTMLDivElement>();
  const reasons = useReveal<HTMLDivElement>(0.12);

  return (
    <section className={styles.section} aria-label="How SugarBeet started">
      <div
        ref={start.ref}
        className={`${styles.startWrapper} ${start.visible ? styles.visible : ""}`}
      >
        <div className={styles.leftBlock}>
          <h2 className={styles.mainTitle}>
            <span>How</span>
            <span>SugarBeet</span>
            <span>Started</span>
          </h2>
          <span className={styles.blobWrap} aria-hidden="true">
            <i className={styles.blob} />
          </span>
        </div>

        <div className={styles.rightBlock}>
          <p>
            SugarBeet began with a simple frustration: the people who lead with
            kindness deserve an easier way to find each other. Endless swiping
            felt hollow, and the values that matter most never made it past the
            first photo. So we built a place where plant-based hearts lead with
            what they believe — and let real connection do the rest.
          </p>
          <p>
            That&rsquo;s how <strong>SugarBeet</strong> was born.
          </p>
          <p>
            <a className={styles.tryBtn} href="/#download">
              Try it yourself &rarr;
            </a>
          </p>
        </div>
      </div>

      <div
        ref={reasons.ref}
        className={`${styles.reasonsBlock} ${reasons.visible ? styles.visible : ""}`}
      >
        <div className={styles.reasonsInner}>
          <span className={styles.reasonsTitle}>
            Three worthy reasons to choose <b>SugarBeet</b>
          </span>
          <div className={styles.reasonsGrid}>
            {REASONS.map((r) => (
              <div className={styles.item} key={r.n}>
                <i className={styles.number}>{r.n}</i>
                <span className={styles.itemTitle}>{r.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
