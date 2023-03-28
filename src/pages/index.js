import Image from "next/image"
import Layout from "@components/layout";
import About from "@components/about";
import Link from 'next/link';
import headshotPic from '../../public/steve-headshot-portrait-short.png'
import styles from '@styles/Home.module.scss'
import Date from "@components/date";
import utilStyles from '@styles/utils.module.scss';
import { getSortedPostsData } from '@utils/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout criteria="home">
      <div className={styles.home}>
        <header className={styles.home_header}>
          <p>Hi, my name is</p>
          <h1>Steven Vaughn</h1>
        </header>
        <section className={styles.home_content}>
          <div className={[styles.details_wrapper, styles.web].join(' ')}>
            <p>I am a </p>
            <h2>Front-End Web Developer</h2>
            <p>that specializes in creating pixel-perfect websites that are responsive, accessible, and eye-popping.</p>
            <Link href='/dev'>See My Portfolio</Link>
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
            <p>that performs across the United States and abroad and teaches at the University of Northern Colorado.</p>
            <Link href='/music'>See My Music</Link>
          </div>
        </section>
        <About />
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
