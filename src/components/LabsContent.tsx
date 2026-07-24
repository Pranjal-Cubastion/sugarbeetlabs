"use client";
import { useReveal } from "./useReveal";
import styles from "./LabsContent.module.css";

// Ways the community can help shape the product.
const SHAPE = [
  "Join the beta waitlist",
  "Suggest event ideas",
  "Apply to become beta testers",
  "Become a campus or city ambassador",
];

// Open community polls.
const POLLS = [
  "Should astrology be part of matching?",
  "Would you attend a Sugarbeet event in your city?",
];

// Transparent product roadmap.
const ROADMAP: { phase: string; items: string[] }[] = [
  {
    phase: "Now",
    items: ["Building the platform", "Growing the waitlist"],
  },
  {
    phase: "Next",
    items: [
      "Kickstarter Campaign",
      "Private beta",
      "Community ambassadors",
      "First local events",
    ],
  },
  {
    phase: "Coming Soon",
    items: ["Public launch", "Volunteer meetups", "City communities"],
  },
];

// Ways the community can help co-create Sugarbeet.
const GROW = [
  "Vote on new features",
  "Submit ideas",
  "Join beta testing",
  "Become a city ambassador",
  "Host a local Sugarbeet meetup",
  "Share your plant-based dating experiences",
];

export default function LabsContent() {
  const shape = useReveal<HTMLElement>(0.12);
  const polls = useReveal<HTMLElement>(0.12);
  const founder = useReveal<HTMLElement>(0.12);
  const roadmap = useReveal<HTMLElement>(0.1);
  const grow = useReveal<HTMLElement>(0.1);
  const cta = useReveal<HTMLElement>(0.2);

  return (
    <>
      {/* Hero — white, big type */}
      <section className={styles.hero} aria-label="Sugarbeet Labs">
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>
              <span>Sugarbeet</span>
              <span className={styles.labs}>Labs</span>
            </h1>
            <p className={styles.lead}>
              We&rsquo;re researching, testing, and building a better way for
              plant-based people to meet, connect, and build meaningful
              relationships. Reach out at{" "}
              <a href="mailto:hello@sugarbeetlabs.com">hello@sugarbeetlabs.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Help Shape Sugarbeet */}
      <section
        ref={shape.ref}
        className={`${styles.shape} ${shape.visible ? styles.visible : ""}`}
        aria-label="Help shape Sugarbeet"
      >
        <div className={styles.shapeInner}>
          <h2 className={styles.sectionTitle}>Help Shape Sugarbeet</h2>
          <p className={styles.sectionLead}>
            Sugarbeet is being built with its future community—not just for it.
          </p>
          <ul className={styles.shapeList}>
            {SHAPE.map((s) => (
              <li key={s} className={styles.shapeItem}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community Polls */}
      <section
        ref={polls.ref}
        className={`${styles.polls} ${polls.visible ? styles.visible : ""}`}
        aria-label="Community polls"
      >
        <div className={styles.pollsInner}>
          <h2 className={styles.sectionTitle}>
            <span aria-hidden="true">📊</span> Community Polls
          </h2>
          <div className={styles.pollGrid}>
            {POLLS.map((p) => (
              <div key={p} className={styles.pollCard}>
                <span className={styles.pollQ}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap timeline */}
      <section
        ref={roadmap.ref}
        className={`${styles.roadmap} ${roadmap.visible ? styles.visible : ""}`}
        aria-label="Roadmap"
      >
        <div className={styles.roadmapInner}>
          <h2 className={styles.sectionTitle}>
            <span aria-hidden="true">🚀</span> Roadmap
          </h2>
          <p className={styles.sectionLead}>
            A transparent roadmap builds excitement — here&rsquo;s where
            Sugarbeet is headed.
          </p>
          <ol className={styles.timeline}>
            {ROADMAP.map((r, i) => (
              <li
                key={r.phase}
                className={styles.stage}
                style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
              >
                <span className={styles.dot} aria-hidden="true" />
                <div className={styles.stageBody}>
                  <span className={styles.phaseName}>{r.phase}</span>
                  <ul className={styles.phaseList}>
                    {r.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder's Note */}
      <section
        ref={founder.ref}
        className={`${styles.founder} ${founder.visible ? styles.visible : ""}`}
        aria-label="Founder's note"
      >
        <div className={styles.founderInner}>
          <h2 className={styles.sectionTitle}>
            <span aria-hidden="true">💡</span> Founder&rsquo;s Note
          </h2>
          <p className={styles.founderText}>
            We started Sugarbeet because we believe meaningful relationships grow
            from shared values. Too many dating apps optimize for endless
            swiping. We&rsquo;re building something different—a community where
            compassion comes first and connections can flourish.
          </p>
          <div className={styles.signature}>
            {/* TODO: replace with a real signature image (e.g. /signature.png) */}
            <span className={styles.signMark} aria-hidden="true" />
            <span className={styles.signName}>— The Sugarbeet Team 🌱</span>
          </div>
        </div>
      </section>

      {/* Help Us Grow */}
      <section
        ref={grow.ref}
        className={`${styles.grow} ${grow.visible ? styles.visible : ""}`}
        aria-label="Help us grow"
      >
        <div className={styles.growInner}>
          <h2 className={styles.sectionTitle}>Help Us Grow</h2>
          <p className={styles.sectionLead}>
            Instead of presenting ourselves as experts with all the answers,
            we&rsquo;re inviting the community to co-create the product. 🌱
          </p>
          <ul className={styles.growList}>
            {GROW.map((g) => (
              <li key={g} className={styles.growItem}>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={cta.ref}
        className={`${styles.ctaSection} ${cta.visible ? styles.visible : ""}`}
        aria-label="Get in touch"
      >
        <a href="/contact" className={styles.buttonDwn} aria-label="Get in touch with Sugarbeet Labs">
          Got a story? Let&rsquo;s talk
        </a>
      </section>
    </>
  );
}
