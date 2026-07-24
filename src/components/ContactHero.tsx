import Image from "next/image";
import ContactForm from "./ContactForm";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero} aria-label="Contact Sugarbeet">
      <div className={styles.bg}>
        <Image
          src="/contact-hero.webp"
          alt="Two friends laughing together outdoors"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={styles.bgImg}
        />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Lettuce hear from You</h1>
          <p className={styles.tagline}>
            Got a question? A suggestion? Just want to say &ldquo;hey, beet
            friend&rdquo;? Or feedback that&rsquo;s radish-ly honest — we&rsquo;re
            here for it.
          </p>
        </div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
