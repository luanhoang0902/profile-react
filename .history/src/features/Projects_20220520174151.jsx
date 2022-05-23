import React from "react";
import PropTypes from "prop-types";

import "../css/Projects.css";

Projects.propTypes = {};

function Projects(props) {
  return (
    <div className="projects">
      <u>Projects</u>
      <div className="project-list">
        <div className="project-list__one">
          <img src="./1.png"></img>
        </div>
        <div className="project-list__two">
          <img src="./2.png"></img>
        </div>
        <div className="project-list__three">
          <img src="./3.png"></img>
        </div>
        <div className="project-list__four">
          <img src="./4.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
