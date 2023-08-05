import { useEffect, useState } from "react";
import Layout from "@components/Layout"
import UpcomingPerformanceCard from "@components/UpcomingPerformanceCard";
import ContactMe from "@components/ContactMe";
import performHeroImage from "@public/perform_hero_image_desktop.webp"
import Hero from "@components/Hero";
import styles from "@styles/Perform.module.scss"
import landingPageStyles from "@styles/LandingPage.module.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Concerts() {
  const [upcomingPerformances, setUpcomingPerformances] = useState([]);

  useEffect(() => {
    async function fetchPerformances() {
      try {
        const response = await fetch("/api/performances");
        const data = await response.json();

        // Filter the upcoming performances
        const currentDate = Date.now();
        const upcomingPerformancesData = data.filter((performance) => {
          const lastDate = performance.dates[performance.dates.length - 1];
          return Date.parse(lastDate) >= currentDate;
        });

        setUpcomingPerformances(upcomingPerformancesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPerformances();
  }, []);

  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h4>These buttons can be positioned anywhere you want on the screen</h4>
        <button onClick={previous}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    );
  };

  return (
    <Layout criteria='music'>
      <Hero
        src={performHeroImage}
        alt={"UNC Brass Quintet Performing in Campus Commons Performance Hall in Greeley, Colorado"}
        title="Concerts"
      />
      <section className={landingPageStyles.text_wrapper}>
        <p>I am a regular musician with the Fort Collins Symphony and the Fountain City Brass Band. However, I also am asked to play with various other ensembles as a substitute or extra musician.</p>
        <p>Some of the groups I have performed with include the Colorado Symphony, Colorado Springs Philharmonic, Boulder Philharmonic, Colorado Wind Ensemble, and many others!</p>
        <p>I also am available to give masterclasses and/or recitals at your high school or university!</p>
        <p>Please do not hesitate to send me a message if you want to have me perform with your group, or come out to your school!</p>
      </section>
      {upcomingPerformances.length > 0 && (
        <section className={styles.performances}>
          <h2>Upcoming Performances</h2>
          <Carousel
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            customButtonGroup={<CustomButtonGroupAsArrows />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={{
              mobile: {
                breakpoint: {
                  max: 480,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 50
              },
              mobile1: {
                breakpoint: {
                  max: 680,
                  min: 481
                },
                items: 1,
                partialVisibilityGutter: 150
              },
              mobile2: {
                breakpoint: {
                  max: 768,
                  min: 681
                },
                items: 1,
                partialVisibilityGutter: 250
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 767
                },
                items: 2,
                partialVisibilityGutter: 50
              },
              tablet1: {
                breakpoint: {
                  max: 1280,
                  min: 1025
                },
                items: 2,
                partialVisibilityGutter: 100
              },
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1281
                },
                items: 3,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {upcomingPerformances.map((performance) => (
              <UpcomingPerformanceCard
                key={performance.title}
                performance={performance}
              />
            ))}
          </Carousel>
          {/* <article className={styles.upcoming_grid}>
            {upcomingPerformances.map((performance) => (
              <UpcomingPerformanceCard
                key={performance.title}
                performance={performance}
              />
            ))}
          </article> */}
        </section>
      )}
      <ContactMe
        heading={"Contact Me"}
      />
    </Layout >
  )
}

// export const getStaticProps = async () => {
//   try {
//     const data = await prisma.performance.findMany({
//       where: {
//         startDate: { gte: new Date() } // only pulls in performances in the future
//       },
//       orderBy: {
//         startDate: 'asc' // sort by date
//       },
//       include: {
//         ensemble: {
//           select: { name: true, website: true, category: true, logo: true },
//         },
//         venue: {
//           select: { name: true, addressLine1: true, addressLine2: true }
//         },
//         repertoire: {
//           select: { composition: true, composer: true, genre: true }
//         }
//       },
//     });
//     return {
//       props: {
//         upcomingPerformances: JSON.parse(JSON.stringify(data)),
//         revalidate: 10
//       }
//     }
//   } catch (error) {
//     if (error instanceof ReferenceError) {
//       console.error('The supabase database has been paused');
//     } else {
//       console.error('Error fetching data:', error);
//     }
//     return {
//       props: {
//         error: 'Error fetching data'
//       }
//     };
//   } finally {
//     await prisma.$disconnect();
//   }
// };
