"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  // Pages whose hero is a dark photo need the light/overlay navbar treatment.
  const overlayNav = pathname === "/" || pathname === "/contact";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dwOpen, setDwOpen] = useState(false);
  const dwRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dwRef.current && !dwRef.current.contains(e.target as Node)) setDwOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("open-menu", menuOpen);
    return () => document.body.classList.remove("open-menu");
  }, [menuOpen]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Mission", href: "/mission" },
    { label: "Partners", href: "/partners" },
    { label: "Labs", href: "/labs" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${overlayNav ? styles.home : ""} ${scrolled ? styles.scrolled : ""}`} role="banner">
      <div className={styles.wrapper}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="Sugarbeet — Home">
          <span className={styles.logoText}>Sugarbeet</span>
        </a>

        {/* Mobile download */}
        <a
          href="#download"
          className={`${styles.mobDwnButton} ${styles.isIos}`}
          aria-label="Sugarbeet app coming soon"
        >
          Coming Soon
        </a>

        {/* Nav */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Primary navigation">
          <button
            className={styles.closeMenuBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />
          <ul id="main-menu">
            {navLinks.map((l) => (
              <li key={l.label} className={styles.navLink}>
                <a
                  href={l.href}
                  className={pathname === l.href ? styles.activeLink : ""}
                  aria-current={pathname === l.href ? "page" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className={`${styles.navLink} ${styles.mobDwnButton} ${styles.isIos}`}>
              <a href="#download">Coming Soon</a>
            </li>
          </ul>

          {/* Download App dropdown */}
          <div
            className={`${styles.dwnWrapper} ${dwOpen ? styles.open : ""}`}
            ref={dwRef}
          >
            <button
              className={`${styles.dwnButton} ${dwOpen ? styles.active : ""}`}
              onClick={() => setDwOpen((p) => !p)}
              aria-expanded={dwOpen}
              aria-label="Sugarbeet app coming soon"
            >
              <i className={styles.appleI} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.88 1.44-.06 1.99-.93 3.73-.93s2.23.93 3.76.9c1.55-.03 2.53-1.41 3.48-2.8 1.1-1.61 1.55-3.17 1.57-3.25-.03-.02-3.01-1.16-3.02-4.59zM14.16 4.1c.8-.96 1.33-2.3 1.19-3.64-1.14.05-2.53.76-3.35 1.73-.73.85-1.38 2.22-1.2 3.53 1.27.1 2.57-.65 3.36-1.62z" />
                </svg>
              </i>
              <i className={styles.googleI} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                </svg>
              </i>
              Coming Soon
              <i className={styles.arrow} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </i>
            </button>
            <div className={styles.dwnBlock} aria-hidden={!dwOpen}>
              <div className={styles.blockWrp}>
                <div className={styles.item}>
                  <a href="#" className={`${styles.title} ${styles.appstore}`} aria-label="App Store">Appstore</a>
                  <div className={styles.qrCode} aria-label="QR code for App Store">
                    <div className={styles.qrPlaceholder} />
                  </div>
                </div>
                <div className={styles.item}>
                  <a href="#" className={`${styles.title} ${styles.gPlay}`} aria-label="Google Play">Google Play</a>
                  <div className={styles.qrCode} aria-label="QR code for Google Play">
                    <div className={styles.qrPlaceholder} />
                  </div>
                </div>
              </div>
              <div className={styles.bottomBlock}>Launching soon on the App Store &amp; Google Play</div>
            </div>
          </div>
        </nav>

        {/* Burger */}
        <button
          className={styles.btnBurger}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        />
      </div>
    </header>
  );
}
