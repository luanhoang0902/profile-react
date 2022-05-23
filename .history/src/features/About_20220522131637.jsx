import React from 'react';
import PropTypes from 'prop-types';

import "../css/About.css"

About.propTypes = {
    
};

function About(props) {
    return (
        <div className="about">
            <u>About</u>
            <div className="about-content">
                <div className="about-content__avatar"></div>
                <div className="about-content__infomation"></div>
            </div>
        </div>
    );
}

export default About;