import Layout from "@components/layout"
import UpcomingPerformanceCard from "@components/UpcomingPerformanceCard";
import ContactMe from "@components/ContactMe";
import performHeroImage from "@public/perform_hero_image_desktop.webp"
import Hero from "@components/Hero";
import prisma from '@lib/prisma';
import styles from "@styles/Perform.module.scss"
import landingPageStyles from "@styles/LandingPage.module.scss";

export default function concerts({ upcomingPerformances }) {
  return (
    <Layout criteria='music'>
      <Hero
        src={performHeroImage}
        alt={"UNC Brass Quintet Performing in Campus Commons Performance Hall in Greeley, Colorado"}
        title="Concerts"
      />
      <section className={landingPageStyles.text_wrapper}>
        <p>I am a regular musician with the Fort Collins Symphony and the Fountain City Brass Band. However, I also am asked to play with various other ensembles as a substitute or extra musician.</p>
        <p>Some of the groups I have performed with include the Colorado Symphony, Colorado Springs Philharmonic, Boulder Philharmonic, Colorado Wind Ensemble, and many others!</p>
        <p>I also am available to give masterclasses and/or recitals at your high school or university!</p>
        <p>Please do not hesitate to send me a message if you want to have me perform with your group, or come out to your school!</p>
      </section>
      {upcomingPerformances !== undefined ??
        <section className={styles.performances}>
          <h2>Upcoming Performances</h2>
          <article className={styles.upcoming_grid}>
            {upcomingPerformances.map(performance => (
              <UpcomingPerformanceCard
                key={performance.title}
                performance={performance}
              />
            ))}
          </article>
        </section>
      }
      <ContactMe
        heading={"Contact Me"}
      />
    </Layout >
  )
}

export const getStaticProps = async () => {
  try {
    const data = await prisma.performance.findMany({
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
    return {
      props: {
        upcomingPerformances: JSON.parse(JSON.stringify(data)),
        revalidate: 10
      }
    }
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error('The supabase database has been paused');
    } else {
      console.error('Error fetching data:', error);
    }
    return {
      props: {
        error: 'Error fetching data'
      }
    };
  } finally {
    await prisma.$disconnect();
  }
};