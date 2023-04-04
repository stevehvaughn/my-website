import Layout from "@components/layout"

import Date from "@components/date";
import prisma from '@lib/prisma';

export default function perform({ allPerformances }) {
  return (
    <Layout criteria='music'>
      <h1>Upcoming Performances</h1>
      <div>
        {allPerformances.map(performance => (
          <article key={performance.title}>
            <h2>{performance.title}</h2>
            <div>
              {/* <Image
                src={performance.ensemble.logo}
                alt={`${performance.ensemble.name} logo`}
                height={50}
                width={50}
              /> */}
              <p>{performance.ensemble.name}</p>
            </div>
            <div>
              {performance.dates.length > 1 ?
                <div>
                  <Date dateString={performance.dates[0]} /> - <Date dateString={performance.dates.at(-1)} />
                </div> :
                <Date dateString={performance.dates[0]} />
              }
            </div>
            <p>{performance.venue.name}</p>
            <p>{performance.venue.address}</p>
            <div>
              {performance.repertoire.map(piece => (
                <p key={piece.composition}>{piece.composition} by {piece.composer}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPerformances = await prisma.performance.findMany({
    // where: { published: true },
    include: {
      ensemble: {
        select: { name: true, website: true, category: true },
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