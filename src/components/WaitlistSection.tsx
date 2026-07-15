"use client";
import { useState } from "react";
import styles from "./WaitlistSection.module.css";

type Status = "idle" | "submitting" | "done";

/**
 * Waitlist / "download" section. This is the anchor target (#download) for
 * every "Coming Soon" / "Explore Now" CTA on the site, so it must render on the
 * home page (sub-page CTAs point at /#download).
 *
 * NOTE: submission is front-end only for now — it validates and confirms, but
 * nothing is persisted. Wire onSubmit to a real endpoint (e.g. POST /api/waitlist)
 * before launch.
 */
export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("submitting");
    // TODO: replace with a real waitlist request before launch.
    window.setTimeout(() => setStatus("done"), 900);
  };

  return (
    <section className={styles.section} id="download" aria-label="Join the SugarBeet waitlist">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Launching soon on iOS &amp; Android</span>
        <h2 className={styles.title}>
          Be first to <b>date as you are</b>
        </h2>
        <p className={styles.sub}>
          SugarBeet isn&rsquo;t live just yet. Drop your email and we&rsquo;ll
          let you know the moment the app lands — no spam, just the launch.
        </p>

        {status === "done" ? (
          <div className={styles.success} role="status" aria-live="polite">
            <span className={styles.check} aria-hidden="true" />
            You&rsquo;re on the list! We&rsquo;ll be in touch soon. 🌱
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.fieldRow}>
              <input
                className={`${styles.input} ${error ? styles.inputError : ""}`}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@email.com"
                aria-label="Email address"
                aria-invalid={!!error}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
              />
              <button
                type="submit"
                className={styles.button}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Joining…" : "Join the waitlist"}
              </button>
            </div>
            {error && (
              <span className={styles.error} role="alert">
                {error}
              </span>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
