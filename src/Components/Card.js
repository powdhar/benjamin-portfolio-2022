import '../Styles/Card.css';
import React, { Component } from 'react';

const projects = [{
    "projectName": 'Norsk Heiskontroll',
    "projectDescription": 'Tjenesteutvikling for heisbransjen'
}, {
    "projectName": 'Prosjekt',
    "projectDescription": 'Beskrivelse'
}

]
/*
export default class Card extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="Card">
                    <h2>{projects[0].projectName}</h2>
                    <p>{projects[0].projectDescription}</p>
                </div>
            </React.Fragment>
        )
    }
}
*/
export default class Card extends Component {
    render() {
        return(
            <React.Fragment>
                {projects.map(({ projectName, projectDescription}) => (
                    <><div className='Card'><h2 key={projectName}> {projectName} </h2><p key={projectDescription}> {projectDescription}</p></div></>
                ))}
            </React.Fragment>
        )
    }
}