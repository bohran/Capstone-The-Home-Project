import React, { Component } from "react";
import _ from "lodash";
import { Button, InputGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

import "./css/Organization.css";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";

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
        <div key={"org" + i} className="orgIntro">
          <p className="orgTitle">{d.organizationName}</p>
          <p className="orgDescr">{d.organizationDescription}</p>
          <p className="orgType">{d.organizationType}</p>
        </div>
      );
    });

    return (
      <div>
        <div className="orgSearch">
          <InputGroup>
            <Input
              placeholder="Search organizations"
              value={this.state.input}
              onChange={this.handleSearch}
            />
          </InputGroup>
          <div className="orgButton">
            <Button>Add New Org</Button>
          </div>
        </div>
        <div className="orgCollection">{displayOrgs}</div>
      </div>
    );
  }
}

// renders a desired artist's name, picture, location, description and instagram link
// class OrgInfo extends Component {

//   render() {
//     let org = this.props.org;

//     return (
//       <div className="container" id="org-details">
//         <div className="row">
//           <h2>Get to Know This Organization</h2>
//         </div>
//         <div className="row">

//           <div className="col align-self-center">
//             <h3 className="">{org.org}</h3>
//             <p>{org.description}</p>
//           </div>
//         </div>
//         <div className="text-center">
//           {/* Button located under artist highlights that leads user to full artist page */}
//           <Link to="/home"><Button className="btn btn-light" role="button">Go to Home Page</Button></Link>
//           <Link to="/events"><Button className="btn btn-light" role="button">Go to Events Page</Button></Link>
//         </div>
//       </div>
//     )
//   }
// }

export default OrgPage;
