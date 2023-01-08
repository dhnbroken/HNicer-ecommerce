import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import 'src/assets/css/styles.scss';
import './header.scss';
const Header: React.FC = () => {
  const [active, setActive] = useState('Home');
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <header className="header_section bg-light">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>HNicer</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsShow(!isShow)}
          >
            <span className=""></span>
          </button>
          <div
            style={{ display: isShow ? 'block' : 'none' }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li
                className={`nav-item ${active === 'Home' ? 'active' : ''}`}
                onClick={() => {
                  setIsShow(!isShow);
                  setActive('Home');
                }}
              >
                <Link className="nav-link" to="/">
                  Home<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item ${active === 'Sneaker' ? 'active' : ''}`}
                onClick={() => {
                  setIsShow(!isShow);
                  setActive('Sneaker');
                }}
              >
                <Link className="nav-link" to="/sneaker">
                  Sneaker
                </Link>
              </li>
              <li
                className={`nav-item ${active === 'About' ? 'active' : ''}`}
                onClick={() => {
                  setIsShow(!isShow);
                  setActive('About');
                }}
              >
                <Link className="nav-link" to="/about">
                  {' '}
                  About{' '}
                </Link>
              </li>
              <li
                className={`nav-item ${active === 'Contact' ? 'active' : ''}`}
                onClick={() => {
                  setIsShow(!isShow);
                  setActive('Contact');
                }}
              >
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="user_option-box d-md-block text-md-center">
              <Link
                to="/account"
                onClick={() => {
                  setActive('');
                  setIsShow(!isShow);
                }}
              >
                <FontAwesomeIcon icon={faUser} aria-hidden="true" />
              </Link>
              <Link
                to="/cart"
                onClick={() => {
                  setActive('');
                  setIsShow(!isShow);
                }}
              >
                <FontAwesomeIcon icon={faCartPlus} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
