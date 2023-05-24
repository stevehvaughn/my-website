import Layout from "@components/layout"
import Hero from "@components/Hero"
import teachingHeroImage from "@public/teaching_hero_image.webp";

export default function teaching() {
  return (
    <Layout criteria='music'>
      <Hero
        src={teachingHeroImage}
        alt="Teaching the Phantom Regiment tuba section in front of Ralph Wilson Stadium in Buffalo, NY"
        title="Teaching"
      />
      <section>
        <p>As a teacher I have enjoyed educating future musicians through many different scenarios</p>
        <ul>
          <li>I teach university Tuba and Euphonium students at the University of Northern Colorado</li>
          <li>I have taught in public schools as a Band/Orchestra director</li>
          <li>I have been on staff with multiple DCI and DCA drum corps, and taught numerous high school marching bands across Colorado</li>
          <li>I have been a sectional coach for various summer music academys and high schools during the academic year</li>
          <li>I teach private lessons to high school students to prepare for Regional and State Band auditions</li>
        </ul>
      </section>
      <section>
        <h2>Lessons</h2>
      </section>
    </Layout>
  )
}