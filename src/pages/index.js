import Image from "next/image"
import Layout from "@components/components/Layout";
import Link from 'next/link';
import headshotPic from '../../public/steve-headshot-portrait-short.png'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout criteria={'home'}>
      <header className={styles.header}>
        <h1>Hi, my name is Steven Vaughn</h1>
      </header>
      <section className={styles.home}>
        <div className={[styles.details_wrapper, styles.web].join(' ')}>
          <p>I am a </p>
          <h2>Front-End Web Developer</h2>
          <p>that specializes in creating engaging and responsive websites.</p>
          <Link href='/web'>See My Portfolio</Link>
        </div>
        <div className={styles.image_wrapper}>
          <Image
            src={headshotPic}
            alt='Steve Vaughn Headshot'
            priority
          />
        </div>
        <div className={[styles.details_wrapper, styles.music].join(' ')}>
          <p>I am a</p>
          <h2>Professional Musician</h2>
          <p>that has performed with symphony orchestras and bands across the United States and abroad.</p>
          <Link href='/music'>See My Music</Link>
        </div>
      </section>
    </Layout>
  )
}
