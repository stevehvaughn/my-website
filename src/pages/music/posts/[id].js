import Layout from '@components/layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@utils/posts';
import Date from "@components/date";
import utilStyles from "@styles/utils.module.scss";

export default function Post({ postData }) {
  return (
    <Layout criteria='music'>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id, "music");
  return {
    props: {
      postData,
    },
  };
}