import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import 'src/assets/css/styles.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 footer-col">
            <div className="footer_detail">
              <h4>
              About
              </h4>
              <p>
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div className="footer_social">
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
            </div>
          </div>
          <div className="col-md-6 col-lg-4 footer-col">
            <div className="footer_contact">
              <h4>
              Reach at..
              </h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                  Location
                  </span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>
                  Call +01 1234567890
                  </span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                  demo@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 footer-col">
            <div className="footer_contact">
              <h4>
              Subscribe
              </h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">
                Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <p>
          &copy; <span id="displayYear"></span>
            All Rights Reserved By N&H
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
