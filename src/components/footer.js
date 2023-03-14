import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div>
        <span>Built by me with ❤️️ and 🍺</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faCopyright} />
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}
