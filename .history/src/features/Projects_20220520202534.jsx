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
       name: 'nike',
       feature: ['hoang','van','luan'],
       technology: ['html, css','js','reactjs','redux']
    },
    {
        id: 2,
        name: 'hook',
        feature: ['hoang1','van1','luan1'],
        technology: ['html, css','js','reactjs','redux']
     },
     {
        id: 3,
        name: 'todo-list',
        feature: ['hoang2','van2','luan2'],
        technology: ['html, css','js','reactjs','redux']
     },
     {
        id: 4,
        name: 'cv',
        feature: ['hoang3','van3','luan3'],
        technology: ['html, css','js','reactjs','redux']
     },
]
function Projects(props) {
  const slider = useRef(); 
  const [imageSlide, setImageSlide] = useState('')
  const [id, setId] = useState('1')

  console.log(id)

  const handleClickProject = (e) => {
    slider.current.style.display = "block";
    setImageSlide(e.target.src)
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
        <div className="project-list__slider-x" >
        <i class='bx bx-x' onClick = {() => {slider.current.style.display = "none";}}></i>
        </div>
        <div className="project-list__slider-all">
          <i class='bx bx-chevron-left'></i>
          <div className="project-list__slider-content">
            <div className="project-list__slider-content-image">
                <img src={imageSlide}></img>
            </div>
            <div className="project-list__slider-content-detail">
                <div>Name Project: {detail[`${id - 1}`].name}</div>
                <div>Feature: {detail[`${id - 1}`].feature[0]}
                    <ul>Feature:
                        <li>{detail[`${id - 1}`].feature[0]}</li>
                        <li>{detail[`${id - 1}`].feature[1]}</li>
                        <li>{detail[`${id - 1}`].feature[2]}</li>
                    </ul>
                </div>
                <div>Technology: {detail[`${id - 1}`].technology[2]}</div>
            </div>
          </div>
          <i class='bx bx-chevron-right' ></i>
        </div>
      </div>
    </div>
  );
}

export default Projects;
