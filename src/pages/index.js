import Image from "next/image"
import headshotPic from '../../public/steve-headshot-portrait.png'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.details_wrapper}>
        <p>I am a </p>
        <h3>Front-End Web Developer</h3>
        <p>that specializes in creating engaging and responsive websites.</p>
      </div>
      <div className={styles.image_wrapper}>
        <h1>Hi, I'm Steven Vaughn</h1>
        <Image
          src={headshotPic}
          alt='Steve Vaughn Headshot'
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
          priority
        />
      </div>
      <div className={styles.details_wrapper}>
        <p>I am a</p>
        <h3>Professional Musician</h3>
        <p>that has performed with symphony orchestras and bands across the United States and Internationally</p>
      </div>
    </section>
  )
}
