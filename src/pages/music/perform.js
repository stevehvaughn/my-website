import Layout from "@components/layout"
import { getAllPerformances } from '@utils/performances';
import Date from "@components/date";

export default function perform({ allPerformances }) {
  return (
    <Layout criteria='music'>
      <h1>Upcoming Performances</h1>
      <div>
        {allPerformances.map(performance => (
          <article>
            <header>
              <h2>{performance.title}</h2>
              <h5>
                {performance.dates.map(item => (
                  <Date dateString={item} />
                ))}
              </h5>
            </header>
            <div>
              <p>{performance.venue.name}</p>
              <p>{performance.venue.address}</p>
            </div>
            <div>
              <span>with the </span>
              <span>{performance.ensemble.name}</span>
            </div>
            <div>
              <h5>Repertoire:</h5>
              {performance.repertoire.map(piece => (
                <div>{piece.composition} by {piece.composer}</div>
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