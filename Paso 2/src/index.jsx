import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootswatch/dist/simplex/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery.min.js';

import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';

import './styles/navbar.css';
import './styles/banner.css';
import './styles/about.css';
import './styles/feature.css';
import './styles/footer.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Feature />
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
