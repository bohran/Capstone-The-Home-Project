import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Events } from "./Events";
import AddEvent from "./AddEvent";
import { Contact } from "./Contact";
// import{Calendar} from './Calendar';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import "./css/App.css";
import "typeface-nunito-sans";
import { Footer } from "mdbreact";
import StickyFooter from 'react-sticky-footer';


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
              <div className="tabs">
                <Link className="links" to="/Events">
                  Events
                </Link>               
                <Link className="links" to="/Contact">
                  ToolKits
                </Link>
                <Link className="links" to="/About">
                  About Us
                </Link>              
              </div> 
          </Collapse>
        </Navbar>
        {/* <div className="footer">
        Contact Us: Pyramid Communications
        marketing@pyramidcommunications.com
        206.374.7788
       1932 First Avenue Suite 507, Seattle, WA 98101
        </div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path = "/About" component={About}/>
          <Route path="/Events" component={Events} />
          <Route path="/AddEvent" component={AddEvent} />
          <Route path="/Contact" component={Contact} />
          {/* <Route path = "/Calendar" component = { Calendar } /> */}
        </Switch>
        <div className="footer">
        Contact Us: Pyramid Communications <br/>
        marketing@pyramidcommunications.com <br/>
        206.374.7788 <br/>
       1932 First Avenue Suite 507, Seattle, WA 98101
        </div>

      </Router>
    );
  
  }
}
export default App;
