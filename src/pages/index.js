import Image from "next/image"
import headshotPic from '../../public/steve-headshot-portrait.png'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <header>
        <h1>Hi, my name is Steven Vaughn</h1>
      </header>
      <section className={styles.home}>
        <div className={styles.details_wrapper}>
          <p>I am a </p>
          <h3>Front-End Web Developer</h3>
          <p>that specializes in creating engaging and responsive websites.</p>
          <button>click to see more web development work</button>
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src={headshotPic}
            alt='Steve Vaughn Headshot'
            priority
          />
        </div>
        <div className={styles.details_wrapper}>
          <p>I am a</p>
          <h3>Professional Musician</h3>
          <p>that has performed with symphony orchestras and bands across the United States and Internationally</p>
          <button>click to see more music</button>
        </div>
      </section>
    </>
  )
}
