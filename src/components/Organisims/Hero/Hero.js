import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { useScroll } from '@/context/ScrollContext';

export default function Hero({ src, alt, title, objPosition = "center", objFit = "cover" }) {
  const imageWrapperRef = useRef(null);
  const scrolled = useScroll();

  useEffect(() => {
    if (!src) return; // Skip parallax logic if there's no image

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
  }, [src]);

  return (
    <div
      className={`${styles.hero} ${!src ? styles.noImage : styles.withImage} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      {src && (
        <div ref={imageWrapperRef} className={styles.image_wrapper}>
          <Image
            className={styles.image}
            src={src}
            alt={alt}
            fill
            priority
            placeholder="blur"
            blurDataURL="/blur-placeholder.jpg"
            style={{ objectFit: objFit, objectPosition: objPosition }}
          />
        </div>
      )}

      {!src ? (
        <div className={styles.hero_background}>
          <h1 className={styles.hero_title}>{title}</h1>
        </div>
      ) : (
        title && <h1 className={styles.hero_title}>{title}</h1>
      )}

      {/* Sentinel for Navbar intersection detection */}
      <div
        id="hero-sentinel"
        style={{
          position: 'absolute',
          bottom: 0,
          height: '1px',
          width: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
