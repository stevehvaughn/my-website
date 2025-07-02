import Layout from "@components/Layout";
import Link from "next/link";
import Date from "@components/Date/Date";
import Hero from "@components/Organisims/Hero/Hero";
import styles from "../../../styles/LandingPage.module.scss";
import { loadMediumPosts } from '@utils/medium-posts';
import { getSortedPostsData } from '@utils/posts';

export default function posts({ ...props }) {
  return (
    <Layout criteria='dev'>
      <Hero title="posts" />
      {/* <ul>
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
      </ul> */}
      <div className={styles.components}>
        <div className={`add-top add-bottom`}>
          <h3>Medium Blogs</h3>
          <ul>
            {props.mediumPosts.items.map((post) => {
              const dateString = post.pubDate.split(" ")[0];
              const formattedDateArray = [dateString];

              return (
                <li key={post.title}>
                  <Link href={post.link}>{post.title}</Link>
                  <br />
                  <small>
                    <Date dates={formattedDateArray} />
                  </small>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const mediumPosts = await loadMediumPosts();
  const devPostsData = getSortedPostsData("dev");

  return { props: { mediumPosts, devPostsData } }
}
