import Layout from '@/components/Layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@/utils/posts';
import Date from "@/components/Date/Date";

export default function Blog({ blogData }) {
  return (
    <Layout criteria='music'>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article>
        <h1>{blogData.title}</h1>
        <div>
          <Date dates={blogData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds("music");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getPostData(params.id, "music");
  return {
    props: {
      blogData,
    },
  };
}
