import '../Styles/Card.css';
import React, { Component } from 'react';
import image from '../Resources/dummyImage.jpg';

const projects = [{
    "projectName": 'Prosjekt1',
    "projectDescription": 'Beskrivelse'
}, {
    "projectName": 'Prosjekt2',
    "projectDescription": 'Beskrivelse'
}

]

export default class Card extends Component {
    render() {
        return(
            <React.Fragment>
                {projects.map(({ projectName, projectDescription}) => (
                    <><div className='Card'><div className='ProjectText'><h2 key={projectName}> {projectName} </h2><p key={projectDescription}> {projectDescription}</p></div><img className="ProjectImage" src= { image } alt="Thumbnail"></img></div></>
                ))}
            </React.Fragment>
        )
    }
}