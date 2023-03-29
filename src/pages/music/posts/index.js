import Layout from "@components/layout";
import Link from "next/link";
import Date from "@components/date";
import utilStyles from '@styles/utils.module.scss';
import { getSortedPostsData } from '@utils/posts';

export default function posts({ ...props }) {
  return (
    <Layout criteria='dev'>
      <div>All Music Posts</div>
      <ul>
        <h3>Site Blogs</h3>
        {props.musicPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`posts/${id}`}>{title}</Link>
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
  const musicPostsData = getSortedPostsData("music");

  return { props: { musicPostsData } }
}