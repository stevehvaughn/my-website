import Layout from "@components/Layout"
import Head from "next/head";
import styles from "@styles/LandingPage.module.scss";
import Hero from "@components/Organisims/Hero/Hero";

export default function Bio() {
  return (
    <Layout criteria='music'>
      <Head>
        <title>Bio | Steve Vaughn</title>
        <meta name="description" content="Read Steve Vaughn’s biography as a professional tuba and euphonium performer, educator, and collaborator in the world of classical and contemporary music." />
      </Head>
      <Hero
        src="/steve_tuba.jpg"
        alt="Steve Playing the tuba"
        title="Biography"
        objPosition="center top"
      />
      <section className={styles.components}>
        <p>Dr. Steve Vaughn is an accomplished musician and educator based in Colorado, where he maintains an active career as a freelance musician throughout the Front Range and beyond. Equally at home on both tuba and euphonium, he currently serves as Principal Tuba with the Fort Collins Symphony and plays euphonium with the internationally acclaimed Fountain City Brass Band based in Kansas City, Missouri.</p>
        <p>As a tubist, Dr. Vaughn is a frequent collaborator with many leading ensembles in the Rocky Mountain region. In addition to his work with the Fort Collins Symphony, he has performed with the Colorado Symphony, Colorado Springs Philharmonic, Boulder Philharmonic, Greeley Philharmonic, National Repertory Orchestra, Wyoming Symphony, Cheyenne Symphony, and San Juan Symphony, among others. In the summer of 2024, he performed with the United States Air Force Academy Band on a concert band tour throughout Colorado. Steve also frequently performs with the Denver Municipal Band and their brass quintet throughout the year.</p>
        <p>A passionate advocate for British-style brass banding, Dr. Vaughn joined the Fountain City Brass Band in 2022 and performs regularly with the ensemble throughout the U.S. and internationally. Prior to that, he served as Solo Euphonium with Colorado Brass and the Pikes Peak Brass Band. As a soloist, his recent highlights include a performance of Blind Spot by Gilles Rocha at the 2021 International Tuba and Euphonium Conference. In 2015, he became the first euphoniumist to win the Gordon T. Parks Concerto Competition, later performing Vladimir Cosma’s Euphonium Concerto with the Arapahoe Philharmonic. He has also appeared with the Boulder Brass and Denver Brass, and has performed euphonium parts in orchestral masterworks such as The Planets, Mahler’s Symphony No. 7, and Ein Heldenleben with several major Colorado ensembles.</p>
        <p>As an educator, Dr. Vaughn brings extensive experience in both public school and collegiate settings. From 2019 to 2025, he served as Adjunct Professor of Tuba and Euphonium at the University of Northern Colorado, where he taught applied lessons, coached chamber music, and led courses in brass pedagogy. Prior to his collegiate appointment, he was the Assistant Director of Bands and Orchestras at Gateway High School in Aurora, Colorado, where he directed concert ensembles and supported a vibrant music program. He is an active clinician across Colorado, having worked with numerous honor bands, including the Northern Colorado Honor Band and the Colorado All-State Band. He has also been invited to lead clinics and masterclasses at universities throughout the state and has presented sessions at the Colorado Music Educators Association Conference.</p>
        <p>Dr. Vaughn earned his undergraduate degree in Music Education and Euphonium Performance from Ithaca College, studying with Dave Unland, Ed Diefes, and Dr. Aaron Tindall. He went on to receive both a Master of Music in Euphonium Performance and a Doctor of Musical Arts in Tuba Performance and Pedagogy from the University of Colorado Boulder, where he studied with Michael Dunn. His additional training includes studies with Warren Deck and John Rojak.</p>
        <p>Outside of music, Dr. Vaughn is an avid traveler who especially enjoys discovering new breweries with his wife, Jessica. A passionate tech enthusiast, he also builds websites as a creative outlet and shares life at home with three beloved pets.</p>
      </section>
    </Layout>
  )
}
