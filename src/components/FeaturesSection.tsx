"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    img: "/ft-img-1.svg",
    title: "Compatibility Matches",
    info: "They love dogs, you love cats — will it work?",
    alt: "Compatibility Matches illustration",
  },
  {
    img: "/ft-img-4.svg",
    title: "Safety Checks for Secure Dating",
    info: "To keep scammers, spammers, and other bummers away",
    alt: "Safety Checks illustration",
  },
  {
    img: "/ft-img-2.svg",
    title: "Icebreakers to Start Conversations",
    info: "You don't need a polar bear to break the ice!",
    alt: "Icebreakers illustration",
  },
  {
    img: "/ft-img-3.svg",
    title: "Data-Backed Dating Tips",
    info: "Data-backed ideas for your online dating app profile",
    alt: "Dating Tips illustration",
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#9677ff] py-[100px] lg:py-[150px] overflow-hidden" id="features" aria-label="SugarBeet features">
      <div className="max-w-[1600px] mx-auto  flex flex-col gap-12 lg:gap-20">

        <h2 className="text-white font-[900] px-8 lg:px-[100px] tracking-[-0.02em] leading-[0.96] text-[clamp(45px,8vw,80px)] lg:text-[130px] lg:leading-[117px] m-0">
          Easy and Safe <br />Features of <br /><b className="text-black">SugarBeet Dating App</b>
        </h2>

        {/* Horizontal scroll container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 lg:gap-10 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {FEATURES.map((f, i) => (
            <motion.article
              className="flex-none flex flex-col w-[300px] md:w-[400px] lg:w-[500px] snap-start"
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <div className="w-full aspect-[385/454]">
                <Image
                  src={f.img}
                  alt={f.alt}
                  width={500}
                  height={590}
                  className="w-full h-full object-contain object-left-top"
                  loading="lazy"
                />
              </div>
              <h3 className="block font-[900] text-[26px] lg:text-[42px] leading-[1.04] text-left mt-8 mb-3 pl-5 text-black">
                {f.title}
              </h3>
              <span className="block font-[400] text-[18px] lg:text-[24px] leading-[1.35] text-left pl-5 text-black/90">
                {f.info}
              </span>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Giant CTA Button */}
      <div className="max-w-[1600px] mx-auto px-8 lg:px-[100px] mt-12">
        <a
          href="#download"
          className="relative flex items-center justify-center w-full rounded-[48px] md:rounded-[80px] h-[150px] lg:h-[250px] bg-black text-[clamp(28px,4vw,56px)] font-[900] leading-[1.05] text-center text-white transition-all duration-500 ease-[cubic-bezier(0.21,0.68,0.41,0.83)] z-[1] overflow-hidden no-underline hover:text-white! focus:text-white group px-[30px] md:px-0"
          aria-label="SugarBeet dating app coming soon"
        >
          SugarBeet dating app coming SOON
          <span className="absolute bottom-0 left-0 right-0 content-[''] bg-[#e37dd3] transition-all duration-400 ease-[cubic-bezier(0.21,0.68,0.41,0.83)] scale-y-[0.8] h-0 z-[-1] rounded-t-[80%] group-hover:h-full group-hover:scale-y-[1.5] group-focus:h-full group-focus:scale-y-[1.5]"></span>
        </a>
      </div>
    </section>
  );
}
