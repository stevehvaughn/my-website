import styles from "./About.module.scss";
import landingPageStyles from "@/styles/LandingPage.module.scss";
import Link from "next/link";
import SimplePromo from "@/components/Organisims/SimplePromo/SimplePromo";
import Intro from "@/components/Molecules/Intro/Intro";

export default function About() {
  return (
    <section className={`${styles.about} ${landingPageStyles.wrapper}`}>
      <div className={styles.about_content}>
        <Intro
          eyebrow="From Music to Engineering"
          heading="About Me"
          body={[
            "I am a classical musician turned software engineer.",
            "I spent the first part of my life passionately pursuing a career in music, until deciding to explore a new career field that has always intrigued me — Software Engineering."
          ]}
        />
        <SimplePromo
        imageSrc="/steve_dev.jpg"
        imageAlt="A laptop open with code on the screen, with a cup of coffee next to the laptop"
        imageOnLeft={true}
        >
          <h3>Steve (the developer)</h3>
          <p>Currently, I work full-time as a website developer at <Link href="https://www.milespartnership.com/" target="_blank">Miles Partnership</Link>, an industry-leading agency that builds websites for travel and tourism destinations around the world.</p>
          <p>I specialize in front-end development with a focus on accessibility, component-based architecture, and building maintainable, elegant user interfaces — often with technologies like Drupal, Next.js, React, and animation libraries such as GSAP.</p>
          <p>I enjoy translating design vision into robust front-end architecture that performs well and feels intuitive.</p>
          <p>You can see examples of my work on the <Link href="/dev">Portfolio</Link> side of my website.</p>
        </SimplePromo>
        <SimplePromo
        imageSrc="/IMG_0825.JPG"
        imageAlt="Steve playing the tuba"
        imageOnLeft={false}
        >
          <h3>Steve (the musician)</h3>
          <p>Music is still a core part of who I am. I currently serve as Principal Tubist with the <Link href="https://fcsymphony.org/" target="_blank">Fort Collins Symphony</Link> and perform with the internationally recognized <Link href="https://fcbb.net/" target="_blank">Fountain City Brass Band</Link> on euphonium.</p>
          <p>I regularly perform with various other orchestras throughout Colorado and the Mountain States region, including the Colorado Symphony, Boulder Philharmonic, Colorado Springs Philharmonic, Cheyenne Symphony and others.</p>
          <p>Music sharpens my attention to detail, deepens my creativity, and keeps me present — qualities that shape the skills I bring into the tech world.</p>
          <p>Want to hear more? Head over to the <Link href="/music">Music</Link> side of the site.</p>
        </SimplePromo>
      </div>
    </section >
  )
};
