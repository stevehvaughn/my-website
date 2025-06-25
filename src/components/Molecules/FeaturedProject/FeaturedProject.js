// components/FeaturedProject.js
import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedProject.module.scss";

export default function FeaturedProject({ proj, reversed = false }) {
  return (
    <div
      className={`${styles.featuredProject} ${
        reversed ? styles.reversed : ""
      }`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={proj.image}
          alt={`Screenshot of ${proj.name}`}
          fill
          className={styles.image}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.tag}>Featured Project</span>
        <h3>{proj.name}</h3>
        <p className={styles.description}>{proj.description}</p>
        <Link href={proj.url} className={styles.link} target="_blank">
          View Site
        </Link>
      </div>
    </div>
  );
}
