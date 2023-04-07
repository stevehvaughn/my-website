import Layout from "@components/layout";
import Link from "next/link";
import Date from "@components/date";
import utilStyles from '@styles/utils.module.scss';
import { getSortedPostsData } from '@utils/posts';

export default function Blogs({ ...props }) {
  return (
    <Layout criteria='music'>
      <div>Blog</div>
      <ul>
        <h3>Site Blogs</h3>
        {props.musicBlogData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`blog/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
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