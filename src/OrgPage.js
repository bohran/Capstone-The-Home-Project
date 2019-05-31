import React, { Component } from "react";
import _ from "lodash";
import { Button, InputGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

import "./css/Organization.css";

// renders and displays details about desired artist
class OrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = { orgData: [], input: "" };
  }

  componentDidMount() {
    let url = "https://api.emmaropes.me/organizations";
    let req = new Request(url);
    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.setState({
          orgData: results
        });
      });
  }

  handleSearch = search => {
    this.setState({
      input: search.target.value
    });
  };

  render() {
    let filteredOrgs = this.state.orgData.filter(d => {
      // let searchInput = d.organizationName.toLowerCase().includes(this.state.input.toLowerCase()) || this.state.input === "";
      if (
        d.organizationName
          .toLowerCase()
          .includes(this.state.input.toLowerCase()) ||
        this.state.input === ""
      ) {
        return true;
      }
      return false;
    });

    let displayOrgs = filteredOrgs.map((d, i) => {
      return (
<<<<<<< HEAD
        <div key={"org" + i} className="orgIntro">
          <p className="orgTitle">
          <a href = {d.url} target="_blank">{d.organizationName}</a>
          </p>
          <p className="orgDescr">{d.organizationDescription}</p>
          <p className="orgType">{d.organizationType}</p>
=======
        <div
          key={"org" + i}
          className="org"
          onClick={() => window.open(d.url, "_blank")}
        >
          <div className="orgTitle">{d.organizationName}</div>
          <div className="orgDescr">{d.organizationDescription}</div>
          <div className="orgContact">
            Phone: {d.phone} <br /> Email: {d.email}
          </div>
          <div className="orgType">{_.join(d.organizationType, ", ")}</div>
>>>>>>> c0b97714507b8335a072607fc43349341d033a43
        </div>
      );
    });

    return (
      <div>
        <div className="orgFuntions">
          <div className="orgSearch">
            <InputGroup>
              <Input
                placeholder="Search organizations"
                value={this.state.input}
                onChange={this.handleSearch}
              />
            </InputGroup>
            {/* <div className="orgButtons"> */}
<<<<<<< HEAD
              <Button tag = {Link} to ="/RegOrganization"> + Register Organization</Button>
              <Button
                className="toolkitButton"
                onClick={()=> window.open("https://drive.google.com/drive/folders/1S2roKWt-aGCMwJwjUvboZDna0C8TG-z0", "_blank")}
              >
                Toolkits
              </Button>
=======
            <Button tag={Link} to="/AddOrganization">
              + Add Organization
            </Button>
            <Button
              className="toolkitButton"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1S2roKWt-aGCMwJwjUvboZDna0C8TG-z0",
                  "_blank"
                )
              }
            >
              Toolkits
            </Button>
>>>>>>> c0b97714507b8335a072607fc43349341d033a43
            {/* </div> */}
          </div>
        </div>
        <h4>Click to learn more about local organizations across King County that have joined the fight in ending homelessness. </h4>
        <div className="orgCollection">{displayOrgs}</div>
      </div>
    );
  }
}

export default OrgPage;
