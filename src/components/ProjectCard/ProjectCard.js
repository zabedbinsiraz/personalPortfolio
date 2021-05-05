import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div
            className="card p-2 m-1 bg-dark"
            style={{ width: "20rem", height: "500px" }}
          >
            <div id="#c" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={repo.img1} className="d-block w-100 h-100" alt="" />
                </div>
                <div className="carousel-item">
                  <img src={repo.img2} className="d-block w-100 h-100" alt="" />
                </div>
                <div className="carousel-item">
                  <img src={repo.img3} className="d-block w-100 h-100" alt="" />
                </div>
              </div>
            </div>
            <div className="card-body ">
              <div className="repo-name-div ">
                <p
                  className="repo-name m-1 p-1 text-white"
                  style={{ color: theme.text }}
                >
                  {repo.title}
                </p>
              </div>
              <p
                className="repo-description text-white"
                style={{ color: theme.text }}
              >
                {repo.desc}
              </p>
            </div>
            <div className="repo-details">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div className="card-body">
              <a href={repo.liveLink} className="card-link">
                Live
              </a>
              <a href={repo.codeLink} className="card-link">
                Code
              </a>
            </div>
          </div>

          {/* <img style={{height:'150px',width:'300px',marginBottom:'5px'}} src={jabed} alt=""/>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div> */}
        </div>
      </Fade>
    </div>
  );
}
