"use client";
import styles from "./ValuePropSection.module.css";

export default function ValuePropSection() {
  return (
    <div className={styles.bottomBanner} aria-label="Be You Value Proposition">
      <div className={styles.wrapper}>
        <h2>
          Be You and Get the Best Experience from <b>Dating Apps</b>
        </h2>
        <div className={styles.top}>
          <p>
            Enjoying yourself on dates is simple. All you need is to be genuine, be yourself, and don't be an ass to other people. Try SugarBeet, and you'll become part of a dating community where authentic people are looking for real connections.
          </p>
          <p>
            Discover how to get the most out of your dating life with SugarBeet, your next favorite dating app that prioritizes authenticity.
          </p>
        </div>
        <p>
          <a className={`${styles.btn} btn download-explore-button`} href="#download">
            Show More
          </a>
        </p>
      </div>
    </div>
  );
}
