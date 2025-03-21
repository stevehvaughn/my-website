import styles from "@styles/PageIntro.module.scss";

export default function PageIntro({ title, subtitle }) {
  return (
    <section className={styles.intro}>
      <h1 className={styles.pageTitle}>{title}</h1>
      {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
    </section>
  );
}
