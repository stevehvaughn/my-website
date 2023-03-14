import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { homeNavLinks, musicNavLinks, webNavLinks } from '../utils/data.js'

export default function Navbar({ criteria }) {
  let navLinks;

  if (criteria === 'music') {
    navLinks = musicNavLinks
  } else if (criteria === 'web') {
    navLinks = webNavLinks
  } else {
    navLinks = homeNavLinks
  }

  return (
    <nav>
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