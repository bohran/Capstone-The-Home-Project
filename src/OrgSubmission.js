import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap";

import "./css/App.css";

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
            <h1>Your organization has been submitted for approval!</h1>
            <p>
              We've sent your organization information to Pyramid for approval.
              The organization should be approved in the next business day.
              Please contact us at eropes@uw.edu to make changes to your event
              posting or any other inquiries related to your event.
            </p>
          </div>
          <div className="buttonContainer">
            <Link to="/AddEvent">
              <Button variant="primary" type="submit">
                Add Event
              </Button>
            </Link>
            <Link to="/Events">
              <Button variant="primary" type="submit">
                Back to Calendar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
export default OrgSubmission;
