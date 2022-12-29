import React from 'react';
import 'src/assets/css/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
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
          >
            <span className=""></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sneaker">
                  Sneaker
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/clothes">
                  Clothes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {' '}
                  About{' '}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="user_option-box">
              <Link to="/account">
                <FontAwesomeIcon icon={faUser} aria-hidden="true" />
              </Link>
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartPlus} aria-hidden="true" />
              </Link>
              <Link to="">
                <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
