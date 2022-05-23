import React from 'react';
import PropTypes from 'prop-types';

import "../css/Intro.css"

Intro.propTypes = {
    
};

function Intro(props) {
    return (
        <div className="intro">
            <span className="text-1">L</span>
            <span className="text-2">U</span>
            <span className="text-3">Â</span>
            <span className="text-4">N</span>
        </div>
    );
}

export default Intro;