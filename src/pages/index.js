import Image from "next/image"
import Layout from "@/components/Layout";
import About from "@/components/Organisims/About/About";
import Link from 'next/link';
import styles from '@/styles/Home.module.scss'
import Date from "@/components/Date/Date";
import { getSortedPostsData } from '@/utils/posts';

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
          <div className='heading-l-med'>Hi, my name is</div>
          <h1 className='display-l'>Steve Vaughn</h1>
        </header>
        <section className={styles.home_content}>
          <div className={[styles.details_wrapper, styles.web].join(' ')}>
            <div className='heading-m'>I am a</div>
            <h2>Software Engineer</h2>
            <div className='heading-xs'>that specializes in building pixel-perfect websites that are responsive, accessible, and focused on the user experience.</div>
            <Link href='/dev'>See My Portfolio</Link>
          </div>
          <div className={styles.image_wrapper}>
            <Image
              src="/home_image.png"
              alt='Steve Vaughn Headshot'
              fill
              priority
            />
          </div>
          <div className={[styles.details_wrapper, styles.music].join(' ')}>
            <div className='heading-m'>I am a</div>
            <h2>Professional Musician</h2>
            <div className='heading-xs'>that performs across the United States and abroad, and teaches aspiring young musicians.</div>
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
