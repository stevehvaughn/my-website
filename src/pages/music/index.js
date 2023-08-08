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
        <h1>Steve (the musician)</h1>
        <h2>Welcome to the music side of my website!</h2>
      </section>
    </Layout>
  )
}
