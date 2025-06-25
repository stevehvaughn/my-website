import Image from 'next/image';
import Link from 'next/link';
import styles from './SimplePromo.module.scss';

export default function SimplePromo({ imageSrc, imageAlt, imageOnLeft = true, children }) {
  const promoClass = `${styles.simplePromo} ${
    imageOnLeft ? styles.imageLeft : styles.imageRight
  }`;

  return (
    <section className={promoClass}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
      </div>
      <div className={styles.textContent}>
        {children}
      </div>
    </section>
  );
}
