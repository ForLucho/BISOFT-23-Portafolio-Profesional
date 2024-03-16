import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import design2 from "../img/features/design/bootstrap.svg";
import design3 from "../img/features/design/bootswatch.svg";
import design1 from "../img/features/design/figma.svg";
import design4 from "../img/features/design/illustrator.svg";
import design5 from "../img/features/design/photoshop.svg";

import front1 from "../img/features/front/css.svg";
import front2 from "../img/features/front/html.svg";
import front3 from "../img/features/front/javascript.svg";
import front4 from "../img/features/front/react.svg";
import front5 from "../img/features/front/unity.svg";

import back1 from "../img/features/back/cshart.svg";
import back2 from "../img/features/back/dotnet.svg";
import back3 from "../img/features/back/firebase.svg";
import back4 from "../img/features/back/mongodb.svg";
import back5 from "../img/features/back/mysql.svg";
import back6 from "../img/features/back/sqlserver.svg";

import colab1 from "../img/features/colab/devops.svg";
import colab2 from "../img/features/colab/git.svg";
import colab3 from "../img/features/colab/github.svg";
import colab4 from "../img/features/colab/java.svg";
import colab5 from "../img/features/colab/jira.svg";

export const Tools = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const { t } = useTranslation();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const designData = [
    { image: design1, title: t("Figma") },
    { image: design2, title: t("Bootstrap") },
    { image: design3, title: t("Bootswatch") },
    { image: design4, title: t("Illustrator") },
    { image: design5, title: t("Photoshop") }
  ];

  const frontData = [
    { image: front1, title: t("CSS") },
    { image: front2, title: t("HTML") },
    { image: front3, title: t("JavaScript") },
    { image: front4, title: t("React") },
    { image: front5, title: t("Unity") }
  ];

  const backData = [
    { image: back1, title: t("C#") },
    { image: back2, title: t(".NET") },
    { image: back3, title: t("Firebase") },
    { image: back4, title: t("MongoDB") },
    { image: back5, title: t("MySQL") },
    { image: back6, title: t("SQL Server") }
  ];

  const colabData = [
    { image: colab1, title: t("DevOps") },
    { image: colab2, title: t("Git") },
    { image: colab3, title: t("GitHub") },
    { image: colab4, title: t("Java") },
    { image: colab5, title: t("Jira") }
  ];

  const arrowIcon = "fa fa-angle-right";

  return (
    <>
      <div className="feature-section" id="tools">
        <div className="container">
          <div className="row">
            <div className="col-4 text-section">
              <h2 className="feature-section h2 mb-4">{t("features.tools")}</h2>
              <h3>{t("features.highlightedTechnologies")}</h3>
              <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {Array.from({ length: 4 }, (_, i) => (
                  <a key={`tab${i + 1}`} className={`nav-link ${activeTab === `tab${i + 1}` ? "active" : ""}`} onClick={() => handleTabClick(`tab${i + 1}`)} id={`v-pills-tab${i + 1}`} data-toggle="pill" role="tab" aria-controls={`v-pills-tab${i + 1}`} aria-selected={activeTab === `tab${i + 1}`}>
                    {t(["features.design", "features.frontend", "features.backend", "features.collaboration"][i])} {activeTab === `tab${i + 1}` && <i className={arrowIcon}></i>}
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
                          <img src={item.image} alt={`${t("features.iconPrefix")} ${item.title}`} />
                          </div>
                        </div>
                      ))}
                    {activeTab === "tab2" &&
                      frontData.map((item, index) => (
                        <div key={`front${index}`} className="col-4">
                          <div className="col-card">
                          <img src={item.image} alt={`${t("features.iconPrefix")} ${item.title}`} />
                          </div>
                        </div>
                      ))}
                    {activeTab === "tab3" &&
                      backData.map((item, index) => (
                        <div key={`back${index}`} className="col-4">
                          <div className="col-card">
                          <img src={item.image} alt={`${t("features.iconPrefix")} ${item.title}`} />
                          </div>
                        </div>
                      ))}
                    {activeTab === "tab4" &&
                      colabData.map((item, index) => (
                        <div key={`colab${index}`} className="col-4">
                          <div className="col-card">
                          <img src={item.image} alt={`${t("features.iconPrefix")} ${item.title}`} />
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

