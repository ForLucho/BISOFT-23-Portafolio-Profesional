import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Popup = ({ project, onClose }) => {
  const [mainImage, setMainImage] = useState(project.image);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

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
                    <div className="additional-images">
                      <img src={project.image} alt="Main" onClick={() => handleImageClick(project.image)} />
                      {project.secondimg && <img src={project.secondimg} alt="Second" onClick={() => handleImageClick(project.secondimg)} />}
                      {project.thirdimg && <img src={project.thirdimg} alt="Third" onClick={() => handleImageClick(project.thirdimg)} />}
                      {project.fourthimg && <img src={project.fourthimg} alt="Fourth" onClick={() => handleImageClick(project.fourthimg)} />}
                      {project.fifthimg && <img src={project.fifthimg} alt="Fifth" onClick={() => handleImageClick(project.fifthimg)} />}
                      {project.sixthimg && <img src={project.sixthimg} alt="Sixth" onClick={() => handleImageClick(project.sixthimg)} />}
                    </div>
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
