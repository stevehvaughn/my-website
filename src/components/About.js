import styles from "@styles/About.module.scss";
import Link from "next/link";

export default function about() {
  return (
    <section className={styles.about}>
      <header>
        <h2>About Me</h2>
      </header>
      <div className={styles.about_content}>
        <p>I am a classical musician turned software engineer</p>
        <br />
        <p>I spent the first part of my life passionately pursuing a career in music, until deciding to explore a new career field that has always intrigued me -- Software Engineering.</p>
        <br />
        <p>Currently I work full-time building websites for <Link href={'https://www.milespartnership.com/'}>Miles Partnership</Link>, a marketing company in the travel and tourism industry.</p>
        <br />
        <p>I still keep music a priority in my life and enjoy performing with world-class ensembles such as the <Link href={'https://fcsymphony.org/'}>Fort Collins Symphony</Link> & <Link href={'https://fcbb.net/'}>Fountain City Brass Band</Link>. I also teach the tuba and euphonium students at the <Link href={'https://arts.unco.edu/music/brass/'}>University of Northern Colorado</Link> and perform in the faculty brass quintet.</p>
      </div>
    </section>
  )
};