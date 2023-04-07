import Layout from '@components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@utils/posts';
import Date from "@components/date";
import utilStyles from "@styles/utils.module.scss";

export default function Blog({ blogData }) {
  return (
    <Layout criteria='music'>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{blogData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={blogData.date} />
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