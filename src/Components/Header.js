import '../Styles/Header.css';
import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="Header">
                <h1>Hallo!👋</h1>
                <p>Mitt navn er Benjamin. Jeg jobber med å bygge digitale produkter og tjenester som folk har nytte og glede av.</p>    
            </div>
        </React.Fragment>
          );
    }
};
