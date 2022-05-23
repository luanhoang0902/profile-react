import React from 'react';
import PropTypes from 'prop-types';

import "../css/Technologies.css"

Technologies.propTypes = {
    
};
const doms = ["html5", "css3", "javascript", "sass"]
const libraries = ['react','redux','tailwind-css']
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
                    <ul>
                        {doms.map((dom) => (
                            <li><i class={`bx bxl-${dom}`}>{dom}</i><i class='bx bx-star'></i></li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className = 'technologies__content-2'>Libraries/ Frameworks
                    <div className = 'technologies__content-item2'>
                    <ul>
                        {libraries.map((librarie) => (
                            <li><i class={`bx bxl-${librarie}`}>{librarie}</i><i class='bx bx-star'></i></li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;