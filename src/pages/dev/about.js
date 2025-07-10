import Layout from "@/components/Layout";
import Head from "next/head";
import Hero from "@/components/Organisims/Hero/Hero";
import ContactMe from "@/components/Organisims/ContactMe/ContactMe";
import styles from "@/styles/LandingPage.module.scss";

export default function About() {
  return (
    <Layout criteria="dev">
      <Head>
        <title>About Me | Steve Vaughn</title>
        <meta name="description" content="Learn about Steve Vaughn — a developer with a background in music and education, now creating impactful websites and digital solutions." />
      </Head>
      <Hero
        title="About Me"
        objPosition="bottom center"
      />
      <div className={styles.components}>
        <section className="add-top add-bottom">
          <h2>Professional Overview</h2>
          <p>
            {`I'm a software engineer with a background in the arts and education, currently focused on front-end web development. Over the past four years, I've helped build user-friendly, high-performance websites that support destination marketing organizations and public-sector clients.`}
          </p>

          <p>
            {`I specialize in modern JavaScript development, with expertise in frameworks like Next.js and libraries such as React. My current work at Miles Partnership involves traditional and decoupled Drupal development, performance optimization, accessibility, and component-based design systems. I'm equally comfortable diving into both front-end and back-end tasks as the project demands it.`}
          </p>

          <h2>How I Work</h2>
          <p>
            {`My approach to development is collaborative and user-centered. I thrive at the intersection of design and engineering, and I'm passionate about building digital experiences that are accessible, responsive, engaging, and easy to maintain. I work well across disciplines—translating complex technical concepts into clear solutions for stakeholders and helping designers and clients bring their visions to life.`}
          </p>

          <p>
            {`I take pride in writing clean, reusable code and thinking critically about how systems scale and evolve. Whether I'm contributing to an enterprise-level CMS, auditing Lighthouse scores, or helping shape a design system, my goal is to deliver thoughtful, performant solutions.`}
          </p>

          <h2>Previous Experience</h2>
          <p>
            {`Before transitioning into tech, I worked as a professional musician and university educator. That experience sharpened my ability to listen, adapt, and lead—skills that directly inform how I collaborate in agile development teams today. While my day-to-day now involves code instead of music, I carry forward the same discipline, creativity, and commitment to excellence.`}
          </p>
          <h2>Resume</h2>
          <p>
            {`For a full overview of my experience and technical skills, you can download my resume below.`}
          </p>
          <a
            href="/resume-steve-vaughn.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`button`}
          >
            Download My Resume
          </a>
        </section>

        <ContactMe
          heading="Let's Connect"
          subtitle="I'm always open to connecting with others in the tech community—whether it's discussing contract opportunities, development best practices, or accessibility in digital platforms. Feel free to reach out below."
        />
      </div>
    </Layout>
  );
}
