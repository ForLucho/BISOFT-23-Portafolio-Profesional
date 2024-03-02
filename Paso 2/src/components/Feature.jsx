import React, { useState } from "react";

// Diseño
import design2 from "../img/features/design/bootstrap.svg";
import design3 from "../img/features/design/bootswatch.svg";
import design1 from "../img/features/design/figma.svg";
import design4 from "../img/features/design/illustrator.svg";
import design5 from "../img/features/design/photoshop.svg";

// Frontend
import front1 from "../img/features/front/css.svg";
import front2 from "../img/features/front/html.svg";
import front3 from "../img/features/front/javascript.svg";
import front4 from "../img/features/front/react.svg";
import front5 from "../img/features/front/unity.svg";

// Backend
import back1 from "../img/features/back/cshart.svg";
import back2 from "../img/features/back/dotnet.svg";
import back3 from "../img/features/back/firebase.svg";
import back4 from "../img/features/back/mongodb.svg";
import back5 from "../img/features/back/mysql.svg";
import back6 from "../img/features/back/sqlserver.svg";

// Colaboración
import colab1 from "../img/features/colab/devops.svg";
import colab2 from "../img/features/colab/git.svg";
import colab3 from "../img/features/colab/github.svg";
import colab4 from "../img/features/colab/java.svg";
import colab5 from "../img/features/colab/jira.svg";

export const Feature = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Arrays de imágenes y títulos por categoría
  const designData = [
    { image: design1, title: "Figma" },
    { image: design2, title: "Bootstrap" },
    { image: design3, title: "Bootswatch" },
    { image: design4, title: "Illustrator" },
    { image: design5, title: "Photoshop" }
  ];

  const frontData = [
    { image: front1, title: "CSS" },
    { image: front2, title: "HTML" },
    { image: front3, title: "JavaScript" },
    { image: front4, title: "React" },
    { image: front5, title: "Unity" }
  ];

  const backData = [
    { image: back1, title: "C#" },
    { image: back2, title: ".NET" },
    { image: back3, title: "Firebase" },
    { image: back4, title: "MongoDB" },
    { image: back5, title: "MySQL" },
    { image: back6, title: "SQL Server" }
  ];

  const colabData = [
    { image: colab1, title: "DevOps" },
    { image: colab2, title: "Git" },
    { image: colab3, title: "GitHub" },
    { image: colab4, title: "Java" },
    { image: colab5, title: "Jira" }
  ];

  // Clase de icono para la flecha
  const arrowIcon = "fa fa-angle-right";

  return (
    <>
      <div className="feature-section pt-5 pb-5" id="features">
        <div className="container">
          <div className="row">
            <div className="col-4 text-section">
              <h2 className="feature-section h2 mb-4">Herramientas</h2>
              <h3>Tecnologías Destacadas</h3>
              <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {Array.from({ length: 4 }, (_, i) => (
                  <a key={`tab${i + 1}`} className={`nav-link ${activeTab === `tab${i + 1}` ? "active" : ""}`} onClick={() => handleTabClick(`tab${i + 1}`)} id={`v-pills-tab${i + 1}`} data-toggle="pill" role="tab" aria-controls={`v-pills-tab${i + 1}`} aria-selected={activeTab === `tab${i + 1}`}>
                    {["Diseño Experiencial", "Construcción Frontend", "Infraestructura Backend", "Gestión Colaborativa"][i]} {activeTab === `tab${i + 1}` && <i className={arrowIcon}></i>}
                  </a>
                ))}
              </div>
            </div>
            <div className="tab-content col-8" id="v-pills-tabContent">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={`tabContent${i + 1}`} className={`tab-pane fade ${activeTab === `tab${i + 1}` ? "show active" : ""}`} id={`tab${i + 1}`} role="tabpanel" aria-labelledby={`v-pills-tab${i + 1}`}>
                  <div className="col-12 col-md-6 col-lg-4 columnList_cc3">
                    {activeTab === "tab1" &&
                      designData.map((item, index) => (
                        <div key={`design${index}`} className="col-4">
                          <div className="col-card">
                            <img src={item.image} alt={`Icono de ${item.title}`} />
                          </div>
                        </div>
                      ))}
                    {activeTab === "tab2" &&
                      frontData.map((item, index) => (
                        <div key={`front${index}`} className="col-4">
                          <div className="col-card">
                            <img src={item.image} alt={`Icono de ${item.title}`} />
                          </div>
                        </div>
                      ))}
                    {activeTab === "tab3" &&
                      backData.map((item, index) => (
                        <div key={`back${index}`} className="col-4">
                          <div className="col-card">
                            <img src={item.image} alt={`Icono de ${item.title}`} />
                          </div>
                        </div>
                      ))}
                    {activeTab === "tab4" &&
                      colabData.map((item, index) => (
                        <div key={`colab${index}`} className="col-4">
                          <div className="col-card">
                            <img src={item.image} alt={`Icono de ${item.title}`} />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

