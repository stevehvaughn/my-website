import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
  return (
    <section>
      <div>
        <span>Built by me</span>
        <FontAwesomeIcon icon={faCopyright} />
        {new Date().getFullYear()}
      </div>
    </section>
  )
}
