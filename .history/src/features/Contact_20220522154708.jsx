import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "../css/Contact.css";

Contact.propTypes = {};

const contacts = [
  {
    name: "Phone Number",
    infomation: "0343151097",
    icon: "bxs-phone",
  },
  {
    name: "My Address",
    infomation: "20B5 Ngõ 6 Kim Đồng",
    icon: "bxs-edit-location",
  },
  {
    name: "My Email",
    infomation: "luan.hoang.van.1997@gmail.com",
    icon: "bx-envelope",
  },
];

function Contact(props) {
    const imgContact = useRef()
    const img = useRef()
    useEffect(()=>{
        setTimeout(()=>{
            imgContact.current.style.opacity = "1";
            img.current.style.border = "2px solid var(--gray)";
        },4000)
    },[])
  return (
    <div className="contact">
      <u>Contact</u>
      <div className="contact-content">
        <div className="contact-img" ref = {img}>
            <img src = './contact.png'
                ref = {imgContact}
            />
            <div className="contact-img__left"></div>
            <div className="contact-img__top"></div>
            <div className="contact-img__right"></div>
            <div className="contact-img__bottom"></div>
        </div>
        <div className="contact-infomation">
          {contacts.map((contact) => (
            <div className="contact-box">
              <div>
                <i className={`bx ${contact.icon}`} />
              </div>
              <div>
                <b>{contact.name}</b>
                <p>{contact.infomation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
