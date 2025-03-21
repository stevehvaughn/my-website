import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core'
import { register } from 'swiper/element/bundle';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { open_sans, bitter, montserrat, inter, nunito } from '@utils/fonts';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  register();
  const router = useRouter();

  useEffect(() => {
    const updateBodyClass = (url) => {
      if (url === '/') {
        document.body.classList.add('home-page');
      } else {
        document.body.classList.remove('home-page');
      }
    };

    // Run on initial load
    updateBodyClass(router.pathname);

    // Run on route changes
    router.events.on('routeChangeComplete', updateBodyClass);

    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', updateBodyClass);
    };
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Steve Vaughn | Musician & Web Developer</title>
        <meta
          name="description"
          content="Steve Vaughn is a professional musician and front-end developer specializing in building accessible, modern websites."
        />
         <meta
          name="keywords"
          content="Steve Vaughn, Front-End Developer, Musician, Web Developer, Travel Websites, Drupal, Next.js, Euphonium, Tuba, Miles Partnership"
        />
        <meta name="author" content="Steve Vaughn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://www.stevehvaughn.com" />
        <meta property="og:type" content="website" />
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
