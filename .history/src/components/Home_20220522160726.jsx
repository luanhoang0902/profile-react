import React from 'react';
import PropTypes from 'prop-types';

import "../css/Home.css"

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className="home">
            <span>Cảm ơn quý anh chị đã dành thời gian xem thông tin của tôi</span>
            <div> 
            <audio src = './autotoo.m4a' ></audio>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;