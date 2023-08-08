import Image from "next/image"
import styles from '@styles/Hero.module.scss';

export default function Hero({ src, alt, title }) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero_title}>{title}</h1>
      <div className={styles.image_wrapper}>
        <Image
          priority
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
      </div>
    </section>
  )
}
