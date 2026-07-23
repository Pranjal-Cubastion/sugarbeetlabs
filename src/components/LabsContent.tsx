"use client";
import { useMemo, useState } from "react";
import { useReveal } from "./useReveal";
import styles from "./LabsContent.module.css";

type Item = {
  date: string;
  tag: string;
  title: string;
  outlet?: string;
};

type TabKey = "Labs" | "Press" | "Blogs";
const TABS: TabKey[] = ["Labs", "Press", "Blogs"];

// Sample child content per tab — swap for a CMS / API later.
const CONTENT: Record<TabKey, Item[]> = {
  Labs: [
    { date: "Jul 18, 2026", tag: "Experiment", title: "We're testing zodiac-powered match suggestions in-app" },
    { date: "Jul 02, 2026", tag: "Feature drop", title: "Rallies: discover vegan events happening near you" },
    { date: "Jun 20, 2026", tag: "Beta", title: "Screenshot & screen-record protection now in closed beta" },
    { date: "Jun 05, 2026", tag: "Research", title: "What 2,000 plant-based daters told us about first dates" },
    { date: "May 21, 2026", tag: "Experiment", title: "Value-based prompts that replace awkward filters" },
    { date: "May 08, 2026", tag: "Feature drop", title: "Verified-only mode: every profile checked before it blooms" },
  ],
  Press: [
    { date: "Jul 15, 2026", tag: "Press release", title: "SugarBeet raises seed round to grow conscious dating", outlet: "TechCrunch" },
    { date: "Jun 28, 2026", tag: "Coverage", title: "The dating app where your values come before your photos", outlet: "TIME" },
    { date: "Jun 10, 2026", tag: "Coverage", title: "Meet the plant-powered answer to swipe fatigue", outlet: "Fast Company" },
    { date: "May 30, 2026", tag: "Press release", title: "SugarBeet pledges 1% of every subscription to good", outlet: "Mashable" },
    { date: "May 12, 2026", tag: "Coverage", title: "Why conscious eaters are ditching generic dating apps", outlet: "Inc." },
    { date: "Apr 24, 2026", tag: "Press release", title: "SugarBeet opens its launch waitlist to the public", outlet: "AdAge" },
  ],
  Blogs: [
    { date: "Jul 20, 2026", tag: "Guide", title: "5 green flags to look for on a first plant-based date" },
    { date: "Jul 06, 2026", tag: "Community", title: "How to plan a zero-waste picnic date they'll remember" },
    { date: "Jun 22, 2026", tag: "Astrology", title: "Your zodiac dating style, decoded for conscious love" },
    { date: "Jun 09, 2026", tag: "Guide", title: "Writing a profile that leads with your values" },
    { date: "May 26, 2026", tag: "Lifestyle", title: "Vegan date-night recipes worth staying in for" },
    { date: "May 11, 2026", tag: "Community", title: "Real SugarBeet stories: connections that took root" },
  ],
};

// Brand palette cycled across the cards.
const PALETTE = [
  { bg: "#FFB5D0", fg: "#141414" },
  { bg: "#7C92BF", fg: "#141414" },
  { bg: "#D9B8D9", fg: "#141414" },
  { bg: "#6B8372", fg: "#ffffff" },
  { bg: "#B20051", fg: "#ffffff" },
  { bg: "#141414", fg: "#ffffff" },
];

const PAGE_SIZE = 3;

export default function LabsContent() {
  const [tab, setTab] = useState<TabKey>("Labs");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const updates = useReveal<HTMLElement>(0.08);
  const cta = useReveal<HTMLElement>(0.2);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const items = CONTENT[tab];
    if (!q) return items;
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.tag.toLowerCase().includes(q) ||
        (i.outlet?.toLowerCase().includes(q) ?? false)
    );
  }, [tab, query]);

  const visible = filtered.slice(0, limit);

  const switchTab = (t: TabKey) => {
    setTab(t);
    setLimit(PAGE_SIZE);
  };

  return (
    <>
      {/* Hero — white, big type + media-kit card */}
      <section className={styles.hero} aria-label="SugarBeet Labs">
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>
              <span>SugarBeet</span>
              <span>
                <b>Labs</b>
              </span>
            </h1>
            <p className={styles.lead}>
              Experiments, press and fresh thinking from the team growing
              conscious dating. Reach out at{" "}
              <a href="mailto:labs@sugarbeetlabs.com">labs@sugarbeetlabs.com</a>.
            </p>
          </div>

          <aside className={styles.kit} aria-label="Media resources">
            <h2 className={styles.kitTitle}>
              Media resources
              <br />
              you may need
            </h2>
            <p className={styles.kitText}>
              Logos, product lifestyle images, app screenshots and more.
            </p>
            <a href="/contact" className={styles.kitBtn}>
              Download media kit
            </a>
          </aside>
        </div>
      </section>

      {/* Updates — dark band with search + tabs + card grid */}
      <section
        ref={updates.ref}
        className={`${styles.updates} ${updates.visible ? styles.visible : ""}`}
        aria-label="Latest updates"
      >
        <div className={styles.updatesInner}>
          <h2 className={styles.updatesTitle}>Our hottest updates</h2>

          <div className={styles.searchWrap}>
            <span className={styles.searchIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </span>
            <input
              type="text"
              className={styles.search}
              placeholder={`Search ${tab.toLowerCase()}…`}
              aria-label={`Search ${tab}`}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(PAGE_SIZE);
              }}
            />
          </div>

          <div className={styles.tabs} role="tablist" aria-label="Content categories">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className={`${styles.tab} ${tab === t ? styles.tabActive : ""}`}
                onClick={() => switchTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {visible.length > 0 ? (
            <div className={styles.grid} role="tabpanel" aria-label={`${tab} updates`}>
              {visible.map((item, i) => {
                const c = PALETTE[i % PALETTE.length];
                const tone = c.fg === "#ffffff" ? "dark" : "light";
                return (
                  <a
                    key={`${tab}-${item.title}`}
                    href="#"
                    className={styles.card}
                    data-tone={tone}
                    style={{ backgroundColor: c.bg, color: c.fg }}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.pill}>{item.date}</span>
                      {item.outlet ? (
                        <span className={styles.outlet}>{item.outlet}</span>
                      ) : (
                        <span className={styles.tag}>{item.tag}</span>
                      )}
                    </div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.cardArrow} aria-hidden="true">
                      Read more &rarr;
                    </span>
                  </a>
                );
              })}
            </div>
          ) : (
            <p className={styles.empty}>
              No {tab.toLowerCase()} match &ldquo;{query}&rdquo; — try another
              search.
            </p>
          )}

          {limit < filtered.length && (
            <div className={styles.showMoreWrap}>
              <button
                type="button"
                className={styles.showMore}
                onClick={() => setLimit((l) => l + PAGE_SIZE)}
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        ref={cta.ref}
        className={`${styles.ctaSection} ${cta.visible ? styles.visible : ""}`}
        aria-label="Get in touch"
      >
        <a href="/contact" className={styles.buttonDwn} aria-label="Get in touch with SugarBeet Labs">
          Got a story? Let&rsquo;s talk
        </a>
      </section>
    </>
  );
}
