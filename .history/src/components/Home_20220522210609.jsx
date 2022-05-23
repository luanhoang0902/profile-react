import React from "react";
import PropTypes from "prop-types";

import "../css/Home.css";

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home">
      <span style={{ fontSize: 26 }}>
        Cảm ơn quý anh chị đã dành thời gian xem thông tin của tôi
      </span>
      <div className="home-content">
        <div className="home-content__avatar">
        <div className="home-image">
          <div className="home-image__img">
            <img src="./avatar.jpg" />
          </div>
          <div className="home-image__infomation">
              <p>Hoàng Văn Luân</p>
              <p>12/03/1998</p>
              <p>Front End Developer</p>
              <div className="home-image__infomation-button">Download</div>
          </div>
        </div>
        </div>

        <div className="home-infomation">
          <div className="home-infomation__Education">
            <span>Học vấn</span>
            <p>Trường: Đại học Bách Khoa Hà Nội</p>
            <p>Khoa: Điện tử Viễn thông</p>
            <p>Chuyên ngành: Khoa học máy tính</p>
          </div>
          <div className="home-infomation__favorite">
            <span style={{ fontSize: 30 }}>Sở thích</span>
            <div>
              <u>Đi du lịch</u>
              <br />
              <img src="./coto.png" />
              <img src="./hanoi.png" />
            </div>
            <div>
              <u>Ca hát</u>
              <br />
              <audio src="./autotool.m4a" controls style={{height: 20, width: 40}}></audio>
            </div>
            <div>
              <u>Đọc sách</u>
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
