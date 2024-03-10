import React, { useState } from "react";
import logo from "../img/logo.svg";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    document.title = t('pageTitle');
  };

  const [isEnglish, setIsEnglish] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
    if (!isMenuExpanded) {
      document.body.classList.add('no-scroll');
      const navbarNav = document.getElementById('navbarNav');
      navbarNav.classList.add('status-open', 'show');
      const navbarToggler = document.querySelector('.navbar-toggler');
      navbarToggler.classList.remove('collapsed');
    } else {
      document.body.classList.remove('no-scroll');
      const navbarNav = document.getElementById('navbarNav');
      navbarNav.classList.remove('status-open', 'show');
      navbarNav.classList.add('status-close');
      const navbarToggler = document.querySelector('.navbar-toggler');
      navbarToggler.classList.add('collapsed');
    }
  };

  const handleLinkClick = () => {
    setIsMenuExpanded(false);
    document.body.classList.remove('no-scroll');
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.remove('status-open', 'show');
    navbarNav.classList.add('status-close');
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.classList.add('collapsed');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <img
            className="img-logotype"
            src={logo}
            alt={t('navbar.logoAlt')}
            width="150"
          />
          <button
            id="btnMenu"
            className={`navbar-toggler ${isMenuExpanded ? '' : 'collapsed'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuExpanded ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <span className="navbar-toggler-icon"> 
              <div className={`menu ${isMenuExpanded ? 'active' : '' }`}>
                <svg width="100" viewBox="0 0 100 100">
                  <path className="line top" d="M 20,30 H 80"/>
                  <path className="line middle" d="M 20,50 H 80" />
                  <path className="line bottom" d="M 20,70 H 80"/>
                </svg>
              </div>
            </span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuExpanded ? 'status-open show' : 'status-close'}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-4">
                <a className="nav-link" onClick={handleLinkClick}>{t('navbar.home')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" onClick={handleLinkClick}>{t('navbar.about')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" onClick={handleLinkClick}>{t('navbar.tools')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" onClick={handleLinkClick}>{t('navbar.services')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" onClick={handleLinkClick}>{t('navbar.projects')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" onClick={handleLinkClick}>{t('navbar.contact')}</a>
              </li>
            </ul>
            <div className="language-controller">
              <span className={`Txt-Option Spanish ${i18n.language === 'en' ? 'inactive' : 'active'}`}>ES</span>
              <div className="form-check form-switch ml-auto">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="languageToggle"
                  checked={i18n.language === 'en'}
                  onChange={handleLanguageToggle}
                />
              </div>
              <span className={`Txt-Option English ${i18n.language === 'en' ? 'active' : 'inactive'}`}>EN</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;