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
                <div className="about-content__avatar">
                    <img src = "./1.png"/>
                </div>
                <div className="about-content__infomation">
                    <p>Fullname: Hoang Van Luan</p>
                    
                </div>
            </div>
        </div>
    );
}

export default About;