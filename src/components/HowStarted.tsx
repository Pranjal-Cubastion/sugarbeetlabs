"use client";
import { useReveal } from "./useReveal";
import styles from "./HowStarted.module.css";

const REASONS = [
  { n: "1", t: "People who share your values" },
  { n: "2", t: "Find events nearby" },
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
        </div>

        <div className={styles.rightBlock}>
          <p>
            Sugarbeet started with a simple idea: the people who lead with
            compassion deserve a better way to find each other. Traditional
            dating apps often focus on the first photo, but we believe true
            connection grows from shared values, interests, and the way you see
            the world.
          </p>
          <p>
            So we created a community where plant-based hearts can connect
            through meaningful conversations, zodiac compatibility, shared
            passions, and real-life events that bring people together beyond the
            screen. Whether you&rsquo;re looking for love, friendship, or a
            community that feels like home, Sugarbeet helps you find connections
            that naturally bloom.
          </p>
          <p>
            That&rsquo;s how <strong>Sugarbeet</strong> took root.
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
