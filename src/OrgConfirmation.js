import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label } from "reactstrap";

import "./css/App.css";

class Confirmation extends Component {
  render() {
    return (
      <section>
        <h2 className="orgPageTitle">Almost there.</h2>

        <div className="addOrg">
          <Form>
            <h6>Please confirm your information before submitting.</h6>
            <h5>Organization Information</h5>
            <FormGroup>
              <Label>Organization Name: {this.props.orgForm.name}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Organization Type: {this.props.orgForm.type}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Mission: {this.props.orgForm.mission}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Organization Address: {this.props.orgForm.address}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Organization State: {this.props.orgForm.state}</Label>
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

            <h5>Organization Contact</h5>

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
              <Label>Phone: {this.props.orgForm.contactPhone}</Label>
            </FormGroup>

            <h5>Additional Information</h5>
            <FormGroup>
              <Label>Website: {this.props.orgForm.website}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Twitter: {this.props.orgForm.twitter}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Facebook: {this.props.orgForm.facebook}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Instagram: {this.props.orgForm.instgram}</Label>
            </FormGroup>
          </Form>
        </div>
        <Button variant="primary" type="submit" onClick={this.props.onConfirm}>
          Confirm
        </Button>
      </section>
    );
  }
}

Confirmation.propTypes = {
  orgForm: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default Confirmation;
