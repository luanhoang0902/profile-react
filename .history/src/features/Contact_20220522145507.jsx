import React from "react";
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
    name: "My Email",
    infomation: "0343151097",
    icon: "bx-envelope",
  },
  {
    name: "My Address",
    infomation: "luan.hoang.van.1997@gmail.com",
    icon: "bxs-edit-location",
  },
];

function Contact(props) {
  return (
    <div className="contact">
      <u>Contact</u>
      <div className="contact-content">
        <div className="contact-img"></div>
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
