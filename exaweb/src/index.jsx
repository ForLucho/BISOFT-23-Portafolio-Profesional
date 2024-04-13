import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './Config/i18n';

import 'bootswatch/dist/simplex/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery.min.js';

import { Scrollup } from './components/Scrollup';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { Project } from './components/Project';
import { Footer } from './components/Footer';

import './styles/scrollup.css';
import './styles/navbar.css';
import './styles/banner.css';
import './styles/about.css';
import './styles/tools.css';
import './styles/project.css';
import './styles/footer.css';
import './styles/popup.css';

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Scrollup />
        <Navbar />
        <Banner />
        <About />
        <Tools />
        <Project />
        <Footer />
      </I18nextProvider>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
