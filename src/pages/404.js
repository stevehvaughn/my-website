import Link from 'next/link';
import Layout from '@components/components/Layout';

export default function notFound() {
  return (
    <Layout criteria='home'>
      <div>404 Page not found</div>
    </Layout>
  )
}
