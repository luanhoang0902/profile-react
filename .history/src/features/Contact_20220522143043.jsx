import React from 'react';
import PropTypes from 'prop-types';

import "../css/Contact.css"

Contact.propTypes = {
    
};

const contacts = [
    {
        name: 'Phone Number',
        infomation: '0343151097',
        icon: 'bxs-phone'
    },
    {
        name: 'My Address',
        infomation: '0343151097',
        icon: 'bx-envelope'
    },
    {
        name: 'My Email',
        infomation: 'luan.hoang.van.1997@gmail.com',
        icon: 'bxs-edit-location'
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