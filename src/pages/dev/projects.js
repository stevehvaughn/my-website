import Layout from "@components/Layout";
import projects from "@utils/projects";
import styles from "@styles/LandingPage.module.scss";
import ContactMe from "@components/Organisims/ContactMe/ContactMe";
import Hero from "@components/Organisims/Hero/Hero";

export async function getStaticProps() {
  return {
    props: { projects },
  }
}

export default function Projects({ projects }) {
  return (
    <Layout criteria="dev">
      <div>
        <Hero
          title="Projects"
          objPosition="bottom center"
        />
        <div className={styles.components}>
          <ul>
            {projects.map((proj) => (
              <li key={proj.name}>
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  {proj.name}
                </a>{" "}
                – {proj.client}
              </li>
            ))}
          </ul>
          <section className={styles.ctaDev}>
            <h2>Let’s Collaborate</h2>
            <p>
              I'm always open to new front-end projects, creative tech collaborations, and conversations with fellow developers. If you're building something and need thoughtful UI development — let’s chat.
            </p>
          </section>

          <ContactMe
            heading="Contact Me"
            subtitle="Reach out about tech projects, contract work, or to say hello."
          />
        </div>
      </div>
    </Layout>
  )
}
