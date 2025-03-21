import Layout from "@components/Layout"
import Hero from "@components/Hero/Hero"
import ContactMe from "@components/ContactMe/ContactMe";
import teachingHeroImage from "@public/teaching_hero_image.jpg";
import landingPageStyles from "@styles/LandingPage.module.scss";

export default function Teaching() {
  return (
    <Layout criteria='music'>
      <Hero
        src={teachingHeroImage}
        alt="Teaching the Phantom Regiment tuba section in front of Ralph Wilson Stadium in Buffalo, NY"
        title="Teaching"
        objPosition="bottom center"
      />
      <section className={landingPageStyles.text_wrapper}>
        <h2>Teaching Experience</h2>
        <p>As a teacher I have enjoyed educating future musicians through many different scenarios</p>
        <p>I teach university Tuba and Euphonium students at the University of Northern Colorado</p>
        <p>I have taught in public schools as a Band/Orchestra director</p>
        <p>I have been on staff with multiple DCI and DCA drum corps, and taught numerous high school marching bands across Colorado</p>
        <p>I have been a sectional coach for various summer music academys and high schools during the academic year</p>
        <p>I teach private lessons to high school students to prepare for Regional and State Band auditions</p>
        <p>Please do not hesitate to send me a message if you are interested in having a lesson with me!</p>
      </section>
      <ContactMe
        heading={"Get in touch!"}
        subtitle={"Looking for private lessons, or want to invite me to teach a masterclass at your school?"}
      />
    </Layout>
  )
}
