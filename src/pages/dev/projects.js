import Layout from "@components/Layout";
import projects from "@utils/projects";

export async function getStaticProps() {
  return {
    props: { projects },
  }
}

export default function Projects({ projects }) {
  return (
    <Layout criteria="dev">
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map((proj) => (
            <li key={proj.name}>
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                {proj.name}
              </a>{" "}
              – {proj.client}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
