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
                <div>
                <p>Đi du lịch</p>
                <img src = './1.png'/>
                </div>
                <div>
                <p>Ca hát</p>
                <audio src = './autotool.m4a' controls></audio>
                </div>
                <div>
                <b>Đọc sách</b>
                </div>
                </div>
                <div className="home-infomation__dream"></div>

            </div>
            </div>
        </div>
    );
}

export default Home;