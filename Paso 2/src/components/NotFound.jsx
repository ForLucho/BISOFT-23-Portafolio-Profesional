import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageNotFound from "../img/not-found-image.svg";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/notFound");
  }, [navigate]);

  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "612px" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1>404 Not Found</h1>
            <img
              src={imageNotFound}
              alt="Imagen de Not Found."
              className="img-fluid"
            />
            <p className="my-4 text-center highlight-text">
              Lo sentimos, la página que estás buscando no se encontró.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
