import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/assets/css/styles.scss';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Social: React.FC = () => {
  return (
    <div className="hero_social">
      <a href="">
        <FontAwesomeIcon icon={faFacebook}/>
      </a>
      <a href="">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default Social;
