import Layout from "@components/layout"
import styles from "@styles/Bio.module.scss"

export default function bio() {
  return (
    <Layout criteria='music'>
      <section className={styles.bio}>
        <h1>Biography</h1>
        <p>Dr. Steve Vaughn, a native of upstate New York, is a freelance musician across the front range of Colorado and is currently Instructor of Tuba & Euphonium at the University of Northern Colorado in Greeley, CO. Equally at home performing on both tuba and euphonium, Steve holds the position of Principal Tuba with the Fort Collins Symphony and plays euphonium with the internationally renowned Fountain City Brass Band.</p>
        <p>Steve received his undergraduate degree in Music Education and Euphonium Performance from Ithaca College (Ithaca, NY), where he studied with Dave Unland, Ed Diefes, and Dr. Aaron Tindall. He has earned both a Master of Music degree in Euphonium Performance and a Doctor of Musical Arts degree in Tuba Performance and Pedagogy from the University of Colorado Boulder (Boulder, CO) studying with Michael Dunn. Steve has also taken additional studies with Warren Deck and John Rojak.</p>
        <p>As a tubist, Steve has been an active performer in Colorado and many neighboring states. In addition to his position with the Fort Collins Symphony he has performed with numerous other orchestras including the Colorado Symphony, Colorado Springs Philharmonic, Boulder Philharmonic, Greeley Philharmonic, National Repertory Orchestra, Wyoming Symphony, Cheyenne Symphony, San Juan Symphony, and others. While studying at CU-Boulder he played in the graduate brass quintet which was one of 4 international ensembles accepted into the inaugural American Brass Quintet Seminar at the Aspen Music Festival in 2018.</p>
        <p>In addition to his tuba playing, Steve is an active soloist on euphonium, and an enthusiastic supporter of British-style Brass Band. Steve joined the Fountain City Brass Band in 2022 and regularly performs concerts in the United States and abroad with them. Prior to that Steve held the Principal Euphonium position with the Colorado Brass, Pikes Peak Brass Band, and Rocky Mountain Brassworks. As a soloist, Steve recently performed Blind Spot by Swiss composer Gilles Rocha for the 2021 International Tuba and Euphonium Conference and has been invited as a soloist with many ensembles across Colorado. In 2015 Steve was the first euphonium player to win the Gordon T. Parks Concerto Competition and performed the Euphonium Concerto by Vladimir Cosma with the Arapahoe Philharmonic the following season. He has performed with the chamber group Boulder Brass on numerous occasions and has performed orchestral works that include euphonium with many of the ensembles listed above.</p>
        <p>Outside of music Steve enjoys homebrewing, coding, and spending time traveling with his wife Jessica and their pets.</p>
      </section>
    </Layout>
  )
}