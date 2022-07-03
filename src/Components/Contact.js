import '../Styles/Contact.css';
import React, { Component } from 'react';

const links = [{
    "label": 'Send meg en e-post',
    "link": 'mailto:benjaminpowdhar@gmail.com>benjaminpowdhar@gmail.com',
    "linkText": 'benjaminpowdhar@gmail.com'
}, {
    "label": 'Nå ut til meg på LinkedIn',
    "link": 'https://www.linkedin.com/in/benjamin-powdhar/" target="_blank" rel="noopener noreferrer">linkedin.com/in/benjamin-powdhar/',
    "linkText": 'linkedin.com/in/benjamin-powdhar/'
}, {
    "label": "Ta en titt på CV'en min",
    "link": 'https://drive.google.com/file/d/19pWEYM4S6o87GE7uqEpgxqVmFIvKauHm/view" target="_blank" rel="noopener noreferrer"></i>Last ned som PDF',
    "linkText": 'Last ned som PDF'
}]

export default class Contact extends Component {
    render() {
        return(
            <React.Fragment>
              {links.map(({ label, link, linkText }) => (
                <><div className='Contact' key="key"><p key={label}>{label}</p><a key={link} href={link} key1={linkText}>{linkText}</a></div></>
              ))}
            </React.Fragment>
        )
    }
}

