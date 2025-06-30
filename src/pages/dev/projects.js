import Layout from "@components/Layout";
import projects from "@utils/projects";
import styles from "@styles/LandingPage.module.scss";
import ContactMe from "@components/Organisims/ContactMe/ContactMe";
import Hero from "@components/Organisims/Hero/Hero";
import ProjectList from "@components/Organisims/ProjectList/ProjectList";

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
          <ProjectList projects={projects} />
          <ContactMe
            heading="Contact Me"
            subtitle="Reach out about tech projects, contract work, or to say hello."
          />
        </div>
      </div>
    </Layout>
  )
}
