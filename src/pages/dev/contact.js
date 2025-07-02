import Layout from "@components/Layout";
import Head from "next/head";
import Hero from "@components/Organisims/Hero/Hero";
import ContactMe from "@components/Organisims/ContactMe/ContactMe";
import styles from "@styles/LandingPage.module.scss";

export default function Contact() {
  return (
    <Layout criteria="dev">
      <Head>
        <title>Contact | Steve Vaughn</title>
        <meta
          name="description"
          content="Get in touch with Steve Vaughn for web development collaborations, freelance opportunities, or tech discussions."
        />
      </Head>
      <Hero
        title="Contact"
        objPosition="bottom center"
      />
      <div className={styles.components}>
        <section className="add-top add-bottom">
          <p>
            {`Whether you're looking to collaborate on a project, need a reliable developer for contract work, or just want to connect — I'm always open to thoughtful conversations around technology, design, accessibility, and building better digital experiences.`}
          </p>
          <p>
            {`Feel free to reach out through the form below. I’ll do my best to respond promptly.`}
          </p>
        </section>

        <ContactMe
          heading="Get In Touch"
          subtitle="Send a message and let's start a conversation."
        />
      </div>
    </Layout>
  );
}
