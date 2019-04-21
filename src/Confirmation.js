import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Organization } from './AddOrganizationForm';
import './css/App.css';

class Confirmation extends Component {
  render() {
    console.log(this.props.orgForm);
    console.log(this.props.eventForm);
    return (
      <section>
        <h2 className="orgPageTitle">Almost there.</h2>

        <div className="addEvent">
          <Form>
            <h5>Please confirm your information before submitting.</h5>
            <FormGroup>
              <Label>Event Title: {this.props.form.title}</Label>
            </FormGroup>

            <FormGroup>
              <h5>Event Category: {this.props.form.eventType}</h5>
            </FormGroup>

            <FormGroup>
              <Label>Event Description: {this.props.form.eventDescr}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event Date: {this.props.form.date}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Start Time: {this.props.form.startTime}</Label>
            </FormGroup>

            <FormGroup>
              <Label>End Time: {this.props.form.endTime}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Address: {this.props.form.eventAddress}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event City: {this.props.form.eventCity}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event County: {this.props.form.eventCounty}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Event Zip Code: {this.props.form.eventZip}</Label>
            </FormGroup>

            <h5>Event Contact Information:</h5>

            <FormGroup>
              <Label>First Name: {this.props.form.creatorFName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Last Name: {this.props.form.creatorLName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Email: {this.props.form.creatorEmail}</Label>
            </FormGroup>

            <h5>Event Coordinator Information:</h5>

            <FormGroup>
              <Label>First Name: {this.props.form.coordinatorFName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Last Name: {this.props.form.coordinatorLName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Email: {this.props.form.coordinatorEmail}</Label>
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
  form: PropTypes.object.isRequired
};

export default Confirmation;

