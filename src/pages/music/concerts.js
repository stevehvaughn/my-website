import Layout from "@components/layout"
import UpcomingPerformanceCard from "@components/UpcomingPerformanceCard";
import performHeroImage from "@public/perform_hero_image_desktop.webp"
import Hero from "@components/Hero";
import prisma from '@lib/prisma';
import styles from "@styles/Perform.module.scss"

export default function concerts({ upcomingPerformances }) {
  return (
    <Layout criteria='music'>
      <Hero
        src={performHeroImage}
        alt={"UNC Brass Quintet Performing in Campus Commons Performance Hall in Greeley, Colorado"}
        title="Concerts"
      />
      <section className={styles.text_wrapper}>
        <p>I am a regular musician with the Fort Collins Symphony and the Fountain City Brass Band. However, I also am asked to play with various other ensembles as a substitute or extra musician.</p>
        <p>Some of the groups I have performed with include the Colorado Symphony, Colorado Springs Philharmonic, Boulder Philharmonic, Colorado Wind Ensemble, and many others!</p>
      </section>
      <section className={styles.performances}>
        <h2>Upcoming Performances</h2>
        <article className={styles.upcoming_grid}>
          {upcomingPerformances.map(performance => (
            <UpcomingPerformanceCard
              performance={performance}
            />
          ))}
        </article>
      </section>
      <section>
        <h2>Contact Me</h2>
      </section>
    </Layout >
  )
}

export const getStaticProps = async () => {
  try {
    const { data, errors } = await prisma.performance.findMany({
      where: {
        startDate: { gte: new Date() } // only pulls in performances in the future
      },
      orderBy: {
        startDate: 'asc' // sort by date
      },
      include: {
        ensemble: {
          select: { name: true, website: true, category: true, logo: true },
        },
        venue: {
          select: { name: true, addressLine1: true, addressLine2: true }
        },
        repertoire: {
          select: { composition: true, composer: true, genre: true }
        }
      },
    });
    if (errors || !data) {
      return { notFound: true };
    }
    return { props: { upcomingPerformances: JSON.parse(JSON.stringify(data)) } }
  } catch (e) {
    return { notFound: true }
  }
};