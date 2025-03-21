import Layout from "@components/Layout";
import Link from "next/link";
import Date from "@components/Date/Date";
import { getSortedPostsData } from '@utils/posts';

export default function Blogs({ ...props }) {
  return (
    <Layout criteria='music'>
      <div>Blog</div>
      <ul>
        <h3>Site Blogs</h3>
        {props.musicBlogData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`blog/${id}`}>{title}</Link>
            <br />
            <small>
              <Date dates={date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const musicBlogData = getSortedPostsData("music");

  return { props: { musicBlogData } }
}
