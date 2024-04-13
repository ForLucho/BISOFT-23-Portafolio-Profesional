import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Popup = ({ project, onClose }) => {
  const [mainImage, setMainImage] = useState(project.image);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.classList.add('modal-open');
    // Guardar imágenes adicionales en un arreglo
    const images = [project.image, project.secondimg, project.thirdimg, project.fourthimg, project.fifthimg, project.sixthimg];
    // Filtrar imágenes no definidas
    const filteredImages = images.filter(img => img);
    setAdditionalImages(filteredImages);
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [project]); // Asegurarse de que se actualice cuando cambie el proyecto

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Habilita el modo centro
    centerPadding: '0', // Elimina el padding del centro
    autoplay: true, // Habilita la reproducción automática
    autoplaySpeed: 5000, // Configura el intervalo de tiempo entre diapositivas (en milisegundos)
    beforeChange: (_, next) => {
      // Cambiar la imagen principal con la imagen del arreglo correspondiente
      if (next < additionalImages.length) {
        setMainImage(additionalImages[next]);
      }
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };  

  return (
    <>
      <div id="project-detail">
        <div className="modal-backdrop fade show" style={{ backdropFilter: 'blur(5px)' }} onClick={handleClickOutside}></div>
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'transparent' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className='modal-head'>
                <div className='modal-title'>
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
                <div className='modal-button'>
                  <button className="btn-close" onClick={onClose}></button>
                </div>
              </div>
                  
              <div className="modal-body d-flex">
                <div className="modal-left">
                  <div className='text-danger'>
                    {project.tools}
                  </div>
                  <div className='text-paragraph'>
                    {project.paragraph}
                  </div>
                </div>
                <div className="modal-right d-flex justify-content-center align-items-center">
                  <div className="project-images">
                    <div className="main-image">
                      <img className="main-img" src={mainImage} alt="Project" />
                    </div>
                    <Slider {...settings}>
                      {/* Mapear las imágenes adicionales */}
                      {additionalImages.map((image, index) => (
                        <div key={index}>
                          <img src={image} alt={`Image${index + 1}`} />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
