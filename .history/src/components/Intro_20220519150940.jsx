import React from 'react';
import PropTypes from 'prop-types';

import "../css/Intro.css"

Intro.propTypes = {
    
};

function Intro(props) {
    return (
        <div className="intro">
            <span className="text-1">
                <div></div>
            </span>
            <span className="text-2">P</span>
            <span className="text-3">E</span>
            <span className="text-4">N</span>
        </div>
    );
}

export default Intro;