import React from 'react';
import PropTypes from 'prop-types';

import "../css/Home.css"

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className="home">
            <span>Cảm ơn quý anh chị đã dành thời gian xem thông tin của tôi</span>
            <div className="home-content">
            <div className="home-image"> 
            <img src = './1.png'/>
            </div>
            <div className="home-infomation">
                <div className="home-infomation__Education"></div>
                <div className="home-infomation__favorite">
                <div>Đi du lịch</div>
                <div>Ca hát</div>
                <div>Đọc sách</div>
                <audio src = './autotool.m4a' controls></audio>
                </div>
                <div className="home-infomation__dream"></div>

            </div>
            </div>
        </div>
    );
}

export default Home;