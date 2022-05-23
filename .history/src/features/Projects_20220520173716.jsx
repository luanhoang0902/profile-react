import React from 'react';
import PropTypes from 'prop-types';

import "../css/Projects.css"

Projects.propTypes = {
    
};

function Projects(props) {
    return (
        <div className="projects">
            <u>Projects</u>
            <div className="project-list">
                <div className="project-list__one">
                    <image src="https://travisclark.github.io/mo-portfolio/static/media/todo.02e0ec0f326ed3bc50b5.png"></image>
                </div>
                <div className="project-list__two">

                </div>
                <div className="project-list__three">

                </div>
                <div className="project-list__four">

                </div>
            </div>
        </div>
    );
}

export default Projects;