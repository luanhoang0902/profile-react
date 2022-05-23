import React from 'react';
import PropTypes from 'prop-types';

import "../css/Technologies.css"

Technologies.propTypes = {
    
};
const doms = [
    {
        name: "html5",
        competently: [1, 2, 3]
    },
    {
        name: "css3",
        competently: [1, 2, 3]
    },
    {
        name: "javascript",
        competently: [1, 2, 3]
    },
    {
        name: "sass",
        competently: [1, 2]
    }
]
const libraries = [
    {
        name: "react",
        competently: [1, 2, 3]
    },
    {
        name: "redux",
        competently: [1, 2]
    }
    ,   {
        name: "tailwind-css",
        competently: [1]
    }
]
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
                            <li>
                            <div><i class={`bx bxl-${dom.name}`}>{dom.name}</i></div>
                            <div>{dom.competently.map((comp) =>
                            (<i class='bx bxs-star'></i>))}
                            <i class='bx bx-star'></i>
                            </div>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className = 'technologies__content-2'>Libraries/ Frameworks
                    <div className = 'technologies__content-item2'>
                    <ul>
                        {libraries.map((librarie) => (
                            <li>
                            <div>
                            <i class={`bx bxl-${librarie.name}`}>{librarie.name}</i>
                            </div>
                            <div>{librarie.competently.map((comp) =>
                            (<i class='bx bxs-star'></i>))}
                            <i class='bx bx-star'></i>
                            </div>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;