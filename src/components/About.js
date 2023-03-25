import styles from "@styles/About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <header>
        <h2>About Me</h2>
      </header>
      <div className={styles.about_content}>
        <p>I am a classical musician turned software engineer!</p>
        <p>I spent the first part of my life passionately pursuing a career in music, until deciding to explore another hobby of mine -- software engineering -- as my full-time career.</p>
        <p>Though I work full-time now with a marketing company building websites for clients, I still make music a priority in my life by performing with world-class ensembles and teaching part-time at a local university.</p>
      </div>
    </section>
  )
}
