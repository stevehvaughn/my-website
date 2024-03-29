import styles from "@styles/About.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.about}>
      <header>
        <h2>About Me</h2>
      </header>
      <div className={styles.about_content}>
        <div className={styles.about_intro}>
          <p>I am a classical musician turned software engineer</p>
          <p>I spent the first part of my life passionately pursuing a career in music, until deciding to explore a new career field that has always intrigued me -- Software Engineering.</p>
        </div>
        <div className={styles.about_dev}>
          <h3>Steve (the developer)</h3>
          <p>Currently I work full-time as a website developer for <Link href={'https://www.milespartnership.com/'} target="_blank">Miles Partnership</Link>, an industry-leading marketing company in the travel and tourism industry.</p>
          <p>You can see examples of my work on the <Link href="/dev">Portfolio</Link> side of my website.</p>
        </div>
        <div className={styles.about_music}>
          <h3>Steve (the musician)</h3>
          <p>I still keep music a priority in my life and enjoy performing with world-class ensembles such as the <Link href={'https://fcsymphony.org/'} target="_blank">Fort Collins Symphony</Link> as the Principal Tubist and with the <Link href={'https://fcbb.net/'} target="_blank">Fountain City Brass Band</Link> in the Euphonium section. I also teach tuba and euphonium students at the <Link href={'https://arts.unco.edu/music/brass/'} target="_blank">University of Northern Colorado</Link> and perform in the faculty brass quintet.</p>
          <p>You can learn more about my music on the <Link href="/music">Music</Link> side of my website.</p>
        </div>
      </div>
    </section >
  )
};
