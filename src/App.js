import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Organization } from './Organization';
import { Jumbotron } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Jumbotron id = "title">The Home Project</Jumbotron>
        <React.Fragment>
          <style>{'body {background-color: #fafaed;}'}</style>
          <style>
          @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600');}
          </style>
          <div className="container">
          <button id = "orgButton">
            <Link style={{textDecoration:'none'}} to="/organization">Organization?</Link>
            {' '}
          </button>
            <Route path="/organization" component={ Organization } />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
