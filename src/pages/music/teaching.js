import Layout from "@components/layout"
import Hero from "@components/Hero"
import ContactMe from "@components/ContactMe";
import teachingHeroImage from "@public/teaching_hero_image.webp";
import landingPageStyles from "@styles/LandingPage.module.scss";

export default function teaching() {
  return (
    <Layout criteria='music'>
      <Hero
        src={teachingHeroImage}
        alt="Teaching the Phantom Regiment tuba section in front of Ralph Wilson Stadium in Buffalo, NY"
        title="Teaching"
      />
      <section className={landingPageStyles.text_wrapper}>
        <p>As a teacher I have enjoyed educating future musicians through many different scenarios</p>
        <p>I teach university Tuba and Euphonium students at the University of Northern Colorado</p>
        <p>I have taught in public schools as a Band/Orchestra director</p>
        <p>I have been on staff with multiple DCI and DCA drum corps, and taught numerous high school marching bands across Colorado</p>
        <p>I have been a sectional coach for various summer music academys and high schools during the academic year</p>
        <p>I teach private lessons to high school students to prepare for Regional and State Band auditions</p>
        <p>Please do not hesitate to send me a message if you are interested in having a lesson with me!</p>
      </section>
      <ContactMe
        heading={"Want a lesson?"}
      />
    </Layout>
  )
}