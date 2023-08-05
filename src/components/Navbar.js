import Link from 'next/link';
import styles from '@styles/Navbar.module.scss';
import { homeNavLinks, errorNavLinks, musicNavLinks, devNavLinks } from '@utils/data.js'

export default function Navbar({ criteria }) {
  let navLinks;

  if (criteria === 'music') {
    navLinks = musicNavLinks
  } else if (criteria === 'dev') {
    navLinks = devNavLinks
  } else if (criteria === '404') {
    navLinks = errorNavLinks
  } else {
    navLinks = homeNavLinks
  }

  return (
    <nav className={styles.nav}>
      <Link href="/">home</Link>
      <ul className={styles.navbar}>
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
} 
