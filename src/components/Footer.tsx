"use client";
import styles from "./Footer.module.css";

const COLS = [
  {
    heading: "About",
    links: [
      { label: "About us", href: "/about" },
      { label: "Mission", href: "/mission" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    heading: "Helpful tools",
    links: [
      { label: "Safety", href: "/about#safety" },
      { label: "Guidelines", href: "#" },
      { label: "T&Cs", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
  {
    heading: "Learn more",
    links: [
      { label: "Labs", href: "/labs" },
      { label: "Blog", href: "/labs" },
      { label: "Press center", href: "/labs" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.wrapper}>
        {/* Brand / contact column */}
        <div className={styles.brandCol}>
          <a href="/" className={styles.logo} aria-label="Sugarbeet Home">
            <span className={styles.logoText}>Sugarbeet</span>
          </a>
          <p className={styles.tagline}>Where conscious love takes root.</p>

          <div className={styles.socialBlock}>
            <a href="#" className={styles.socLink} aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.5l4.4 5.9L18.9 2zm-1.1 18h1.7L7.4 3.9H5.5L17.8 20z" />
              </svg>
            </a>
            <a href="#" className={styles.socLink} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z" />
              </svg>
            </a>
            <a href="#" className={styles.socLink} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9z" />
              </svg>
            </a>
            <a href="#" className={styles.socLink} aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.4.8 11.3v1.7c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s4.6 0 7.7-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.7c0-1.9-.2-3.8-.2-3.8zM9.8 15.1V8.9l6.2 3.1-6.2 3.1z" />
              </svg>
            </a>
          </div>

          <div className={styles.contact}>
            <span className={styles.contactLabel}>Get in touch with us:</span>
            <a href="mailto:hello@sugarbeetlabs.com">
              Email: hello@sugarbeetlabs.com
            </a>
          </div>
        </div>

        {/* Link columns */}
        {COLS.map((col) => (
          <div className={styles.item} key={col.heading}>
            <span className={styles.colHeading}>{col.heading}</span>
            <ul className={styles.colList}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.copyrightWrapper}>
        <span className={styles.copyright}>
          © 2026 Sugarbeet Labs. All rights reserved.
        </span>
        <a
          href="#download"
          className={styles.downloadApp}
          aria-label="Sugarbeet app coming soon"
        >
          Coming Soon
        </a>
      </div>
    </footer>
  );
}
