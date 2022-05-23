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
                <span stype = {{marginTop: 10}}>
                These are some technologies that I've learnt
                so far through some small projects and courses.
                </span>
                <div className = 'technologies__content-1'>DOM world
                    <div className = 'technologies__content-item1'>Technologies1</div>
                </div>
                <div className = 'technologies__content-2'>Libraries/ Frameworks
                    <div className = 'technologies__content-item2'>Technologies2</div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;