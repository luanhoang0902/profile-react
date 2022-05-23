import React from 'react';
import PropTypes from 'prop-types';

import "../css/Technologies.css"

Technologies.propTypes = {
    
};

function Technologies(props) {
    return (
        <div className = 'technologies'>
            <u>Technologies</u>
            <div>
                <span>
                These are some technologies that I've learnt
                so far through some small projects and courses.
                </span>
                <div>DOM world
                    <div>Technologies1</div>
                </div>
                <div>Libraries/ Frameworks
                    <div>Technologies2</div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;