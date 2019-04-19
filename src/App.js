import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Organization } from './AddOrganizationForm';
import { AddEvent } from './AddEventForm';
import { Home } from './Home';
import { Events } from './Events';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

import './css/App.css';
import 'typeface-nunito-sans';

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar className='nav-wrapper' dark expand="lg"style={{outerHeight:"100px"}}>
          <div className = "navtitle">
                <NavbarBrand className = "title" href = "/">The Home Project</NavbarBrand>
                </div>
                <div className = "tabs">
                 <Link className = "links" to="/Events">Events</Link>
                 <Link className = "links" to="/About">About Us</Link>
                 <Link className = "links" to="/Contact">Contact Us</Link> 
                 </div>
          </Navbar>
          <Switch>
            <Route exact path = "/" component = { Home } />
            <Route path = "/Events" component = { Events } />
            <Route path = "/AddEvent" component = { Organization } />
          </Switch>
      </Router>
    );
  }
}
export default App;
