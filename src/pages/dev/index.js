import Layout from "@components/Layout";
import Hero from "@components/Organisims/Hero/Hero";
import Link from "next/link";
import img from "@public/dev_landing.jpg";
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
      <Hero
        src={img}
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
              , I specialize in crafting elegant, accessible, and scalable component-based user interfaces. Explore my work, the technologies I use, and the projects that define my passion for creating intuitive digital experiences.
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
