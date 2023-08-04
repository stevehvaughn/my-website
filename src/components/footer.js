import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import FooterSitemapSection from './FooterSitemapSection';
import { musicNavLinks, devNavLinks } from '@utils/data.js';
import Socials from './Socials';
import styles from '@styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_sitemap}>
        <FooterSitemapSection
          links={devNavLinks}
        />
        <FooterSitemapSection
          links={musicNavLinks}
        />
      </div>
      <Socials />
      <div className={styles.copyright}>
        <span><FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}</span>
        <span> Built by me with ❤️️, 🍺, and 🎵</span>
      </div>
    </footer>
  )
}
