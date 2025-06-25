import Layout from "@components/Layout";
import UpcomingPerformanceCard from "@components/PerformanceCard/PerformanceCard";
import ContactMe from "@components/Organisims/ContactMe/ContactMe";
import performHeroImage from "@public/perform_hero.jpg";
import Hero from "@components/Organisims/Hero/Hero";
import styles from "@styles/LandingPage.module.scss";

import performances from "@utils/performances";

export async function getStaticProps() {
  const currentDate = Date.now();

  const upcomingPerformances = performances.filter((performance) => {
    const lastDate = performance.dates[performance.dates.length - 1];
    return Date.parse(lastDate) >= currentDate;
  });

  return {
    props: {
      upcomingPerformances,
    },
  };
}

export default function Concerts({ upcomingPerformances }) {
  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div className={styles.slider_arrows}>
        <button onClick={previous}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    );
  };

  return (
    <Layout criteria="music">
      <Hero
        src={performHeroImage}
        alt="UNC Brass Quintet Performing in Campus Commons Performance Hall in Greeley, Colorado"
        title="Performances"
        objPosition="bottom center"
      />
      <section className={styles.components}>
        <p>
          I am a regular musician with the Fort Collins Symphony and the
          Fountain City Brass Band. However, I also am asked to play with
          various other ensembles as a substitute or extra musician.
        </p>
        <p>
          Some of the groups I have performed with include the Colorado
          Symphony, Colorado Springs Philharmonic, Boulder Philharmonic,
          Colorado Wind Ensemble, and many others!
        </p>
        <p>
          I also am available to give masterclasses and/or recitals at your
          high school or university!
        </p>
        <p>
          Please do not hesitate to send me a message if you want to have me
          perform with your group, or come out to your school!
        </p>
      </section>
      {upcomingPerformances.length > 0 && (
        <section className={styles.performances}>
          <h2>Upcoming Performances</h2>
          <swiper-container
            pagination="true"
            className={styles.swiper_container}
          >
            {upcomingPerformances.map((performance) => (
              <UpcomingPerformanceCard
                key={performance.title}
                performance={performance}
              />
            ))}
          </swiper-container>
        </section>
      )}
      <ContactMe
        heading="Contact Me"
        subtitle="Looking to book a brass quintet, or soloist for your next concert?"
      />
    </Layout>
  );
}
