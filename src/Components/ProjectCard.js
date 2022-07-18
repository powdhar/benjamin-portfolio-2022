import '../Styles/ProjectCard.css';
import React, { Component } from 'react';

const projects = [{
    "projectName": 'Hjemmelaget Portefølje',
    "projectDescription": 'Design og koding av egen portefølje',
    "projectImage": 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&ar=4:3&fit=crop&w=1770&q=80'
}, {
    "projectName": 'Majorstuen Sykkelverksted',
    "projectDescription": 'Det var på tide med ny hjemmeside sykkelverkstedet',
    "projectImage": 'https://images.unsplash.com/photo-1639493115941-a70fcef4f715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&ar=4:3&fit=crop&w=1770&q=80'
}
]

export default class ProjectCard extends Component {
    render() {
        return(
            <React.Fragment>
                {projects.map(({ projectName, projectDescription, projectImage}) => (
                    <><div className='ProjectCard'><div className='ProjectText'><h2 key={projectName}> {projectName} </h2><p key={projectDescription}> {projectDescription}</p></div><img className="ProjectImage" key={projectImage} src= { projectImage } alt="Thumbnail"></img></div></>
                ))}
            </React.Fragment>
        )
    }
}