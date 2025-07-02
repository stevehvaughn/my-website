import Layout from "@components/Layout"
import Head from "next/head";
import Hero from "@components/Organisims/Hero/Hero"
import Intro from "@components/Molecules/Intro/Intro"
import styles from "@styles/LandingPage.module.scss";

export default function Music() {
  return (
    <Layout criteria={'music'}>
      <Head>
        <title>Music | Steve Vaughn</title>
        <meta name="description" content="Steve Vaughn is an accomplished musician and educator. Explore his performance background, concerts, and teaching philosophy." />
      </Head>
      <Hero
        src="/eastman_tuba.jpeg"
        alt={"Eastman 836 Tuba closeup"}
        title={"Steve Vaughn - Musician"}
      />
      <section className={styles.components}>
        <Intro
          eyebrow="Music"
          heading="Welcome to my Musician Page"
          body={[
            "I’m a professional tubist and euphoniumist performing across the United States and abroad.",
            "My work spans orchestral, chamber, and brass band settings — as well as being committed to music education"
          ]}
        />
      </section>
    </Layout>
  )
}
