import DateComponent from "@components/date";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/UpcomingPerformanceCard.module.scss";
import { useState } from "react";

export default function UpcomingPerformanceCard({ performance, setGridOpen }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setShowDetails((showDetails) => !showDetails);
  }

  return (
    <div key={performance.title} className={styles.card}>
      <div className={styles.header}>
        <Image
          src={`/../public/logos/${performance.ensemble.logo}`}
          alt={`${performance.ensemble.name} logo`}
          height={50}
          width={50}
        />
        <p>{performance.ensemble.name}</p>
        <p className={styles.role}>{performance.role}</p>
      </div>
      <h3 className={styles.title}>{performance.title}</h3>
      <div className={styles.dates_wrapper}>
        {performance.endDate ?
          <span><DateComponent dateString={performance.startDate} /> - <DateComponent dateString={performance.endDate} /></span> :
          <span><DateComponent dateString={performance.startDate} /></span>
        }
      </div>
      <div className={styles.button_wrapper}>
        {performance.website &&
          <Link className={styles.button} href={performance.website} target="_blank"><span>Visit Website</span></Link>
        }
        <button className={styles.button} onClick={handleChange}><span>{showDetails ? "Show Less" : "Show More"}</span></button>
      </div>
      <div className={` ${showDetails && styles.show} ${styles.details_wrapper}`}>
        <div className={styles.detail_section}>
          <p>Location</p>
          <p>{performance.venue.name}</p>
          <p>{performance.venue.addressLine1}</p>
          <p>{performance.venue.addressLine2}</p>
        </div>
        <div>
          {performance.repertoire.length !== 0 ?
            <div className={styles.detail_section}>
              <p>Repertoire</p>
              {performance.repertoire.map(piece => (<p key={piece.composition}>{piece.composition} - {piece.composer}</p>))}
            </div> :
            <p>{performance.description}</p>
          }
        </div>
      </div>
    </div>
  )
}
