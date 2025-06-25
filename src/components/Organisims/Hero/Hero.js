import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero({ src, alt, title, objPosition="center", objFit="cover" }) {
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    let scrollTarget = 0;
    let current = 0;
    let rafId = null;

    const update = () => {
      current += (scrollTarget - current) * 0.075; // smoothing factor
      if (imageWrapperRef.current) {
        imageWrapperRef.current.style.transform = `translateY(${current}px)`;
      }
      rafId = requestAnimationFrame(update);
    };

    const handleScroll = () => {
      scrollTarget = window.scrollY * 0.1; // scale parallax amount
    };

    window.addEventListener('scroll', handleScroll);
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={styles.hero}>
       <div ref={imageWrapperRef} className={styles.image_wrapper}>
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          fill
          priority
          style={{ objectFit: objFit, objectPosition: objPosition}}
        />
      </div>
      {title && <h1 className={styles.hero_title}>{title}</h1>}
    </div>
  );
}
