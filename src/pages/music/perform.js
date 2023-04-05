import Layout from "@components/layout"
import UpcomingPerformanceCard from "@components/UpcomingPerformanceCard";
import prisma from '@lib/prisma';

export default function perform({ allPerformances }) {
  return (
    <Layout criteria='music'>
      <h1>Upcoming Performances</h1>
      <section>
        {allPerformances.map(performance => (
          <UpcomingPerformanceCard
            performance={performance}
          />
        ))}
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPerformances = await prisma.performance.findMany({
    where: {
      startDate: { gte: new Date() }
    },
    include: {
      ensemble: {
        select: { name: true, website: true, category: true, logo: true },
      },
      venue: {
        select: { name: true, address: true }
      },
      repertoire: {
        select: { composition: true, composer: true, genre: true }
      }
    },
  });
  return {
    props: { allPerformances: JSON.parse(JSON.stringify(allPerformances)) }
  };
};