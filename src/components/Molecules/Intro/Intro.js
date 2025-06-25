import styles from './Intro.module.scss';

export default function Intro({ eyebrow, heading, body }) {
  return (
    <section className={styles.intro}>
      <div className={styles.inner}>
        {eyebrow && (
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrow}>{eyebrow}</span>
          </div>
        )}
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {body && (
          <div className={styles.body}>
            {Array.isArray(body)
              ? body.map((paragraph, i) => <p key={i}>{paragraph}</p>)
              : <p>{body}</p>
            }
          </div>
        )}
      </div>
    </section>
  );
}
