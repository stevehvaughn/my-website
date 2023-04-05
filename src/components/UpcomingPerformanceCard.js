import DateComponent from "@components/date";
import Image from "next/image";

export default function UpcomingPerformanceCard({ performance }) {
  return (
    <article key={performance.title}>
      <h2>{performance.title}</h2>
      <div>
        <Image
          src={`/../public/logos/${performance.ensemble.logo}`}
          alt={`${performance.ensemble.name} logo`}
          height={50}
          width={50}
        />
        <p>{performance.ensemble.name}</p>
      </div>
      <div>
        {performance.endDate ?
          <div>
            <DateComponent dateString={performance.startDate} /> - <DateComponent dateString={performance.endDate} />
          </div> :
          <DateComponent dateString={performance.startDate} />
        }
      </div>
      <p>{performance.venue.name}</p>
      <p>{performance.venue.address}</p>
      <div>
        {performance.repertoire.length !== 0 ?
          performance.repertoire.map(piece => (
            <p key={piece.composition}>{piece.composition} by {piece.composer}</p>
          ))
          :
          <p>{performance.description}</p>
        }
      </div>
    </article>
  )
}
