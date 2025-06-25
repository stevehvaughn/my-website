import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';
import { homeNavLinks, errorNavLinks, musicNavLinks, devNavLinks } from '@utils/data.js';

export default function Navbar({ criteria }) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let navLinks;
  if (criteria === 'music') {
    navLinks = musicNavLinks;
  } else if (criteria === 'dev') {
    navLinks = devNavLinks;
  } else if (criteria === '404') {
    navLinks = errorNavLinks;
  } else {
    navLinks = homeNavLinks;
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/">home</Link>
      <ul className={styles.navbar}>
        {navLinks.map((link, index) => {
          const isActiveSubSite = currentPath.startsWith(link.path);
          const isActive = currentPath === link.path;

          return (
            <li
              key={index}
              className={
                isActive
                  ? styles.active
                  : isActiveSubSite
                  ? styles.activeSubSite
                  : ''
              }
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
