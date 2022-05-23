import React from "react";
import PropTypes from "prop-types";

import "../css/Projects.css";

Projects.propTypes = {};

const projects = [
    {
        id: 1,
        img: './1.png'
    },
    {
        id: 2,
        img: './2.png'
    },
    {
        id: 3,
        img: './3.png'
    },
    {
        id: 4,
        img: './4.png'
    }
]


function Projects(props) {

    const handleClickProject = (e) => {
        console.log(e.target)
    }
  return (
    <div className="projects">
      <u>Projects</u>
      <div className="project-list">
      {projects.map((project , index) => (
        <div  key = {index} onClick={handleClickProject}>
          <img src={project.img}></img>
        </div>
      ))}
        {/* <div className="project-list__one">
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
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
