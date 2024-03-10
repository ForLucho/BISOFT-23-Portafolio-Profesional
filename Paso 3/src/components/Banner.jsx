// Banner.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from "../img/logo.svg";

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="slider-area pos-relative d-flex align-items-center justify-content-center" id='home'>
      <div className="overlay"></div>
      {[{
        titleKey: "banner.slider1.title",
        textKey: "banner.slider1.text",
      }].map((slider, index) => (
        <div
          key={index}
          className="single-slider slider-height d-flex align-items-center justify-content-center"
          data-index={index}
        >
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="slider-content slider-content-2">
                  <img src={logo} alt="Icono de un logo personal de una llama junto con su sombra." className="logo" />
                  <h1 className="white-color f-700" data-animation="fadeInUp" data-delay=".2s">
                    {t(slider.titleKey)}
                  </h1>
                  <p data-animation="fadeInUp" data-delay=".4s">
                    {t(slider.textKey)}
                  </p>
                  <button className="btn btn-primary raise mt-4" data-animation="fadeInUp" data-delay=".6s">
                    {t('banner.slider1.button')}
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
