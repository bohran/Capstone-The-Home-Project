import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap";

import "./css/confirm.css";

class OrgSubmission extends Component {
  // handleNext = () => {
  //   let newStage = this.state.currentStage + 1;
  //   this.setState({
  //     currentStage: newStage
  //   });
  // };

  render() {
    return (
      <section>
        <div className="formContainer">
          <div>
            <h1 className="pageTitle">Your organization has been submitted for approval!</h1>
            <p className="help">
              We've sent your organization information to Pyramid for approval.
              The organization should be approved in the next business day.
              Please contact us at info@pyramidcom.com to make changes to your event
              posting or any other inquiries related to your event.
            </p>
          </div>
          <div className="formButton">
          <Button tag={Link} to="/AddEvent" variant="primary" type="submit">
              Add An Event
            </Button>
            <Button tag={Link} to="/Events" variant="primary" type="submit">
              Back to Calendar
            </Button>
          </div>
        </div>
      </section>
    );
  }
}
export default OrgSubmission;
