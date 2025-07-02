import Layout from "@components/Layout";
import Head from "next/head";
import Hero from "@components/Organisims/Hero/Hero";
import Link from "next/link";
import styles from "@styles/LandingPage.module.scss";
import projects from "@utils/projects";
import technologies from "@utils/technologies";
import Intro from "@components/Molecules/Intro/Intro";
import FeaturedProject from "@components/Molecules/FeaturedProject/FeaturedProject";
import { TechGroup } from "@components/Organisims/TechGroup/TechGroup";

export default function Dev() {
  const featuredProjects = projects.filter((proj) => proj.featured);

  return (
    <Layout criteria="dev">
      <Head>
        <title>Developer Portfolio | Steve Vaughn</title>
        <meta name="description" content="Explore the work of Steve Vaughn, a front-end developer building accessible, performant digital experiences using modern web technologies." />
      </Head>
      <Hero
        src="/dev_landing.jpg"
        alt="Turned on MacBook Air beside black smartphone and black ceramic mug"
        title="Steve Vaughn - Developer"
      />
      <section className={styles.components}>
        <Intro
          eyebrow="Dev"
          heading="Welcome to My Portfolio"
          body={
            <>
              This is where I showcase my journey as a front-end developer. With over 3 years of experience at{' '}
              <a
                href="https://www.milespartnership.com"
                target="_blank"
                rel="noreferrer"
              >
                Miles Partnership
              </a>
              , I specialize in crafting elegant, accessible, and scalable component-based user interfaces. Explore my work, the technologies I use, and recent projects I have been involved in.
            </>
          }
        />
        <TechGroup items={technologies} />
        {featuredProjects.length > 0 ? (
          <section className={`add-top add-bottom ${styles.featuredGrid}`}>
            <h2>Featured Projects</h2>
            {featuredProjects.map((proj, index) => (
              <FeaturedProject
                key={proj.name}
                proj={proj}
                reversed={index % 2 === 1}
              />
            ))}
            <div className={styles.viewAllLink}>
              <Link href="/dev/projects" className={styles.link}>
                View All Projects
              </Link>
            </div>
          </section>
        ) : (
          <p>No featured projects available at the moment. Check back soon!</p>
        )}
      </section>
    </Layout>
  );
}
