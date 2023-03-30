import Layout from "@components/layout"
import Image from "next/image";
import { getAllPerformances } from '@utils/performances';
import Date from "@components/date";

export default function perform({ allPerformances }) {
  return (
    <Layout criteria='music'>
      <h1>Upcoming Performances</h1>
      <div>
        {allPerformances.map(performance => (
          <article>
            <div>
              <Image
                src={performance.ensemble.logo}
                alt={`${performance.ensemble.name} logo`}
                height={50}
                width={50}
              />
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
            <h2>{performance.title}</h2>
            <div>
              {performance.repertoire.map(piece => (
                <p>{piece.composition} by {piece.composer}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPerformances = getAllPerformances();

  return {
    props: {
      allPerformances
    }
  }
}