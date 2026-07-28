"use client";
import Image from "next/image";
import { useReveal } from "./useReveal";
import styles from "./FaqContent.module.css";

type QA = { q: string; a: React.ReactNode };
type Category = { title: string; items: QA[] };

const CATEGORIES: Category[] = [
  {
    title: "About Sugarbeet",
    items: [
      {
        q: "What is Sugarbeet?",
        a: "Sugarbeet is a modern dating and community platform designed to help people build genuine relationships through shared values, interests, and real-life experiences.",
      },
      {
        q: "Is Sugarbeet available yet?",
        a: "Not yet. We're currently building the platform and inviting early supporters to join our waitlist. Sign up to be among the first to know when we launch.",
      },
      {
        q: "Is Sugarbeet free to use?",
        a: "Yes. Sugarbeet will offer a free version with core features. Optional premium memberships may be available in the future with additional benefits.",
      },
      {
        q: "Who is Sugarbeet for?",
        a: "Sugarbeet is for adults looking for authentic relationships, meaningful conversations, friendships, and community. Whether you're new to dating or looking for a fresh approach, you're welcome here.",
      },
      {
        q: "What makes Sugarbeet different?",
        a: "Sugarbeet goes beyond swiping. We're building a platform that encourages meaningful connections through shared interests, community events, and experiences that bring people together both online and in real life.",
      },
      {
        q: "Why is the company called Sugarbeet?",
        a: "The sugar beet is a plant known for providing natural sweetness from strong roots. Our name reflects our belief that meaningful relationships grow from authenticity, shared values, and genuine connection.",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        q: "How do I join the waitlist?",
        a: "Simply enter your email on our homepage to reserve your spot. We'll notify you as soon as early access becomes available.",
      },
      {
        q: "Will Sugarbeet have a mobile app?",
        a: "Yes. Sugarbeet is being built as a mobile-first experience, with availability on iOS and Android planned at launch.",
      },
      {
        q: "Will Sugarbeet be available internationally?",
        a: "We plan to expand over time. Initial availability may be limited to select regions while we continue to grow.",
      },
      {
        q: "Will there be community events?",
        a: "Yes. We plan to host local events and experiences that make it easier for members to meet naturally and build real connections.",
      },
      {
        q: "Will there be a premium membership?",
        a: "Yes. Premium memberships are planned and will include additional features designed to enhance your experience. More details will be announced closer to launch.",
      },
      {
        q: "How can I stay updated?",
        a: "Join our waitlist, follow us on social media, and subscribe to our newsletter for product updates, launch announcements, and community news.",
      },
    ],
  },
  {
    title: "Trust & safety",
    items: [
      {
        q: "Is my information secure?",
        a: "Protecting your privacy is important to us. We are committed to handling your information responsibly and implementing industry-standard security practices. Please review our Privacy Policy for more information.",
      },
      {
        q: "Does Sugarbeet verify member identities?",
        a: "We're exploring verification features to help build a trusted community. More details will be shared as we get closer to launch.",
      },
      {
        q: "How will Sugarbeet keep the community safe?",
        a: "We're committed to fostering a respectful, welcoming community through our Community Guidelines, safety resources, reporting tools, and ongoing moderation efforts.",
      },
      {
        q: "Can I report inappropriate behavior?",
        a: "Yes. Once the app launches, members will be able to report inappropriate behavior directly within the app. Reports will be reviewed promptly.",
      },
      {
        q: "How can I contact Sugarbeet?",
        a: (
          <>
            Questions or feedback? We&rsquo;d love to hear from you. Email:{" "}
            <a href="mailto:hello@sugarbeetlabs.com">hello@sugarbeetlabs.com</a>
          </>
        ),
      },
    ],
  },
];

function FaqGroup({ category }: { category: Category }) {
  const group = useReveal<HTMLDivElement>(0.08);
  return (
    <div
      ref={group.ref}
      className={`${styles.group} ${group.visible ? styles.visible : ""}`}
    >
      <h2 className={styles.catTitle}>{category.title}</h2>
      <div className={styles.list}>
        {category.items.map((item, i) => (
          <details
            key={item.q}
            className={styles.item}
            style={{ transitionDelay: `${Math.min(i * 0.05, 0.3)}s` }}
          >
            <summary className={styles.summary}>
              <span className={styles.q}>{item.q}</span>
              <span className={styles.chev} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </summary>
            <div className={styles.answer}>
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function FaqContent() {
  const head = useReveal<HTMLElement>(0.2);

  return (
    <>
      <section
        ref={head.ref}
        className={`${styles.hero} ${head.visible ? styles.visible : ""}`}
        aria-label="Frequently asked questions"
      >
        <div className={styles.heroInner}>
          <h1 className={styles.h1}>
            <span>Frequently asked</span>
            <span className={styles.accent}>questions</span>
          </h1>
          <p className={styles.lead}>
            Everything you need to know about Sugarbeet — from launch plans to
            safety. Still curious? Reach us at{" "}
            <a href="mailto:hello@sugarbeetlabs.com">hello@sugarbeetlabs.com</a>.
          </p>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/faq.png"
            alt="A member embracing her dog outdoors"
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroImg}
          />
        </div>
      </section>

      <section className={styles.faqSection} aria-label="FAQ list">
        {CATEGORIES.map((c) => (
          <FaqGroup key={c.title} category={c} />
        ))}
      </section>
    </>
  );
}
