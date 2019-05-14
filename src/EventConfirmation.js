import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label } from "reactstrap";

import "./css/App.css";

class Confirmation extends Component {
  render() {
    console.log(this.props.eventForm);
    return (
      <section>
        <h2 className="orgPageTitle">Almost there.</h2>

        <div className="addEvent">
          <Form>
            <h6>Please confirm your information before submitting.</h6>
            <h5>Event Information</h5>
            <FormGroup>
              <Label>Event Title: {this.props.eventForm.title}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event Type: {this.props.eventForm.category}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Area of Services: {this.props.eventForm.services}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event Description: {this.props.eventForm.descr}</Label>
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
              <Label>Address: {this.props.eventForm.address}</Label>
            </FormGroup>
            <FormGroup>
              <Label>Room: </Label>
            </FormGroup>
            <FormGroup>
              <Label>Event Capacity: {this.props.eventForm.capacity}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event City: {this.props.eventForm.city}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event County: {this.props.eventForm.county}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event Zip Code: {this.props.eventForm.zip}</Label>
            </FormGroup>

            <h5>Event Contact Information</h5>

            <FormGroup>
              <Label>First Name: {this.props.eventForm.creatorFName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Last Name: {this.props.eventForm.creatorLName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Email: {this.props.eventForm.creatorEmail}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Phone: {this.props.eventForm.creatorPhone}</Label>
            </FormGroup>

            <h5>Event Coordinator Information</h5>

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
              <Label>Phone: {this.props.eventForm.coordinatorPhone}</Label>
            </FormGroup>

            <h5>Additional Event Information</h5>

            <FormGroup>
              <Label>Website: {this.props.eventForm.website}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Media: {this.props.eventForm.img}</Label>
            </FormGroup>
          </Form>
        </div>
        <div>
          <Button
            variant="primary"
            type="submit"
            value="0"
            onClick={this.props.onNext}
          >
            Edit
          </Button>
          <Button
            variant="primary"
            type="submit"
            value="2"
            onClick={this.props.onConfirm}
          >
            Confirm
          </Button>
        </div>
      </section>
    );
  }
}

Confirmation.propTypes = {
  eventForm: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default Confirmation;
