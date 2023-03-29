import Layout from "@components/layout";
import Link from "next/link";
import Date from "@components/date";
import utilStyles from '@styles/utils.module.scss';
import { loadMediumPosts } from '@utils/medium-posts';
import { getSortedPostsData } from '@utils/posts';

export default function posts({ ...props }) {
  console.log(props.mediumPosts.items);
  return (
    <Layout criteria='dev'>
      <div>All Dev Posts</div>
      <ul>
        <h3>Site Blogs</h3>
        {props.devPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Medium Blogs</h3>
        {props.mediumPosts.items.map((post) => (
          <li className={utilStyles.listItem} key={post.title}>
            <Link href={post.link}>{post.title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={post.pubDate} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const mediumPosts = await loadMediumPosts();
  const devPostsData = getSortedPostsData("dev");

  return { props: { mediumPosts, devPostsData } }
}
