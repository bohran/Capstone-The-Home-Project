import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Events } from "./Events";
import AddEvent from "./AddEvent";
import OrgInfo from "./OrgPage";
import {Portal} from "./Portal";
import {PortalAll} from "./PortalAll";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import "./css/App.css";
import "typeface-nunito-sans";
import RegOrganization from "./RegOrganization";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <Router>
        <Navbar
          className="nav-wrapper"
          light
          expand="lg"
          style={{ outerHeight: "100px" }}
        >
          <div className="navtitle">
            <NavbarBrand className="title" href="/">
              HOME PROJECT CALENDAR
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="tabs">
              <Link className="links" to="/Events">
                Events
              </Link>
              <Link className="links" to="/Orgs">
                Organizations
              </Link>
              <Link className="links" to="/About">
                About Us
              </Link>
            </div>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Events" component={Events} />
          <Route path="/Orgs" component={OrgInfo} />
          <Route path="/AddEvent" component={AddEvent} />
          <Route path="/RegOrganization" component={RegOrganization} />
          <Route path="/Portal" component={Portal} />
          <Route path="/PortalAll" component={PortalAll}/>

          {/* <Route path = "/Calendar" component = { Calendar } /> */}
        </Switch>
        <div className="footer">
          <div className="footer-title">CONTACT US</div> <br />
          <div className="footer-content">
            {/* replace with logo */}
            <div className="footer-contact">
              <p>Pyramid Communications</p>
              <p>1932 First Avenue Suite 507 </p>
              <p>Seattle, WA 98101</p>
            </div>

            <div className="footer-contact">
              <p>Email: info@pyramidcom.com</p>
              <p>Phone: 206.374.7788</p>
              <p>Website: pyramidcommunications.com</p>
            </div>
          </div>
          <div className="footer-toolkit">
            <div className="learnMore">
              Learn More about the Homelessness Cause:
            </div>
            <div
              className="button-toolkit"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1S2roKWt-aGCMwJwjUvboZDna0C8TG-z0",
                  "_blank"
                )
              }
            >
              Toolkits
            </div>
          </div>
          <div />
        </div>
      </Router>
    );
  }
}
export default App;
