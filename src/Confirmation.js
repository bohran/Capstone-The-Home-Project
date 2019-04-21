import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Form, FormGroup, Label} from "reactstrap";
import './css/App.css';

class Confirmation extends Component {
  render() {
    console.log(this.props.eventForm)
    return (
      <section>
        <h2 className="orgPageTitle">Almost there.</h2>

        <div className="addEvent">
          <Form>
            <h5>Please confirm your information before submitting.</h5>
            <FormGroup>
              <Label>Event Title: {this.props.eventForm.title}</Label>
            </FormGroup>

            <FormGroup>
              <h5>Event Category: {this.props.eventForm.eventType}</h5>
            </FormGroup>

            <FormGroup>
              <Label>Event Description: {this.props.eventForm.eventDescr}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event Date: {this.props.eventForm.date}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Start Time: {this.props.eventForm.startTime}</Label>
            </FormGroup>

            <FormGroup>
              <Label>End Time: {this.props.eventForm.endTime}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Address: {this.props.eventForm.eventAddress}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event City: {this.props.eventForm.eventCity}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event County: {this.props.eventForm.eventCounty}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event Zip Code: {this.props.eventForm.eventZip}</Label>
            </FormGroup>

            <h5>Event Contact Information:</h5>

            <FormGroup>
              <Label>First Name: {this.props.eventForm.creatorFName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Last Name: {this.props.eventForm.creatorLName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Email: {this.props.eventForm.creatorEmail}</Label>
            </FormGroup>

            <h5>Event Coordinator Information:</h5>

            <FormGroup>
              <Label>First Name: {this.props.eventForm.coordinatorFName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Last Name: {this.props.eventForm.coordinatorLName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Email: {this.props.eventForm.coordinatorEmail}</Label>
            </FormGroup>

            <FormGroup>
            <Label>Media: </Label>
            </FormGroup>
          </Form>
      </div>
      </section>
    );
  }
}

Confirmation.propTypes = {
  orgForm: PropTypes.object.isRequired,
  eventForm: PropTypes.object.isRequired,
};

export default Confirmation;

