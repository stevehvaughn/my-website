import styles from './ProjectList.module.scss';

const ProjectList = ({ projects }) => {
  return (
    <section className={`add-bottom ${styles.projectGrid}`}>
      <h2>My Recent Work</h2>
      <p>{"Here are a few past projects I've worked on while working at Miles Partnership. Want to see more? "}<a className={styles.email} href="mailto:steve.h.vaughn@gmail.com">Email me</a>.</p>
      <div className={styles.columns}>
        {projects.map((proj) => (
          <div
            key={proj.name}
            className={`${styles.column} ${styles.mobile} ${styles.tablet} ${styles.desktop}`}
          >
            <figure className={styles.image}>
              {proj.image && (
                <img src={proj.image} alt={proj.name} className={styles.projectThumb} />
              )}

              <div className={styles.logoOverlay}>
                {proj.logo && (
                  <img
                    src={proj.logo}
                    alt={`${proj.client} logo`}
                    className={styles.logoCentered}
                  />
                )}
              </div>

              <figcaption className={styles.caption}>
                <h4 className={styles.title}>{proj.name}</h4>
                <p className={styles.desc}>{proj.description}</p>
                <a
                  className={styles.button}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Website</span>
                </a>
              </figcaption>

              <div className={styles.overlay}></div>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
