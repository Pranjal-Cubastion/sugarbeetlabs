"use client";
import Image from "next/image";
import styles from "./BlogSection.module.css";

const POSTS = [
  {
    href: "#",
    img: "/press-1.jpg",
    date: "Jul 08, 2026",
    title: "SugarBeet Dares Daters to Drop the Act with New Anti-Fake Dating Campaign",
  },
  {
    href: "#",
    img: "/press-2.jpg",
    date: "May 22, 2026",
    title: "SugarBeet Reintroduces Its HI-Powered Finder and Chats",
  },
  {
    href: "#",
    img: "/press-3.jpg",
    date: "Jan 29, 2026",
    title: "SugarBeet's New Dating T.R.U.T.H. Report Exposes the Dating-Reality Disconnect",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.mainBlogSection} id="blog" aria-label="Latest updates from SugarBeet">
      <div className={styles.container}>
        <h2>Our hottest updates</h2>
        <p>Explore our latest press releases, surveys, media coverage, and media kit.</p>
      </div>

      <div className={styles.blogContent}>
        <div className={styles.blogGrid}>
          {POSTS.map((p) => (
            <a href={p.href} key={p.title} className={styles.blogGridLink} aria-label={`Read article: ${p.title}`}>
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.blogImg}
              />
              <div className={styles.hoverBlock}>
                <span className={styles.badgeDate}>{p.date}</span>
                <span className={styles.linkTitle}>{p.title}</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.showMoreBlock}>
          <a href="#press" className={styles.showMoreLink}>Press center</a>
        </div>
      </div>
    </section>
  );
}
