import React from 'react';
import aboutImg from "../img/about-image.svg";
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='container about-container' id='about'>
        <h2>{t("about.title")}</h2>
        <p>{t("about.subtitle")}</p>
        <div className="subcontainer">
          <div className="about-row">
            <div className='about-image-content'>
              <img
                className="img-about"
                src={aboutImg}
                alt="about.altxt"
              />
            </div>
          </div>
          <div className="about-row">
            <h3 className="mb-4">{t("about.professionalJourneyTitle")}</h3>
            <p>{t("about.professionalJourneyContent1")}</p>
            <p>{t("about.professionalJourneyContent2")}</p>
          </div>
        </div>
      </div>
    </>
  );
};
