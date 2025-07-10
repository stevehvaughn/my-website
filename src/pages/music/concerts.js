import Layout from "@/components/Layout";
import Head from "next/head";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import UpcomingPerformanceCard from "@/components/Molecules/PerformanceCard/PerformanceCard";
import ContactMe from "@/components/Organisims/ContactMe/ContactMe";
import Hero from "@/components/Organisims/Hero/Hero";
import styles from "@/styles/LandingPage.module.scss";

import performances from "@/utils/performances";

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
      <Head>
        <title>Concerts | Steve Vaughn</title>
        <meta name="description" content="A calendar and archive of past and upcoming concerts featuring Steve Vaughn in solo and ensemble performances." />
      </Head>
      <Hero
        src="/perform_hero.jpg"
        alt="UNC Brass Quintet Performing in Campus Commons Performance Hall in Greeley, Colorado"
        title="Performances"
        objPosition="bottom center"
      />
      <section className={styles.components}>
        <div className="add-top add-bottom">
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
        </div>
        {upcomingPerformances.length > 0 && (
          <section className={`add-top add-bottom ${styles.performances}`}>
            <h2>Upcoming Performances</h2>
            <Swiper
              init="false"
              className={styles.swiper_container}
            />
            {upcomingPerformances.map((performance) => (
              <SwiperSlide key={performance.title}>
                <UpcomingPerformanceCard performance={performance} />
              </SwiperSlide>
              ))}
          </section>
        )}
        <ContactMe
          heading="Contact Me"
          subtitle="Looking to book a brass quintet, or soloist for your next concert?"
        />
      </section>
    </Layout>
  );
}
