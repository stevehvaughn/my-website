import Layout from "@components/Layout";
import Hero from "@components/Hero/Hero";
import Link from "next/link";
import img from "@public/dev_landing.jpg";
import styles from "@styles/DevLanding.module.scss";
import projects from "@utils/projects"; // 🔥 pull in all projects
import { TechItem } from "@components/TechItem/TechItem";
import technologies from "@utils/technologies";
import Intro from "@components/Intro/Intro";

export default function Dev() {
  const featuredProjects = projects.filter((proj) => proj.featured);

  return (
    <Layout criteria="dev">
      <Hero
        src={img}
        alt="Turned on MacBook Air beside black smartphone and black ceramic mug"
        title="Steve Vaughn - Developer"
      />

      <section className={styles.wrapper}>
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
      </section>

      <section className={styles.wrapper}>
        <h2>⚙️ Technologies I Use</h2>
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className={styles.techGroup}>
            <h3>{category}</h3>
            <div className={styles.techGrid}>
              {items.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.wrapper}>
        <h2>🧩 Featured Projects</h2>
        {featuredProjects.length > 0 ? (
          <div className={styles.featuredGrid}>
            {featuredProjects.map((proj) => (
              <div key={proj.name} className={styles.card}>
                <div className={styles.screenshotPlaceholder}>
                  <img
                    src={proj.image}
                    alt={`Screenshot of ${proj.name}`}
                    className={styles.projectImage}
                  />
                </div>
                <h3>{proj.name}</h3>
                <p>{proj.description}</p>
                <p>
                  <strong>Role:</strong> {proj.role}
                </p>
                <Link href={proj.url} className={styles.link} target="_blank">
                  View Site →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No featured projects available at the moment. Check back soon!</p>
        )}
        <div className={styles.viewAllLink}>
          <Link href="/dev/projects" className={styles.link}>
            View All Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
