"use client";
import { useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import { useReveal } from "./useReveal";
import styles from "./LabsContent.module.css";

type FormsappInstance = { open: () => void; close: () => void };
type FormsappCtor = new (
  id: string,
  type: string,
  opts: Record<string, unknown>,
  baseUrl: string
) => FormsappInstance;

const POLL_ID = "6a64f849fb07cd9f86d69470";
const POLL_BASE = "https://4gnd6yf9.forms.app";
const POLL_OPTS = {
  overlay: "rgba(45, 45, 45, 0.5)",
  width: "600px",
  height: "600px",
};

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
  { phase: "Now", items: ["Building the platform", "Growing the waitlist"] },
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
  const polls = useReveal<HTMLElement>(0.14);
  const roadmap = useReveal<HTMLElement>(0.1);
  const founder = useReveal<HTMLElement>(0.14);
  const grow = useReveal<HTMLElement>(0.1);
  const cta = useReveal<HTMLElement>(0.2);

  // Holds the forms.app popup instance so the button can open it directly.
  const pollRef = useRef<FormsappInstance | null>(null);

  const initPoll = () => {
    if (pollRef.current) return pollRef.current;
    const ctor = (window as unknown as { formsapp?: FormsappCtor }).formsapp;
    if (!ctor) return null;
    pollRef.current = new ctor(POLL_ID, "popup", POLL_OPTS, POLL_BASE);
    return pollRef.current;
  };

  const openPoll = () => {
    initPoll()?.open();
  };

  return (
    <>
      {/* Hero — white, huge type + full-bleed photo */}
      <section className={styles.hero} aria-label="Sugarbeet Labs">
        <div className={styles.heroInner}>
          <h1 className={styles.h1}>
            <span>Sugarbeet</span>
            <span>
              <b>Labs</b>
            </span>
          </h1>
          <p className={styles.lead}>
            We&rsquo;re researching, testing, and building a better way for
            plant-based people to meet, connect, and build meaningful
            relationships. Reach out at{" "}
            <a href="mailto:hello@sugarbeetlabs.com">hello@sugarbeetlabs.com</a>.
          </p>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/labs-hero.png"
            alt="A member embracing her dog outdoors"
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* Help Shape Sugarbeet — pink rounded card + numbered items */}
      <section
        ref={shape.ref}
        className={`${styles.band} ${shape.visible ? styles.visible : ""}`}
        aria-label="Help shape Sugarbeet"
      >
        <div className={`${styles.card} ${styles.cardPink}`}>
          <h2 className={styles.bandTitle}>
            Help shape <b>Sugarbeet</b>
          </h2>
          <p className={styles.bandLead}>
            Sugarbeet is being built with its future community&mdash;not just for
            it.
          </p>
          <div className={styles.numGrid}>
            {SHAPE.map((s, i) => (
              <div className={styles.numItem} key={s}>
                <i className={styles.num}>{i + 1}</i>
                <span className={styles.numTitle}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Polls */}
      <section
        ref={polls.ref}
        className={`${styles.plain} ${polls.visible ? styles.visible : ""}`}
        aria-label="Community polls"
      >
        <div className={styles.plainInner}>
          <h2 className={styles.sectionTitle}>Community polls</h2>
          <p className={styles.sectionLead}>
            Have your say &mdash; we build around what the community wants.
          </p>
          <div className={styles.pollGrid}>
            {POLLS.map((p) => (
              <div className={styles.pollCard} key={p}>
                <span className={styles.pollQ}>{p}</span>
                <span className={styles.pollTag}>Community poll</span>
              </div>
            ))}
          </div>

          {/* forms.app poll — opens the popup via the captured instance */}
          <div className={styles.pollCta}>
            <button type="button" className={styles.pollBtn} onClick={openPoll}>
              Vote in our polls
            </button>
          </div>
        </div>

        <Script
          src="https://cdn.forms.app/embed.js"
          strategy="afterInteractive"
          onLoad={initPoll}
          onReady={initPoll}
        />
      </section>

      {/* Roadmap — dark band with timeline */}
      <section
        ref={roadmap.ref}
        className={`${styles.roadmap} ${roadmap.visible ? styles.visible : ""}`}
        aria-label="Roadmap"
      >
        <div className={styles.roadmapInner}>
          <h2 className={styles.roadmapTitle}>
            Our <b>roadmap</b>
          </h2>
          <p className={styles.roadmapLead}>
            A transparent look at where Sugarbeet is headed.
          </p>
          <ol className={styles.timeline}>
            {ROADMAP.map((r, i) => (
              <li
                key={r.phase}
                className={styles.stage}
                style={{ transitionDelay: `${0.15 + i * 0.14}s` }}
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

      {/* Founder's Note — green rounded card */}
      <section
        ref={founder.ref}
        className={`${styles.band} ${founder.visible ? styles.visible : ""}`}
        aria-label="Founder's note"
      >
        <div className={`${styles.card} ${styles.cardGreen} ${styles.founderCard}`}>
          {/* Save the founder photo to public/founder-photo.png */}
          <div className={styles.founderImgWrap}>
            <Image
              src="/founders-photo.jpg"
              alt="Sugarbeet founder relaxing on a couch"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
              className={styles.founderImg}
            />
          </div>
          <div className={styles.founderBody}>
            <span className={styles.eyebrow}>Founder&rsquo;s note</span>
            <p className={styles.founderText}>
              We started Sugarbeet because we believe meaningful relationships
              grow from shared values. Too many dating apps optimize for endless
              swiping. We&rsquo;re building something different&mdash;a community
              where compassion comes first and connections can flourish.
            </p>
            <div className={styles.signature}>
              {/* Save the founder signature to public/founder-signature.png */}
              <Image
                src="/founder-signature.png"
                alt="Founder's signature — S.A."
                width={280}
                height={120}
                className={styles.signImg}
              />
              <span className={styles.signName}>&mdash; The Sugarbeet Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Help Us Grow — dark rounded card + item grid */}
      <section
        ref={grow.ref}
        className={`${styles.band} ${grow.visible ? styles.visible : ""}`}
        aria-label="Help us grow"
      >
        <div className={`${styles.card} ${styles.cardDark}`}>
          <h2 className={styles.bandTitleLight}>
            Help us <b>grow</b>
          </h2>
          <p className={styles.bandLeadLight}>
            Instead of presenting ourselves as experts with all the answers,
            we&rsquo;re inviting the community to co-create the product.
          </p>
          <div className={styles.growGrid}>
            {GROW.map((g) => (
              <div className={styles.growItem} key={g}>
                <i className={styles.growTick} aria-hidden="true">
                  ✓
                </i>
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giant closing CTA */}
      <section
        ref={cta.ref}
        className={`${styles.ctaSection} ${cta.visible ? styles.visible : ""}`}
        aria-label="Get in touch"
      >
        <div className={styles.ctaInner}>
          <a
            href="/contact"
            className={styles.buttonDwn}
            aria-label="Get in touch with Sugarbeet Labs"
          >
            Got a story? Let&rsquo;s talk
          </a>
        </div>
      </section>
    </>
  );
}
