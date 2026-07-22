"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.21, 0.68, 0.41, 0.83] as const;

// Secondary palette — one tint per feature card
const FEATURES = [
  {
    img: "/bumble-date.webp",
    title: "Compatibility Matches",
    info: "They love dogs, you love cats — will it work?",
    alt: "Compatibility Matches illustration",
    link: "Find your match",
    bg: "#FFB5D0", // First Pink
  },
  {
    img: "/bumble-date.webp",
    title: "Safety Checks for Secure Dating",
    info: "To keep scammers, spammers, and other bummers away",
    alt: "Safety Checks illustration",
    link: "Stay safe out there",
    bg: "#7C92BF", // Wild Blue Yonder
  },
  {
    img: "/bumble-date.webp",
    title: "Icebreakers to Start Conversations",
    info: "You don't need a polar bear to break the ice!",
    alt: "Icebreakers illustration",
    link: "Break the ice",
    bg: "#D9B8D9", // Thistle
  },
  {
    img: "/bumble-date.webp",
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
      <div className="mx-auto max-w-[1400px] px-[20px] py-[56px] md:px-[50px] md:py-[96px]">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="m-0 mb-[40px] max-w-[1250px] text-[40px] font-extrabold leading-[0.98] tracking-[-0.02em] text-[#141414] md:mb-[64px] md:text-[clamp(56px,5.4vw,104px)]"
        >
          Easy and Safe Features of{" "}
          <b className="font-extrabold text-[#B20051]">SugarBeet Dating App</b>
        </motion.h2>

        {/* Bumble-style feature cards — 2×2 grid */}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[28px]">
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
              className="flex flex-col rounded-[32px] p-[16px] md:p-[24px]"
            >
              {/* Media panel — placeholder art for now */}
              <div className="w-full overflow-hidden rounded-[22px] bg-white">
                <Image
                  src={f.img}
                  alt={f.alt}
                  width={1240}
                  height={660}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex grow flex-col items-start px-[8px] pb-[12px] pt-[24px] md:px-[12px] md:pb-[16px] md:pt-[32px]">
                <h3 className="m-0 text-[26px] font-extrabold leading-[1.05] text-[#141414] md:text-[38px]">
                  {f.title}
                </h3>
                <p className="m-0 mt-[12px] max-w-[560px] text-[17px] font-normal leading-snug text-[#141414]/80 md:text-[20px]">
                  {f.info}
                </p>
                <a
                  href="/about"
                  className="mt-[24px] inline-block text-[16px] font-bold text-[#141414] underline underline-offset-4 transition-colors duration-300 hover:text-[#B20051] md:mt-[32px] md:text-[18px]"
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
