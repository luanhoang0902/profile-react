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
                    <image src="./1.png"></image>
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