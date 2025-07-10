import Layout from "@/components/Layout";
import styles from "../../styles/LandingPage.module.scss";
import Hero from "@/components/Organisims/Hero/Hero";

export default function Gallery() {
  return (
    <Layout criteria='music'>
      <Hero title="Gallery" />
      <section className={styles.components}>

      </section>
    </Layout>
  )
}
