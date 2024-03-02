import React from 'react';
import aboutImg from "../img/about-image.svg";

export const About = () => {
  return (
    <>
    <div className='container about-container' id='about'>
    <h2>Acerca de mi</h2>
      <div className="subcontainer">
      <div className="about-row">
        <div className='about-image-content'>
        <img
            className="img-about"
            src={aboutImg}
            alt="Un Zorro poligonal naranja enrollado, durmiendo."
          />
        </div>
      </div>
      <div className="about-row">
        <h3 className="mb-4">Trayectoria Profesional</h3>
          <p>Soy un apasionado desarrollador de software con una trayectoria profesional 
            diversa y enriquecedora. Mi experiencia abarca roles como UX designer y 
            desarrollador frontend y backend, lo que me ha permitido obtener una comprensión 
            integral de todo el ciclo de desarrollo de software.</p>

          <p>Durante mi carrera, he trabajado en una variedad de proyectos desafiantes que me 
            han permitido desarrollar habilidades sólidas en la creación de interfaces 
            intuitivas, la implementación de funcionalidades complejas y la gestión eficiente 
            de bases de datos. Mi enfoque se centra en la entrega de soluciones de alta calidad 
            que satisfagan las necesidades y expectativas de los usuarios, al tiempo que cumplen 
            con los requisitos técnicos y comerciales del proyecto.</p>

          <p>Mi pasión por la tecnología y el diseño me impulsa a mantenerme actualizado sobre 
            las últimas tendencias y herramientas en el campo del desarrollo de software. 
            Estoy constantemente buscando oportunidades para aprender y crecer, ya sea 
            explorando nuevas tecnologías o participando en proyectos desafiantes que me 
            permitan ampliar mis habilidades y conocimientos.</p>
        </div>
      </div>
      </div>
    </>
  );
};
