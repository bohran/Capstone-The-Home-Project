import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Events } from "./Events";
import AddEvent from "./AddEvent";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink
} from "reactstrap";

import "./css/App.css";
import "typeface-nunito-sans";
import RegOrganization from "./RegOrganization";

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
              <span className="tabs">  
                <Link className="links" to="/Events">
                  Events
                </Link>
                <NavLink className="links" href="https://drive.google.com/drive/folders/1S2roKWt-aGCMwJwjUvboZDna0C8TG-z0" target="_blank">
                 Toolkits</NavLink>
                <Link className="links" to="/About">
                  About Us
                </Link> 
              </span> 
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path = "/About" component={About}/>
          <Route path="/Events" component={Events} />
          <Route path="/AddEvent" component={AddEvent} />
          <Route path="/RegOrganization" component={RegOrganization} />
          {/* <Route path = "/Calendar" component = { Calendar } /> */}
        </Switch>
        <div className="footer">
          <div className="footer-title">Contact Us</div> <br />
          <div className="footer-content">
          <span>Pyramid Communications</span>
          <span>marketing@pyramidcommunications.com</span>
          <span>206.374.7788</span>
          <span>1932 First Avenue Suite 507, Seattle, WA 98101</span>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
