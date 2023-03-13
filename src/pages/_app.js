import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Layout from '../components/layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Steve Vaughn | Musician & Web Developer</title>
        <meta name="Steve Vaughn | Musician & Web Developer" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}