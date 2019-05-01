import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Form, FormGroup, Label} from "reactstrap";
import './css/App.css';

class Confirmation extends Component {
  render() {
    return (
      <section>
        <h2 className="orgPageTitle">Almost there.</h2>

        <div className="addOrg">
          <Form>
            <h5>Please confirm your information before submitting.</h5>
            <FormGroup>
              <Label>Organization Name: {this.props.orgForm.name}</Label>
            </FormGroup>

            <FormGroup>
              <h5>Organization Type: {this.props.orgForm.type}</h5>
            </FormGroup>

            <FormGroup>
              <Label>Mission: {this.props.orgForm.mission}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Organization Address: {this.props.orgForm.address}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Organization City: {this.props.orgForm.city}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Organization County: {this.props.orgForm.county}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Organization Zip Code: {this.props.orgForm.zip}</Label>
            </FormGroup>

            <h5>Organization Contact Information:</h5>

            <FormGroup>
              <Label>First Name: {this.props.orgForm.contactFName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Last Name: {this.props.orgForm.contactLName}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Role: {this.props.orgForm.contactRole}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Email: {this.props.orgForm.contactEmail}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Phone: {this.props.orgForm.phone}</Label>
            </FormGroup>
            </Form>
      </div>
      </section>
    );
  }
}

Confirmation.propTypes = {
  orgForm: PropTypes.object.isRequired
};

export default Confirmation;
