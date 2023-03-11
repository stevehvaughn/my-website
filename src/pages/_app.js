import Layout from '../components/layout';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}