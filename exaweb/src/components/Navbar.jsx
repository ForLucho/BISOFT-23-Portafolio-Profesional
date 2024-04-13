import React, { useState } from "react";
import logo from "../img/logo.svg";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleLanguageToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    document.title = t('pageTitle');
  };

  const handleToggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
    if (!isMenuExpanded) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const handleLinkClick = (event) => {
    event.preventDefault(); // Evitar que se modifique la URL

    const targetId = event.currentTarget.getAttribute('data-scroll-to');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth' // Desplazamiento suavizado
      });
    }

    setIsMenuExpanded(false); // Cerramos el menú al hacer clic en un enlace
    document.body.classList.remove('no-scroll');
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

          <div className={`collapse navbar-collapse ${isMenuExpanded ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-4">
                <a className="nav-link" data-scroll-to="home" onClick={handleLinkClick}>{t('navbar.home')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" data-scroll-to="about" onClick={handleLinkClick}>{t('navbar.about')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" data-scroll-to="tools" onClick={handleLinkClick}>{t('navbar.tools')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" data-scroll-to="projects" onClick={handleLinkClick}>{t('navbar.projects')}</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" data-scroll-to="contact" onClick={handleLinkClick}>{t('navbar.contact')}</a>
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
