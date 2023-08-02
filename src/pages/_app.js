import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { open_sans, bitter, montserrat, inter, nunito } from '@utils/fonts';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Steve Vaughn | Musician & Web Developer</title>
        <meta name="Steve Vaughn | Musician & Web Developer" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
          :root {
            --font-open-sans: ${open_sans.style.fontFamily};
            --font-bitter: ${bitter.style.fontFamily};
            --font-montserrat: ${montserrat.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
            --font-nunito: ${nunito.style.fontFamily};
          }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}