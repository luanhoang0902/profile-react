import React from 'react';
import PropTypes from 'prop-types';

import "../css/Home.css"

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className="home">
            <span style={{fontSize: 26}}>Cảm ơn quý anh chị đã dành thời gian xem thông tin của tôi</span>
            <div className="home-content">
            <div className="home-image"> 
            <img src = './1.png'/>
            </div>
            <div className="home-infomation">
                <div className="home-infomation__Education">
                    <span>Học vấn</span>
                    <p>Trường: Đại học Bách Khoa Hà Nội</p>
                    <p>Khoa: Điện tử Viễn thông</p>
                    <p>Chuyên ngành: Khoa học máy tính</p>
                </div>
                <div className="home-infomation__favorite">
                <span style={{fontSize: 30}}>Sở thích</span>
                <div>
                <b>Đi du lịch</b><br/>
                <img src = './coto.png'/>
                <img src = './hanoi.png'/>
                </div>
                <div>
                <b>Ca hát</b><br/>
                <audio src = './autotool.m4a' controls></audio>
                </div>
                <div>
                <b>Đọc sách</b>
                <p>Một cuộc đời đáng sống</p>
                <p>Yêu thương trọn vẹn</p>
                </div>
                </div>
                <div className="home-infomation__dream"></div>

            </div>
            </div>
        </div>
    );
}

export default Home;