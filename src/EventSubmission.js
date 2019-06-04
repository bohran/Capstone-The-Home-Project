import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import "./css/confirm.css";

class EventSubmission extends Component {
  handleNext = () => {
    let newStage = this.state.currentStage + 1;
    this.setState({
      currentStage: newStage
    });
  };

  render() {
    return (
      <section>
        <div className="formContainer">
          <div>
            <h1>Your event has been submitted for approval!</h1>
            <p>
              We've sent your event to Pyramid for approval. The event should be
              approved in the next business day. Please contact us at
              eropes@uw.edu to make changes to your event posting or any other
              inquiries related to your event.
            </p>
          </div>
          <div className="buttonContainer">
          <Link to="/AddEvent">
              <Button variant="primary" type="submit">
                Add Another Event
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
export default EventSubmission;
