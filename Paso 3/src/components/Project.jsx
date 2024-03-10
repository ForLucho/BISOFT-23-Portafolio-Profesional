import React, { useState, useEffect, useRef } from 'react';
import { DiReact, DiCss3, DiNodejs } from 'react-icons/di'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";


import vorteximg1 from '../img/projects/vortex/vorteximg1.png';
import vorteximg2 from '../img/projects/vortex/vorteximg2.png';
import vorteximg3 from '../img/projects/vortex/vorteximg3.png';
import vorteximg4 from '../img/projects/vortex/vorteximg4.png';
import vorteximg5 from '../img/projects/vortex/vorteximg5.png';
import vorteximg6 from '../img/projects/vortex/vorteximg6.png';
import vortexlogo from '../img/projects/vortex/vortexlogo.svg';

import mocaimg1 from '../img/projects/moca/mocaimg1.png';
import mocaimg2 from '../img/projects/moca/mocaimg2.png';
import mocaimg3 from '../img/projects/moca/mocaimg3.png';
import mocaimg4 from '../img/projects/moca/mocaimg4.png';
import mocaimg5 from '../img/projects/moca/mocaimg5.png';
import mocaimg6 from '../img/projects/moca/mocaimg6.png';
import mocalogo from '../img/projects/moca/mocalogo.svg';

import nionimg1 from '../img/projects/nion/nionimg1.png';
import nionimg2 from '../img/projects/nion/nionimg2.png';
import nionimg3 from '../img/projects/nion/nionimg3.png';
import nionimg4 from '../img/projects/nion/nionimg4.png';
import nionimg5 from '../img/projects/nion/nionimg5.png';
import nionimg6 from '../img/projects/nion/nionimg6.png';
import nionlogo from '../img/projects/nion/nionlogo.svg';

import Popup from './Popup';

export const Project = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('vortex.title'),
      tools: [<DiReact key="react" className='mr-2' />, <DiCss3 key="css" className='mr-2' />, <DiNodejs key="node" className='mr-2' />],
      description: t('vortex.description'),
      detailsLink: '#',
      paragraph: [
        <p>{t('vortex.paragraph1')}</p>,
        <p>{t('vortex.paragraph2')}</p>,
        <p>{t('vortex.paragraph3')}</p>
      ],
      image: vorteximg1,
      logo: vortexlogo,
      secondimg: vorteximg2,
      thirdimg: vorteximg3,
      fourthimg: vorteximg4,
      fifthimg: vorteximg5,
      sixthimg: vorteximg6,
    },
    {
      id: 2,
      title: t('moca.title'),
      tools: [<DiReact key="react" className='mr-2' />, <DiCss3 key="css" className='mr-2' />, <DiNodejs key="node" className='mr-2' />],
      description: t('moca.description'),
      detailsLink: '#',
      paragraph: [
        <p>{t('moca.paragraph1')}</p>,
        <p>{t('moca.paragraph2')}</p>,
        <p>{t('moca.paragraph3')}</p>
      ],
      image: mocaimg1,
      logo: mocalogo,
      secondimg: mocaimg2,
      thirdimg: mocaimg3,
      fourthimg: mocaimg4,
      fifthimg: mocaimg5,
      sixthimg: mocaimg6,
    },
    {
      id: 3,
      title: t('nion.title'),
      tools: [<DiReact key="react" className='mr-2' />, <DiCss3 key="css" className='mr-2' />, <DiNodejs key="node" className='mr-2' />],
      description: t('nion.description'),
      detailsLink: '#',
      paragraph: [
        <p>{t('nion.paragraph1')}</p>,
        <p>{t('nion.paragraph2')}</p>,
        <p>{t('nion.paragraph3')}</p>
      ],
      image: nionimg1,
      logo: nionlogo,
      secondimg: nionimg2,
      thirdimg: nionimg3,
      fourthimg: nionimg4,
      fifthimg: nionimg5,
      sixthimg: nionimg6,
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991.9);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991.9);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      // Si cambiamos de móvil a escritorio, mover el slider a la primera diapositiva
      sliderRef.current.slickGoTo(0);
      setCurrentSlide(0); // Actualizar el estado de la diapositiva actual
    }
  }, [isMobile]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 750,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    swipe: isMobile,
    swipeToSlide: true,
    draggable: true,
    arrows: false, // Aquí se desactivan las flechas de navegación
    afterChange: (index) => setCurrentSlide(index)
};


  const numSlides = projects.length;
  const numMoves = Math.ceil(numSlides / settings.slidesToShow);

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section id='project'>
      <div className='container'>
        <h2>{t('project.title')}</h2>
        <div className='subtitle-ctrl' >
        <h3>{t('project.latestWorks')}</h3>
        <div className="arrow-buttons">
          <div className="prev-arrow" onClick={() => sliderRef.current.slickPrev()}>
            <span className='arrow-icon'><BiSolidLeftArrow /></span>
          </div>
          <div className="next-arrow" onClick={() => sliderRef.current.slickNext()}>
            <span className='arrow-icon'><BiSolidRightArrow /></span>
          </div>
          </div>
        </div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project) => (
              <div key={project.id} className='col-md-4 mb-4' style={'height: 100%;'}>
                <div className='card'>
                <img className='card-img-top' src={project.image} alt='Project' />
                  <div className='card-body'>
                    <img src={project.logo} alt='Logo' className='mr-2' />
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <h5 className='card-title'>{t('project.tools')}</h5>
                    <div className='text-danger'>
                      {project.tools}
                    </div>
                    <div>
                      <a className='btn btn-primary raise mt-4' onClick={() => openPopup(project)}>{t('project.viewDetails')}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="indicators">
            {[...Array(numMoves)].map((_, index) => (
              <div
                key={index}
                className={`indicator ${index * settings.slidesToScroll <= currentSlide && currentSlide < (index + 1) * settings.slidesToScroll ? 'active' : ''}`}
                onClick={() => sliderRef.current.slickGoTo(index * settings.slidesToScroll)}
              />
            ))}
          </div>
        </div>
      </div>
      {isPopupOpen && selectedProject && <Popup project={selectedProject} onClose={closePopup} />}
    </section>
  );
};
