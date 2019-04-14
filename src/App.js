import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Organization } from './Organization';
import{ Home } from './Home';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar className='nav-wrapper' dark expand="lg"style={{outerHeight:"100px"}}>
                <NavbarBrand className = "title" style={{color:"black", fontSize:"50px", paddingRight:"250px", paddingLeft:"25px"}}href = "/">The Home Project</NavbarBrand>
                 <Link to="/Events" style={{fontSize:"25px", paddingLeft:"200px"}}>Events</Link>
                 <Link to="/About" style={{fontSize:"25px",paddingLeft:"40px"}}>About Us</Link>
                 <Link to="/Contact" style={{fontSize:"25px",paddingLeft:"40px"}}>Contact Us</Link>
             
          </Navbar>
          <Switch>
            <Route exact path = "/" component = { Home } />
            <Route path="/Organization" component = { Organization } />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
