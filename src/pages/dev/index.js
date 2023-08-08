import Layout from "@components/Layout"
import Hero from "@components/Hero"
import img from "@public/dev_landing.jpg"

export default function Dev() {
  return (
    <Layout criteria='dev'>
      <Hero
        src={img}
        alt={"turned on MacBook Air beside black smartphone and black ceramic mug"}
      />
      <section style={{ textAlign: "center" }}>
        <h1>Steve (the developer)</h1>
        <h2>Welcome to the developer portfolio side of my website!</h2>
      </section>
    </Layout>
  )
}
