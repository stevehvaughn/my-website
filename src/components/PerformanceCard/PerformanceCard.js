import DateComponent from "@components/Date/Date";
import Image from "next/image";
import Link from "next/link";
import styles from "./PerformanceCard.module.scss";
import { useState } from "react";

export default function UpcomingPerformanceCard({ performance }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setShowDetails((showDetails) => !showDetails);
  }

  return (
    <swiper-slide key={performance.title} className={styles.swiper_slide}>
      <article className={`${styles.card} ${showDetails && styles.card_open}`}>
        <div className={styles.header}>
          <Image
            src={`/${performance.ensemble.logo}`}
            alt={`${performance.ensemble.name} logo`}
            height={50}
            width={50}
          />
          <div>
            <p>{performance.ensemble.name}</p>
            <p className={styles.role}>{performance.role}</p>
          </div>
        </div>
        <h3 className={styles.title}>{performance.title}</h3>
        <div className={styles.dates_wrapper}>
          <DateComponent dates={performance.dates} />
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
      </article>
    </swiper-slide>
  )
}
