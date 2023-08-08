import Layout from "@components/Layout"
import Hero from "@components/Hero"
import img from "@public/eastman_tuba.jpeg"

export default function Music() {
  return (
    <Layout criteria={'music'}>
      <Hero
        src={img}
        alt={"Eastman 836 Tuba closeup"}
      // title={"Steve Vaughn - Professional Musician"}
      />
      <section style={{ textAlign: "center" }}>
        <h1>Steve Vaughn</h1>
        <h2>Professional Musician</h2>
      </section>
    </Layout>
  )
}
