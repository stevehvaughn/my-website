import Layout from "@components/Layout";
import Head from "next/head";
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
      <Head>
        <title>Projects | Steve Vaughn</title>
        <meta name="description" content="A showcase of web development projects by Steve Vaughn, including client work, personal experiments, and open-source contributions." />
      </Head>
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
    </Layout>
  )
}
