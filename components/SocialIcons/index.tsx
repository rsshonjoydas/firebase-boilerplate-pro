import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const SocialIcons = () => (
  <div className="icons">
    <Link href="https://www.facebook.com/rsshonjoydas">
      <a target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="icon facebookIcon" />
      </a>
    </Link>
    <Link href="https://twitter.com/rsshonjoydas">
      <a target="_blank">
        <FontAwesomeIcon icon={faTwitter} className="icon twitterIcon" />
      </a>
    </Link>
    <Link href="https://www.instagram.com/rsshonjoydas/">
      <a target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="icon instagramIcon" />
      </a>
    </Link>
    <Link href="https://www.linkedin.com/in/rsshonjoydas/">
      <a target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="icon linkedinIcon" />
      </a>
    </Link>
    <Link href="https://github.com/rsshonjoydas">
      <a target="_blank">
        <FontAwesomeIcon icon={faGithub} className="icon githubIcon" />
      </a>
    </Link>
  </div>
);

export default SocialIcons;
