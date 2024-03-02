import React, { useState } from 'react';

export const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <>
      <footer className="footer footer-bg-darkblue text-light " id="footer">

        <div className="container row footer-container footer-custom-row">
        
          <div className="col-md-6">
            <h2 className="footer-title mt-5 mb-5">Ponte en contacto</h2>
            <div className="footer-info">
              <i className="bi bi-telephone"></i>
              <div className="text-container">
                <h3 className="footer-column-title">Llámame</h3>
                <p>(+506) 8557-7057</p>
              </div>
            </div>

            <div className="footer-info">
              <i className="bi bi-envelope"></i>
              <div className="text-container">
                <h3 className="footer-column-title">Escríbeme</h3>
                <p>luis.edmc2004@gmail.com</p>
              </div>
            </div>

            <div className="footer-info">
              <i className="bi bi-geo-alt"></i>
              <div className="text-container">
                <h3 className="footer-column-title">Encuéntrame</h3>
                <p>San José, Costa Rica</p>
              </div>
            </div>
          </div>

          <div className="row col-md-6 footer-custom-md-6">
            <div>
              <h2 className="footer-title mt-5 mb-5">Solicitar Servicios Freelance</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Ingresa tu nombre"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <span className="input-group-text"><i className="bi bi-person form-icons"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <div className="input-group">                   
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Ingresa tu correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <span className="input-group-text"><i className="bi bi-envelope form-icons"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Detalles del Proyecto</label>
                  <div className="input-group">
                    <textarea
                      className="form-control textarea"
                      id="message"
                      rows="3"
                      placeholder="Cuéntame sobre tu proyecto"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                     <span className="input-group-text"><i className="bi bi-chat-dots form-icons"></i></span>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary raise mt-4">Enviar</button>
              </form>
            </div>
          </div>
          <div className="col-md-12">
            <ul className='footer-social-media-col'>
              <li>
                <a href="https://github.com/ForLucho/">
                  <i className="fab fa-github icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/luis-monge-cort%C3%A9s-15574a211/">
                  <i className="fab fa-linkedin-in icon"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/+50685577057">
                  <i className="fab fa-whatsapp icon"></i>
                </a>
              </li>
            </ul>
            <p className="col-12 text-center">Power by React<br />Copyright © 2024, Utilizadas bajo licencias en Costa Rica</p>
          </div>
        </div>
      </footer>
    </>
  );
};
