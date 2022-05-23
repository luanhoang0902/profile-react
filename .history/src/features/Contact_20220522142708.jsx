import React from 'react';
import PropTypes from 'prop-types';

import "../css/Contact.css"

Contact.propTypes = {
    
};

const contacts = [
    {
        name: 'Phone Number',
        infomation: '0343151097',
        icon: 'ss'
    },
    {
        name: 'My Address',
        infomation: '0343151097',
        icon: 'ss'
    },
    {
        name: 'My Email',
        infomation: 'luan.hoang.van.1997@gmail.com',
        icon: 'ss'
    }
]

function Contact(props) {
    return (
        <div className = 'contact'>
            <u>Contact</u>
            <div></div>
        </div>
    );
}

export default Contact;