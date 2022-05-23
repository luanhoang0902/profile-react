import React, { useRef, useState } from "react";
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
const detail = [
  {
    id: 1,
    name: "nike",
    feature: ["hoang", "van", "luan"],
    technology: ["html5", "css3", "javascript", "react", "redux"],
  },
  {
    id: 2,
    name: "hook",
    feature: ["hoang1", "van1", "luan1"],
    technology: ["html5", "css3", "javascript", "redux"],
  },
  {
    id: 3,
    name: "todo-list",
    feature: ["hoang2", "van2", "luan2"],
    technology: ["html5", "css3", "react", "redux"],
  },
  {
    id: 4,
    name: "cv",
    feature: ["hoang3", "van3", "luan3"],
    technology: ["html5", "css3", "javascript", "react"],
  },
];
function Projects(props) {
  const slider = useRef();
  const controlLeft = useRef();
  const controlRight = useRef();
  const [imageSlide, setImageSlide] = useState("");
  const [id, setId] = useState("1");

  console.log(id);

  const handleClickProject = (e) => {
    slider.current.style.display = "block";
    setImageSlide(e.target.src);
    setId(e.target.className);
  };
  return (
    <div className="projects">
      <u>Projects</u>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} onClick={handleClickProject}>
            <img src={project.img} className={project.id}></img>
          </div>
        ))}
      </div>
      <div className="project-list__slider" ref={slider}>
        <div className="project-list__slider-x">
          <i
            class="bx bx-x"
            onClick={() => {
              slider.current.style.display = "none";
            }}
          ></i>
        </div>
        <div className="project-list__slider-all">
          <i class="bx bx-chevron-left" onClick={(e) =>{id !== 1?setId(id - 1):console.log(e)}} ref = {controlLeft}></i>
          <div className="project-list__slider-content">
            <div className="project-list__slider-content-image">
              <img src={imageSlide}></img>
            </div>
            <div className="project-list__slider-content-detail">
              <div>Name Project: {detail[id - 1].name}</div>
              <div>
                Feature: {detail[id - 1].feature[0]}
                <ul>
                  Feature:
                  {detail[id - 1].feature.map((e, index)=> (
                    <li>{e}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  Technology:
                  {detail[id - 1].technology.map((e, index)=>( 
                  <li>
                  <i class={`bx bxl-${e}`} ></i>
                  {e}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <i class="bx bx-chevron-right" ref = {controlRight}></i>
        </div>
      </div>
    </div>
  );
}

export default Projects;
