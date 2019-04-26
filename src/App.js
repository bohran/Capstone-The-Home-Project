import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Events } from "./Events";
import AddEvent from "./AddEvent";
import { Contact } from "./Contact";
// import{Calendar} from './Calendar';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import "./css/App.css";
import "typeface-nunito-sans";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Router>
        <Navbar
          className="nav-wrapper"
          dark
          expand="lg"
          style={{ outerHeight: "100px" }}
        >
          <div className="navtitle">
            <NavbarBrand className="title" href="/">
              The Home Project
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* <Nav> */}
              <div className="tabs">
              {/* <NavItem className="menuItems"> */}
                <Link className="links" to="/Events">
                  Events
                </Link>
                {/* </NavItem> */}
                {/* <NavItem className="menuItems"> */}
                <Link className="links" to="/About">
                  About Us
                </Link>
                {/* </NavItem> */}
                {/* <NavItem className="menuItems"> */}
                <Link className="links" to="/Contact">
                  Contact Us
                </Link>
                {/* </NavItem> */}
                {/* <Link className = "links" to="/Calendar">Calendar View</Link> */}
              </div> 
            {/* </Nav> */}
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Events" component={Events} />
          <Route path="/AddEvent" component={AddEvent} />
          <Route path="/Contact" component={Contact} />
          {/* <Route path = "/Calendar" component = { Calendar } /> */}
        </Switch>
      </Router>
    );
  }
}
export default App;
