import React, { useState, useEffect, useRef } from 'react';
import { DiReact, DiCss3, DiHtml5, DiIllustrator, DiPhotoshop } from 'react-icons/di'; 
import { SiCsharp, SiUnity, SiMongodb, SiFigma, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


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

import easylistimg1 from '../img/projects/easylist/easylistimg1.png';
import easylistimg2 from '../img/projects/easylist/easylistimg2.png';
import easylistimg3 from '../img/projects/easylist/easylistimg3.png';
import easylistimg4 from '../img/projects/easylist/easylistimg4.png';
import easylistimg5 from '../img/projects/easylist/easylistimg5.png';
import easylistimg6 from '../img/projects/easylist/easylistimg6.png';
import easylistlogo from '../img/projects/easylist/easylistlogo.svg';

import synergiaimg1 from '../img/projects/synergia/synergiaimg1.png';
import synergiaimg2 from '../img/projects/synergia/synergiaimg2.png';
import synergiaimg3 from '../img/projects/synergia/synergiaimg3.png';
import synergiaimg4 from '../img/projects/synergia/synergiaimg4.png';
import synergiaimg5 from '../img/projects/synergia/synergiaimg5.png';
import synergiaimg6 from '../img/projects/synergia/synergiaimg6.png';
import synergialogo from '../img/projects/synergia/synergialogo.svg';

import stellaimg1 from '../img/projects/stella/stellaimg1.png';
import stellaimg2 from '../img/projects/stella/stellaimg2.png';
import stellaimg3 from '../img/projects/stella/stellaimg3.png';
import stellaimg4 from '../img/projects/stella/stellaimg4.png';
import stellaimg5 from '../img/projects/stella/stellaimg5.png';
import stellaimg6 from '../img/projects/stella/stellaimg6.png';
import stellalogo from '../img/projects/stella/stellalogo.svg';

import Popup from './Popup';

export const Project = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('vortex.title'),
      tools: [<SiUnity  key="unity" className='mr-2' /> , <SiCsharp key="csharp" className='mr-2' />, <DiPhotoshop key="photoshop" className='mr-2' />],
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
      tools: [<DiHtml5 key="html" className='mr-2' />, <DiCss3 key="css" className='mr-2' />, <SiMongodb  key="mongodb" className='mr-2' />],
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
      tools: [<SiFigma key="figma" className='mr-2' />, <DiIllustrator key="illustrator" className='mr-2' />, <DiPhotoshop key="photoshop" className='mr-2' />],
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
    {
    id: 4,
      title: t('easylist.title'),
      tools: [<SiDotnet key="dotnet" className='mr-2' />, <SiCsharp key="csharp" className='mr-2' />, <RiJavascriptFill key="javascript" className='mr-2' />],
      description: t('easylist.description'),
      detailsLink: '#',
      paragraph: [
        <p>{t('easylist.paragraph1')}</p>,
        <p>{t('easylist.paragraph2')}</p>,
        <p>{t('easylist.paragraph3')}</p>
      ],
      image: easylistimg1,
      logo: easylistlogo,
      secondimg: easylistimg2,
      thirdimg: easylistimg3,
      fourthimg: easylistimg4,
      fifthimg: easylistimg5,
      sixthimg: easylistimg6,
    },
    {
      id: 5,
      title: t('synergia.title'),
      tools: [<SiFigma key="figma" className='mr-2' />, <DiIllustrator key="illustrator" className='mr-2' />, <DiPhotoshop key="photoshop" className='mr-2' />],
      description: t('synergia.description'),
      detailsLink: '#',
      paragraph: [
        <p>{t('synergia.paragraph1')}</p>,
        <p>{t('synergia.paragraph2')}</p>,
        <p>{t('synergia.paragraph3')}</p>
      ],
      image: synergiaimg1,
      logo: synergialogo,
      secondimg: synergiaimg2,
      thirdimg: synergiaimg3,
      fourthimg: synergiaimg4,
      fifthimg: synergiaimg5,
      sixthimg: synergiaimg6,
    },
    {
      id: 6,
      title: t('stella.title'),
      tools: [<SiCsharp key="csharp" className='mr-2' />, <SiMicrosoftsqlserver key="sqlserer" className='mr-2' />],
      description: t('stella.description'),
      detailsLink: '#',
      paragraph: [
        <p>{t('stella.paragraph1')}</p>,
        <p>{t('stella.paragraph2')}</p>,
        <p>{t('stella.paragraph3')}</p>
      ],
      image: stellaimg1,
      logo: stellalogo,
      secondimg: stellaimg2,
      thirdimg: stellaimg3,
      fourthimg: stellaimg4,
      fifthimg: stellaimg5,
      sixthimg: stellaimg6,
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
    <section id='projects'>
      <div className='container'>
        <div className='headings-container'>
          <h2>{t('project.title')}</h2>
          <div className='subtitle-ctrl' >
            <p>{t('project.subtitle')}</p>
          </div>
        </div>
        <div className="arrow-buttons">
          <div className="prev-arrow" onClick={() => sliderRef.current.slickPrev()}>
            <span className='arrow-icon'><BiSolidLeftArrow /></span>
          </div>
          <div className="next-arrow" onClick={() => sliderRef.current.slickNext()}>
            <span className='arrow-icon'><BiSolidRightArrow /></span>
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
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <h4 className='card-title'>{t('project.tools')}</h4>
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
