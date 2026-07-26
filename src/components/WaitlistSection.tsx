"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.21, 0.68, 0.41, 0.83] as const;

type Status = "idle" | "submitting" | "done";

/**
 * Waitlist section — the anchor target (#download) for every "Coming Soon" /
 * "Explore Now" CTA on the site, so it must render on the home page
 * (sub-page CTAs point at /#download).
 *
 * NOTE: submission is front-end only for now — it validates and confirms, but
 * nothing is persisted. Wire onSubmit to a real endpoint (e.g. POST /api/waitlist)
 * before launch.
 */
export default function WaitlistSection() {
  const reduce = useReducedMotion();
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
    <section
      id="download"
      aria-label="Join the Sugarbeet waitlist"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-[20px] py-[56px] md:px-[50px] md:py-[96px]">
        {/* Big CTA */}
        <motion.a
          href="#waitlist-form"
          aria-label="Sugarbeet dating app coming soon"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="group relative z-[1] flex h-[200px] w-full items-center justify-center overflow-hidden rounded-[32px] bg-[#141414] px-6 text-center text-[clamp(30px,4.4vw,60px)] font-extrabold leading-[1.05] text-white md:h-[280px]"
        >
          <span className="relative z-[1]">
            The beet drops SOON!
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-0 h-0 scale-y-[0.8] rounded-t-[80%] bg-[#B20051] transition-all duration-[400ms] ease-[cubic-bezier(0.21,0.68,0.41,0.83)] group-hover:h-full group-hover:scale-y-[1.5] group-focus-visible:h-full group-focus-visible:scale-y-[1.5]"
          />
        </motion.a>

        {/* Waitlist card — Beet Red */}
        <motion.div
          id="waitlist-form"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          className="mt-[20px] grid grid-cols-1 overflow-hidden rounded-[32px] bg-[#B20051] md:mt-[28px] md:grid-cols-[1.05fr_1fr]"
        >
          {/* Left — copy + form */}
          <div className="flex flex-col justify-center px-[24px] py-[48px] md:px-[56px] md:py-[64px]">
            <h2 className="m-0 whitespace-nowrap text-[clamp(26px,7.4vw,42px)] font-extrabold leading-[0.98] tracking-[-0.02em] text-white md:text-[clamp(38px,3.9vw,56px)]">
              Join the beet-list
            </h2>
            <p className="m-0 mt-[16px] max-w-[460px] text-[17px] font-normal leading-snug text-white/80 md:text-[20px]">
              Sugarbeet isn&rsquo;t live yet, but we&rsquo;re planting the seeds.
              Join the waitlist and be the first to know when we bloom. No spam,
              just fresh launch updates.
            </p>

            {status === "done" ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-[32px] flex items-center gap-[12px] text-[18px] font-bold text-white md:text-[20px]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[16px] font-black text-[#B20051]"
                >
                  ✓
                </span>
                You&rsquo;re on the list! We&rsquo;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-[32px] max-w-[520px]">
                <div className="flex flex-col gap-[12px] sm:flex-row">
                  <input
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
                    className={`h-[60px] flex-1 rounded-full border-2 bg-white px-6 text-[17px] font-medium text-[#141414] outline-none transition-colors duration-300 placeholder:text-[#141414]/40 focus:border-[#141414] ${
                      error ? "border-[#141414]" : "border-transparent"
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="h-[60px] shrink-0 rounded-full bg-[#141414] px-8 text-[17px] font-extrabold text-white transition-transform duration-300 hover:scale-[1.03] disabled:opacity-70"
                  >
                    {status === "submitting" ? "Joining…" : "Join the beet-list"}
                  </button>
                </div>
                {error && (
                  <span
                    role="alert"
                    className="mt-[8px] block pl-[24px] text-[14px] font-semibold text-white"
                  >
                    {error}
                  </span>
                )}
              </form>
            )}
          </div>

          {/* Right — media */}
          <div className="relative min-h-[320px] md:min-h-[460px]">
            <Image
              src="/ftrrr.png"
              alt="The Sugarbeet app shown on three phones"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
