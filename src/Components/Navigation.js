import '../Styles/Navigation.css';
import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className='Navigation'>
                    <ul>
                        <li><a className="current" href="#">Prosjekter</a></li>
                        <li><a href="#">Om meg</a></li>
                    </ul>
                </nav>
            </React.Fragment>
          );
    }
};



