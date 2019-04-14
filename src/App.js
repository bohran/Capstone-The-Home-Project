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
          <Navbar className='nav-wrapper' dark expand="lg">
                <NavbarBrand style={{color:"black", fontSize:"50px", padding:"40px"}}href = "/">The Home Project</NavbarBrand>
                 <Link to="/Organization">Organization?</Link>
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
