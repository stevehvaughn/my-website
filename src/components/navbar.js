import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/performances">Performances</Link>
        </li>
      </ul>
    </nav>
  )
} 