import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from './Home';
import { Events } from './Events';
import AddEvent from './AddEvent'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar className='nav-wrapper' dark expand="lg"style={{outerHeight:"100px"}}>
                <NavbarBrand className = "title" style={{color:"black", fontSize:"50px", paddingRight:"250px", paddingLeft:"25px"}}href = "/">The Home Project</NavbarBrand>
                 <Link className = "links" to="/Events" style={{paddingLeft:"200px"}}>Events</Link>
                 <Link className = "links" to="/About">About Us</Link>
                 <Link className = "links" to="/Contact">Contact Us</Link>   
          </Navbar>
          <Switch>
            <Route exact path = "/" component = { Home } />
            <Route path = "/Events" component = { Events } />
            <Route path = "/AddEvent" component = { AddEvent } />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
