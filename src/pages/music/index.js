import Layout from "@components/Layout"
import Hero from "@components/Hero/Hero"
import img from "@public/eastman_tuba.jpeg"
import Intro from "@components/Intro/Intro"
import landingPageStyles from "@styles/LandingPage.module.scss";

export default function Music() {
  return (
    <Layout criteria={'music'}>
      <Hero
        src={img}
        alt={"Eastman 836 Tuba closeup"}
        title={"Steve Vaughn - Musician"}
      />
      <section className={landingPageStyles.text_wrapper}>
        <Intro
          eyebrow="Music"
          heading="Welcome to my Musician Page"
          body={[
            "I’m a professional tubist and euphoniumist performing across the Mountain States region and abroad.",
            "My work spans orchestral, chamber, and brass band settings — blending precision, adaptability, and a love of musical collaboration."
          ]}
        />
      </section>
    </Layout>
  )
}
