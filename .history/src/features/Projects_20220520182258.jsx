import React, { useRef } from "react";
import PropTypes from "prop-types";

import "../css/Projects.css";

Projects.propTypes = {};

const projects = [
  {
    id: 1,
    img: "./1.png",
  },
  {
    id: 2,
    img: "./2.png",
  },
  {
    id: 3,
    img: "./3.png",
  },
  {
    id: 4,
    img: "./4.png",
  },
];

function Projects(props) {
  const slider = useRef();

  const handleClickProject = (e) => {
    slider.current.style.display = "block";
    console.log(e.target);
  };
  return (
    <div className="projects">
      <u>Projects</u>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} onClick={handleClickProject}>
            <img src={project.img}></img>
          </div>
        ))}
      </div>
      <div className="project-list__slider" ref={slider}>
        <div className="project-list__slider-x">
        <i class='bx bx-x' ></i>
        </div>
        <div className="project-list__slider-all">
          <i class='bx bx-chevron-left'></i>
          <div className="project-list__slider-content">
            <div className="project-list__slider-content-image"></div>
            <div className="project-list__slider-content-detail"></div>
          </div>
          <i class='bx bx-chevron-right' ></i>
        </div>
      </div>
    </div>
  );
}

export default Projects;
