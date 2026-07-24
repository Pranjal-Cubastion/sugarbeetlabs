"use client";
import { useReveal } from "./useReveal";
import styles from "./GuidelinesContent.module.css";

type Guideline = {
  n: number;
  title: string;
  lead?: string;
  listIntro?: string;
  items?: string[];
  paras?: string[];
  note?: string;
};

const GUIDELINES: Guideline[] = [
  {
    n: 1,
    title: "Be Authentic",
    lead: "Be yourself.",
    items: [
      "Use your real photos.",
      "Represent yourself honestly.",
      "Don't impersonate others or create fake accounts.",
    ],
    note: "Authentic connections begin with authenticity.",
  },
  {
    n: 2,
    title: "Be Respectful",
    lead: "Treat every member with kindness and respect.",
    listIntro: "We do not tolerate:",
    items: [
      "Harassment or bullying",
      "Hate speech or discrimination",
      "Threats or intimidation",
      "Unwanted sexual comments or explicit messages.",
      "Repeated unwanted contact after someone says no.",
    ],
    note: "Respect boundaries at all times.",
  },
  {
    n: 3,
    title: "Keep It Safe",
    lead: "Your safety matters.",
    items: [
      "Never pressure someone to share personal information.",
      "Never ask for passwords, financial information, or verification codes.",
      "Meet in public places if you decide to meet offline.",
      "Trust your instincts and stop communicating if something feels wrong.",
    ],
  },
  {
    n: 4,
    title: "No Scams or Fraud",
    lead: "Sugarbeet has zero tolerance for scams.",
    listIntro: "Do not:",
    items: [
      "Ask members for money.",
      "Promote investment opportunities or cryptocurrency schemes.",
      "Sell products or services through unsolicited messages.",
      "Attempt to deceive or manipulate other members.",
    ],
    note: "Accounts engaging in fraudulent activity may be removed immediately.",
  },
  {
    n: 5,
    title: "Respect Privacy",
    paras: [
      "Only share photos, conversations, or personal information that belong to you.",
      "Never post another person's private information without their permission.",
    ],
  },
  {
    n: 6,
    title: "Keep Content Appropriate",
    lead: "We encourage positive conversations.",
    listIntro: "Please avoid:",
    items: [
      "Pornographic or sexually explicit content.",
      "Graphic violence.",
      "Illegal activity.",
      "Spam or misleading content.",
      "Content intended to deceive or harm others.",
    ],
  },
];

export default function GuidelinesContent() {
  const head = useReveal<HTMLElement>(0.2);

  return (
    <>
      {/* Hero */}
      <section
        ref={head.ref}
        className={`${styles.hero} ${head.visible ? styles.visible : ""}`}
        aria-label="Sugarbeet Community Guidelines"
      >
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Welcome to Sugarbeet 🌱</span>
          <h1 className={styles.h1}>
            <span>Community</span>
            <span className={styles.accent}>Guidelines</span>
          </h1>
          <p className={styles.lead}>
            Sugarbeet is a community built for meaningful connections, kindness,
            and shared values. Whether you&rsquo;re here to find love,
            friendships, or attend community events, we ask everyone to help
            create a respectful and authentic environment.
          </p>
          <p className={styles.leadSmall}>
            By using Sugarbeet, you agree to follow these guidelines.
          </p>
        </div>
      </section>

      {/* Guideline cards */}
      <section className={styles.body} aria-label="Guidelines">
        <div className={styles.grid}>
          {GUIDELINES.map((g) => (
            <article key={g.n} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.num} aria-hidden="true">
                  {g.n}
                </span>
                <h2 className={styles.cardTitle}>{g.title}</h2>
              </div>

              {g.lead && <p className={styles.cardLead}>{g.lead}</p>}

              {g.paras?.map((p) => (
                <p key={p} className={styles.cardPara}>
                  {p}
                </p>
              ))}

              {g.listIntro && <p className={styles.listIntro}>{g.listIntro}</p>}

              {g.items && (
                <ul className={styles.list}>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {g.note && <p className={styles.note}>{g.note}</p>}
            </article>
          ))}
        </div>

        {/* Report Concerns */}
        <div className={styles.report}>
          <h2 className={styles.reportTitle}>Report Concerns</h2>
          <p className={styles.reportText}>
            If you encounter harassment, fake profiles, scams, or behavior that
            violates these guidelines, please contact us at{" "}
            <a href="mailto:hello@sugarbeetlabs.com">hello@sugarbeetlabs.com</a>.
          </p>
          <p className={styles.reportText}>
            We review every report carefully and may suspend or permanently
            remove accounts that violate our policies.
          </p>
        </div>

        {/* Our Commitment */}
        <div className={styles.commitment}>
          <h2 className={styles.commitmentTitle}>Our Commitment</h2>
          <p>
            Sugarbeet is more than a dating platform—it&rsquo;s a community
            rooted in kindness, wellness, sustainability, and meaningful
            relationships. Every member helps shape the culture of our
            community.
          </p>
          <p className={styles.commitmentTag}>
            Connect with purpose. Grow together. 🌱
          </p>
        </div>
      </section>
    </>
  );
}
