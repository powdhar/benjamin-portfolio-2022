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
    "link": "href='mailto:benjaminpowdhar@gmail.com'>benjaminpowdhar@gmail.com"
}]

export default class Contact extends Component {
    render() {
        return(
            <React.Fragment>
               <section className="Contact">
                <p>Link</p>
               </section>
            </React.Fragment>
        )
    }
}

