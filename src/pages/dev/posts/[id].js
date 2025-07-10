import Layout from '@/components/Layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '@/utils/posts';
import Date from "@/components/Date/Date";

export default function Post({ postData }) {
  return (
    <Layout criteria='dev'>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dates={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds("dev");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, "dev");
  return {
    props: {
      postData,
    },
  };
}
