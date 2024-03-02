import React from 'react';
import logo from "../img/logo.svg";

export const Banner = () => {
  const sliders = [
    {
      title: "Luis Monge",
      text: "Desarrollador de Software",
    },
  ];

  return (
    <div className="slider-area pos-relative d-flex align-items-center justify-content-center" id='home'>
      <div className="overlay"></div>
      {sliders.map((slider, index) => (
        <div
          key={index}
          className="single-slider slider-height d-flex align-items-center justify-content-center"
          data-index={index}
        >
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="slider-content slider-content-2">
                  <img src={logo} alt="Logo" className="logo" />
                  <h1 className="white-color f-700" data-animation="fadeInUp" data-delay=".2s">
                    {slider.title}
                  </h1>
                  <p data-animation="fadeInUp" data-delay=".4s">
                    {slider.text}
                  </p>
                  <button className="btn btn-primary raise mt-4" data-animation="fadeInUp" data-delay=".6s">
                    Acerca de mi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
