import React from 'react';
import PropTypes from 'prop-types';

import "../css/Technologies.css"

Technologies.propTypes = {
    
};

function Technologies(props) {
    return (
        <div className = 'technologies'>
            <u>Technologies</u>
            <div className = 'technologies__content'>
                <span >
                These are some technologies that I've learnt
                so far through some small projects and courses.
                </span>
                <div className = 'technologies__content-1'>DOM world
                    <div className = 'technologies__content-item1'>
                    <i class='bx bxl-html5'></i>
                    <i class='bx bxl-css3'></i>
                    <i class='bx bxl-javascript'></i>
                    <i class='bx bxl-sass'></i>
                    </div>
                </div>
                <div className = 'technologies__content-2'>Libraries/ Frameworks
                    <div className = 'technologies__content-item2'>Technologies2</div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;