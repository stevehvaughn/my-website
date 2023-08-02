import Image from "next/image"
import Layout from "@components/layout";
import About from "@components/about";
import Link from 'next/link';
import headshotPic from '../../public/steve-headshot-portrait-short.webp'
import styles from '@styles/Home.module.scss'
import Date from "@components/date";
import { getSortedPostsData } from '@utils/posts';

export async function getStaticProps() {
  // pass in a string with the category to filter by that post, leave empty to get all posts
  // i.e.: getSortedPostsData("music")
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
          <div className='heading-m-med'>Hi, my name is</div>
          <h1>Steven Vaughn</h1>
        </header>
        <section className={styles.home_content}>
          <div className={[styles.details_wrapper, styles.web].join(' ')}>
            <p>I am a </p>
            <h2>Software Engineer</h2>
            <p>that specializes in building pixel-perfect websites that are responsive, accessible, and focused on the user experience.</p>
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
            <p>that performs across the United States and abroad, while also teaching future musicians as a university professor.</p>
            <Link href='/music'>See my Music</Link>
          </div>
        </section>
        <About />
        {/* <ul>
          {allPostsData.map(({ id, date, title, category }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/${category}/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dates={date} />
              </small>
            </li>
          ))}
        </ul> */}
      </div>
    </Layout>
  )
}
