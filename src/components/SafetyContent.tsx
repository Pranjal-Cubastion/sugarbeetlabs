"use client";
import { useReveal } from "./useReveal";
import styles from "./SafetyContent.module.css";

const RESOURCES: {
  name: string;
  lines: { label: string; href?: string }[];
}[] = [
  {
    name: "Emergency",
    lines: [{ label: "Call 911 if you are in immediate danger.", href: "tel:911" }],
  },
  {
    name: "National Domestic Violence Hotline",
    lines: [
      { label: "Call: 1-800-799-SAFE (7233)", href: "tel:18007997233" },
      { label: "Text: START to 88788", href: "sms:88788?&body=START" },
    ],
  },
  {
    name: "National Sexual Assault Hotline (RAINN)",
    lines: [{ label: "Call: 800-656-HOPE (4673)", href: "tel:8006564673" }],
  },
  {
    name: "988 Suicide & Crisis Lifeline",
    lines: [{ label: "Call or text 988", href: "tel:988" }],
  },
  {
    name: "Crisis Text Line",
    lines: [{ label: "Text HOME to 741741", href: "sms:741741?&body=HOME" }],
  },
];

export default function SafetyContent() {
  const head = useReveal<HTMLElement>(0.2);

  return (
    <>
      {/* Hero */}
      <section
        ref={head.ref}
        className={`${styles.hero} ${head.visible ? styles.visible : ""}`}
        aria-label="Safety at Sugarbeet"
      >
        <div className={styles.inner}>
          <h1 className={styles.h1}>
            <span>Safety at</span>
            <span className={styles.accent}>Sugarbeet</span>
          </h1>
          <p className={styles.lead}>
            At Sugarbeet, we&rsquo;re committed to creating a respectful,
            welcoming, and authentic community where meaningful connections can
            grow. While we work to provide a positive experience, your personal
            safety is ultimately in your hands whenever you interact with
            someone online or meet in person.
          </p>
          <div className={styles.notice} role="note">
            <strong>Please note:</strong> Sugarbeet does not conduct criminal
            background checks on its members.
          </div>
        </div>
      </section>

      {/* Body */}
      <section className={styles.body} aria-label="Safety guidance">
        <div className={styles.inner}>
          <h2 className={styles.h2}>Online Dating Safety Tips</h2>

          <h3 className={styles.h3}>Protect Your Personal Information</h3>
          <ul className={styles.list}>
            <li>
              Avoid sharing sensitive information such as your last name, home
              address, phone number, email address, workplace, financial
              details, or daily routine with people you&rsquo;ve just met online.
            </li>
            <li>
              Take your time getting to know someone before sharing personal
              information.
            </li>
            <li>
              If something feels suspicious or too good to be true, trust your
              instincts.
            </li>
          </ul>

          <h3 className={styles.h3}>Meeting Someone in Person</h3>
          <ul className={styles.list}>
            <li>Meet in a public, well-populated place for your first few dates.</li>
            <li>
              Tell a trusted friend or family member where you&rsquo;re going and
              who you&rsquo;re meeting.
            </li>
            <li>Arrange your own transportation to and from the meeting.</li>
            <li>
              If you ever feel uncomfortable or unsafe, leave immediately.
            </li>
          </ul>

          <h2 className={styles.h2}>Stay Alert to Romance Scams</h2>
          <p className={styles.p}>
            Scammers often build trust over time before asking for money, gifts,
            investments, or financial assistance. They may avoid meeting in
            person and create stories involving emergencies or travel expenses.
          </p>
          <p className={styles.emphasis}>
            Never send money or share financial information with someone
            you&rsquo;ve only met through Sugarbeet.
          </p>

          <h3 className={styles.h3}>Watch for Fraud</h3>
          <p className={styles.p}>End communication immediately if someone:</p>
          <ul className={styles.list}>
            <li>Requests money or financial assistance.</li>
            <li>Pressures you for banking or personal financial information.</li>
            <li>
              Tries to persuade you to invest in cryptocurrency or other
              financial opportunities.
            </li>
            <li>Attempts to sell products or services.</li>
          </ul>

          <h2 className={styles.h2}>Respect and Consent</h2>
          <p className={styles.p}>
            Healthy relationships are built on mutual respect and clear consent.
            Any unwanted, threatening, abusive, or harassing behavior is never
            acceptable.
          </p>
          <p className={styles.p}>
            If you believe you&rsquo;ve experienced criminal activity, contact
            your local law enforcement authorities immediately.
          </p>

          <h2 className={styles.h2}>Need Help?</h2>
          <p className={styles.p}>
            If you encounter suspicious behavior, harassment, scams, or
            inappropriate conduct on Sugarbeet, please contact our support team
            at{" "}
            <a href="mailto:hello@sugarbeetlabs.com">hello@sugarbeetlabs.com</a>{" "}
            so we can review the situation and take appropriate action.
          </p>
          <p className={styles.p}>
            If you are in immediate danger or experiencing an emergency, call
            your local emergency services right away.
          </p>

          <h2 className={styles.h2}>Helpful Resources (United States)</h2>
          <div className={styles.resources}>
            {RESOURCES.map((r) => (
              <div key={r.name} className={styles.resource}>
                <span className={styles.resourceName}>{r.name}</span>
                <ul className={styles.resourceLines}>
                  {r.lines.map((l) => (
                    <li key={l.label}>
                      {l.href ? <a href={l.href}>{l.label}</a> : l.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className={styles.closing}>
            Your safety always comes first. Take your time, trust your instincts,
            and remember that genuine relationships are built on honesty, respect,
            and patience.
          </p>
        </div>
      </section>
    </>
  );
}
