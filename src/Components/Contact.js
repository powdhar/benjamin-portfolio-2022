import '../Styles/Contact.css';
import React, { Component } from 'react';

const links = [{
    "label": "Send meg en e-post",
    "link": "href='mailto:benjaminpowdhar@gmail.com'>benjaminpowdhar@gmail.com"
}, {
    "label": "Nå ut til meg på LinkedIn",
    "link": 'href="https://www.linkedin.com/in/benjamin-powdhar/" target="_blank" rel="noopener noreferrer">linkedin.com/in/benjamin-powdhar/'
}, {
    "label": "Ta en titt på CV'en min",
    "link": 'href="https://drive.google.com/file/d/19pWEYM4S6o87GE7uqEpgxqVmFIvKauHm/view" target="_blank" rel="noopener noreferrer"></i>Last ned som PDF'
}]

export default class Contact extends Component {
    render() {
        return(
            <React.Fragment>
              {links.map(({ label, link }) => (
                <><div className='Contact'><p key={label}>{label}</p><a key={link}>Lenke</a></div></>
              ))}
            </React.Fragment>
        )
    }
}

