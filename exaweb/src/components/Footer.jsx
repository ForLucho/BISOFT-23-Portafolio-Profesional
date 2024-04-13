import React, { useState, useEffect } from 'react';
import { onInsert } from "../Config/api";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    details: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    details: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Reset form errors when language changes
    setFormErrors({
      name: "",
      lastname: "",
      email: "",
      details: "",
    });
  }, [i18n.language]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newFormErrors = {};

    if (formData.name.trim() === "") {
      newFormErrors.name = t("footer.nameError");
    }
    if (formData.lastname.trim() === "") {
      newFormErrors.lastname = t("footer.lastnameError");
    }
    if (formData.email.trim() === "") {
      newFormErrors.email = t("footer.emailError");
    }
    if (formData.details.trim() === "") {
      newFormErrors.details = t("footer.detailsError");
    }

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    try {
      await onInsert(formData);
      setFormData({
        name: "",
        lastname: "",
        email: "",
        details: "",
      });
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <>
      <footer className="footer footer-bg-darkblue text-light " id="contact">

        <div className="container row footer-container footer-custom-row">

        <h2>{t('footer.title')}</h2>
        <div className='subtitle-ctrl' >
        <p>{t('footer.subtitle')}</p>
        </div>
        
          <div className="col-md-6">
            <h3 className="footer-title mt-5 mb-5">{t("footer.contactTitle")}</h3>
            <div className="footer-info">
              <i className="bi bi-telephone"></i>
              <div className="text-container">
                <h4 className="footer-column-title">{t("footer.callMe")}</h4>
                <p>{t("footer.contactDetails.phoneNumber")}</p>
              </div>
            </div>

            <div className="footer-info">
              <i className="bi bi-envelope"></i>
              <div className="text-container">
                <h4 className="footer-column-title">{t("footer.emailMe")}</h4>
                <p>{t("footer.contactDetails.emailAddress")}</p>
              </div>
            </div>

            <div className="footer-info">
              <i className="bi bi-geo-alt"></i>
              <div className="text-container">
                <h4 className="footer-column-title">{t("footer.findMe")}</h4>
                <p>{t("footer.contactDetails.location")}</p>
              </div>
            </div>
          </div>

          <div className="row col-md-6 footer-custom-md-6">
            <div>
              <h3 className="footer-title mt-5 mb-5">{t("footer.hireServicesTitle")}</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">{t("footer.nameLabel")}</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person form-icons"></i></span>
                    <input
                      type="text"
                      className={`form-control ${formErrors.name && 'is-invalid'}`}
                      id="name"
                      name="name"
                      placeholder={t("footer.namePlaceholder")}
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">{t("footer.lastnameLabel")}</label>
                  <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person form-icons"></i></span>
                    <input
                      type="text"
                      className={`form-control ${formErrors.lastname && 'is-invalid'}`}
                      id="lastname"
                      name="lastname"
                      placeholder={t("footer.lastnamePlaceholder")}
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                    {formErrors.lastname && <div className="invalid-feedback">{formErrors.lastname}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">{t("footer.emailLabel")}</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-envelope form-icons"></i></span>                  
                    <input
                      type="email"
                      className={`form-control ${formErrors.email && 'is-invalid'}`}
                      id="email"
                      name="email"
                      placeholder={t("footer.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="details" className="form-label">{t("footer.detailsLabel")}</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-chat-dots form-icons"></i></span>
                    <textarea
                      className={`form-control textarea ${formErrors.details && 'is-invalid'}`}
                      id="details"
                      name="details"
                      rows="3"
                      placeholder={t("footer.detailsPlaceholder")}
                      value={formData.details}
                      onChange={handleInputChange}
                    ></textarea>
                    {formErrors.details && <div className="invalid-feedback">{formErrors.details}</div>}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary raise mt-4">{t("footer.submitButton")}</button>
              </form>
              {formSubmitted && (
                <div className="alert alert-success mt-3" role="alert">
                  {t("footer.successMessage")}
                </div>
              )}
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
            <p className="col-12 text-center">{t("footer.poweredByReact")}<br />{t("footer.copyRight")}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

