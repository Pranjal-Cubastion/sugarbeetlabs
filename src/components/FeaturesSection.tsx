"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.21, 0.68, 0.41, 0.83] as const;

// Secondary palette — one tint per feature card
const FEATURES = [
  {
    img: "/ft-img-1.svg",
    title: "Compatibility Matches",
    info: "They love dogs, you love cats — will it work?",
    alt: "Compatibility Matches illustration",
    link: "Find your match",
    bg: "#FFB5D0", // First Pink
  },
  {
    img: "/ft-img-4.svg",
    title: "Safety Checks for Secure Dating",
    info: "To keep scammers, spammers, and other bummers away",
    alt: "Safety Checks illustration",
    link: "Stay safe out there",
    bg: "#7C92BF", // Wild Blue Yonder
  },
  {
    img: "/ft-img-2.svg",
    title: "Icebreakers to Start Conversations",
    info: "You don't need a polar bear to break the ice!",
    alt: "Icebreakers illustration",
    link: "Break the ice",
    bg: "#D9B8D9", // Thistle
  },
  {
    img: "/ft-img-3.svg",
    title: "Data-Backed Dating Tips",
    info: "Data-backed ideas for your online dating app profile",
    alt: "Dating Tips illustration",
    link: "Get the tips",
    bg: "#6B8372", // Wild Beet Leaf
  },
];

export default function FeaturesSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="features"
      aria-label="SugarBeet features"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-[50px] md:py-28">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="m-0 mb-10 max-w-[1250px] text-[40px] font-extrabold leading-[0.98] tracking-[-0.02em] text-[#141414] md:mb-16 md:text-[clamp(56px,5.4vw,104px)]"
        >
          Easy and Safe Features of{" "}
          <b className="font-extrabold text-[#B20051]">SugarBeet Dating App</b>
        </motion.h2>

        {/* Bumble-style feature cards — 2×2 grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              style={{ backgroundColor: f.bg }}
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 2) * 0.12 }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -8, transition: { duration: 0.3, ease: EASE } }
              }
              className="flex flex-col rounded-[32px] p-4 md:p-6"
            >
              {/* Inner white media panel */}
              <div className="flex items-center justify-center rounded-[22px] bg-white py-8 md:py-10">
                <Image
                  src={f.img}
                  alt={f.alt}
                  width={385}
                  height={454}
                  className="h-40 w-auto md:h-56"
                  loading="lazy"
                />
              </div>

              <div className="flex grow flex-col items-start px-2 pb-3 pt-6 md:px-3 md:pb-4 md:pt-8">
                <h3 className="m-0 text-[26px] font-extrabold leading-[1.05] text-[#141414] md:text-[38px]">
                  {f.title}
                </h3>
                <p className="m-0 mt-3 max-w-[560px] text-[17px] font-normal leading-snug text-[#141414]/80 md:text-[20px]">
                  {f.info}
                </p>
                <a
                  href="/about"
                  className="mt-6 inline-block text-[16px] font-bold text-[#141414] underline underline-offset-4 transition-colors duration-300 hover:text-[#B20051] md:mt-8 md:text-[18px]"
                >
                  {f.link}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
