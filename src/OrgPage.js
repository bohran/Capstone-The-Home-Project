import React, { Component } from 'react';
import _ from 'lodash';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom';


// renders and displays details about desired artist
class OrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = { org: undefined };
  }

  componentDidMount() {
    let orgName = this.props.organization
    this.setState({ artist: orgObj });
  }

  render() {
    let org = this.state.organization
    if (!org) return <h2>Organization not found!</h2> //if unspecified

    return (
      <div>
        <OrgInfo org={org} />
      </div>
    );
  }
}

// renders a desired artist's name, picture, location, description and instagram link 
class OrgInfo extends Component {

  render() {
    let org = this.props.org;

    return (
      <div className="container" id="org-details">
        <div className="row">
          <h2>Get to Know This Organization</h2>
        </div>
        <div className="row">

          <div className="col align-self-center">
            <h3 className="">{org.org}</h3>
            <p>{org.description}</p>
          </div>
        </div>
        <div className="text-center">
          {/* Button located under artist highlights that leads user to full artist page */}
          <Link to="/home"><Button className="btn btn-light" role="button">Go to Home Page</Button></Link>
          <Link to="/events"><Button className="btn btn-light" role="button">Go to Events Page</Button></Link>
        </div>
      </div>
    )
  }
}

export default OrgPage; 