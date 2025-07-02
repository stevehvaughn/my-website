import Layout from "@components/Layout"
import Head from "next/head";
import Hero from "@components/Organisims/Hero/Hero"
import ContactMe from "@components/Organisims/ContactMe/ContactMe";
import styles from "@styles/LandingPage.module.scss";

export default function Teaching() {
  return (
    <Layout criteria='music'>
      <Head>
        <title>Teaching | Steve Vaughn</title>
        <meta name="description" content="Discover Steve Vaughn’s approach to teaching brass performance and pedagogy, including his experience in private instruction and university-level education." />
      </Head>
      <Hero
        src="/teaching_hero_image.jpg"
        alt="Teaching the Phantom Regiment tuba section in front of Ralph Wilson Stadium in Buffalo, NY"
        title="Teaching"
        objPosition="bottom center"
      />
      <section className={styles.components}>
        <div className="add-top add-bottom">
          <h2>Teaching Experience</h2>
          <p>As a teacher I have enjoyed educating future musicians through many different scenarios</p>
          <p>I teach university Tuba and Euphonium students at the University of Northern Colorado</p>
          <p>I have taught in public schools as a Band/Orchestra director</p>
          <p>I have been on staff with multiple DCI and DCA drum corps, and taught numerous high school marching bands across Colorado</p>
          <p>I have been a sectional coach for various summer music academys and high schools during the academic year</p>
          <p>I teach private lessons to high school students to prepare for Regional and State Band auditions</p>
          <p>Please do not hesitate to send me a message if you are interested in having a lesson with me!</p>
        </div>
        <ContactMe
          heading={"Get in touch!"}
          subtitle={"Looking for private lessons, or want to invite me to teach a masterclass at your school?"}
        />
      </section>
    </Layout>
  )
}
