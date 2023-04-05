import Layout from "@components/layout"
import UpcomingPerformanceCard from "@components/UpcomingPerformanceCard";
import prisma from '@lib/prisma';
import styles from "@styles/Perform.module.scss"

export default function perform({ upcomingPerformances }) {
  return (
    <Layout criteria='music'>
      <section className={styles.performances}>
        <h1>Upcoming Performances</h1>
        <article className={styles.upcoming_grid}>
          {upcomingPerformances.map(performance => (
            <UpcomingPerformanceCard
              performance={performance}
            />
          ))}
        </article>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const upcomingPerformances = await prisma.performance.findMany({
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
    props: { upcomingPerformances: JSON.parse(JSON.stringify(upcomingPerformances)) }
  };
};