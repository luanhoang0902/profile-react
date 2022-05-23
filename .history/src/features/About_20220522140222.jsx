import React from 'react';
import PropTypes from 'prop-types';

import "../css/About.css"

About.propTypes = {
    
};

function About(props) {
    return (
        <div className="about">
            <u>About</u>
            <div className="about-content">
                <div className="about-content__avatar">
                    <img src = "./1.png"/>
                </div>
                <div className="about-content__infomation">
                    <p>Họ tên: Hoàng Văn Luân</p>
                    <p>Ngày sinh: 12/03/1997</p>
                    <p>Trường học: Đại học Bách Khoa Hà Nội</p>
                    <p>Hiện tại tôi đang trên con đường trở thành lập trình viên Front End chuyên nghiệp</p>
                </div>
            </div>
        </div>
    );
}

export default About;