"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

const SUBJECTS = [
  "I need help with the app",
  "Partnerships",
  "Press & media",
  "I have a privacy question",
  "Report a concern",
  "Something else",
];

type Status = "idle" | "verifying" | "sending" | "sent";

export default function ContactForm() {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [robot, setRobot] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const verifyRobot = () => {
    if (robot || status === "verifying") return;
    setStatus("verifying");
    // Mimic the reCAPTCHA "checking" beat, then tick.
    window.setTimeout(() => {
      setRobot(true);
      setStatus("idle");
    }, 650);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please tell us your name.";
    if (!email.trim()) e.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "That email looks off.";
    if (!message.trim()) e.message = "Add a short message.";
    if (!robot) e.robot = "Please confirm you're human.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1000);
  };

  const reset = () => {
    setSubject(SUBJECTS[0]);
    setName("");
    setEmail("");
    setMessage("");
    setRobot(false);
    setErrors({});
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className={styles.card}>
        <div className={styles.success} role="status" aria-live="polite">
          <span className={styles.successMark} aria-hidden="true" />
          <h2 className={styles.successTitle}>Message sent!</h2>
          <p className={styles.successText}>
            Thanks for reaching out, {name.split(" ")[0] || "friend"}. Our team
            will get back to you within 24&nbsp;hours.
          </p>
          <button type="button" className={styles.sendBtn} onClick={reset}>
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.field}>
          <div className={styles.selectWrap}>
            <select
              className={styles.select}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-label="What can we help with?"
            >
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <input
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            type="text"
            autoComplete="name"
            placeholder="Your name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <input
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            type="email"
            autoComplete="email"
            placeholder="Your email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <textarea
            className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
            placeholder="Your message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <p className={styles.privacy}>
          For information about our privacy practices, please see our{" "}
          <a href="#privacy">Privacy Policy</a>.
        </p>

        {/* reCAPTCHA-style verification (visual replica) */}
        <div className={styles.field}>
          <div className={`${styles.captcha} ${errors.robot ? styles.captchaError : ""}`}>
            <button
              type="button"
              className={styles.captchaBox}
              onClick={verifyRobot}
              aria-pressed={robot}
              aria-label="I'm not a robot"
            >
              <span
                className={`${styles.checkbox} ${robot ? styles.checked : ""} ${
                  status === "verifying" ? styles.spinning : ""
                }`}
              />
            </button>
            <span className={styles.captchaLabel}>I&rsquo;m not a robot</span>
            <span className={styles.captchaLogo} aria-hidden="true">
              <span className={styles.captchaLogoMark} />
              <span className={styles.captchaLogoText}>
                reCAPTCHA
                <small>Privacy · Terms</small>
              </span>
            </span>
          </div>
          {errors.robot && <span className={styles.error}>{errors.robot}</span>}
        </div>

        <button
          type="submit"
          className={styles.sendBtn}
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <span className={styles.btnLoading}>
              <span className={styles.spinner} /> Sending…
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}
