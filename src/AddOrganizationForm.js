import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

class AddOrganizationForm extends Component {
  render() {
    return (
      <div>
        <h2 className="orgPageTitle">SELECT AN ORGANIZATION</h2>

        {/* <div className="selectOrg">
          <Form>
            <FormGroup controlId="formGridName">
              <h5>Organization Name</h5>
              <Input
                type="select"
                mame="name"
                onChange={this.handleChange}
                value={this.props.form.name}
              >
                <option>Choose...</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Input>
            </FormGroup>
          </Form>
        </div> */}

        <h6 className="newOrgButton">
          Don't see your Organization listed? Click Here.
        </h6>

        {/* Adding a new Form */}
        <div className="addOrg">
          <Form>
            <h5>Organization Information:</h5>
              <FormGroup>
                <Label>Organization Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Organization Name"
                  value={this.props.form.name}
                  onChange={this.props.onChange}
                />
              </FormGroup>
              <FormGroup >
                <Label for="exampleSelect">Organization Category</Label>
                <Input type="select" name="category"
                value={this.props.form.category}
                onChange={this.props.onChange}>
                  <option>Choose...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Input>
              </FormGroup>
            <FormGroup>
              <Label>Organization Mission Statement</Label>
              <Input
                type="text"
                name="mission"
                placeholder="Enter Mission Statement"
                value={this.props.form.mission}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <h5>Organization Contact:</h5>

              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="contactName"
                  placeholder="Enter Contact Name"
                  value={this.props.form.contactName}
                onChange={this.props.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Role</Label>
                <Input
                  type="text"
                  name="contactRole"
                  placeholder="Enter Contact Role"
                  value={this.props.form.contactRole}
                  onChange={this.props.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Phone</Label>
                <Input
                  type="text"
                  name="contactPhone"
                  placeholder="Enter Contact Phone"
                  value={this.props.form.contactPhone}
                  onChange={this.props.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="contactEmail"
                  placeholder="Enter Contact Email"
                  value={this.props.form.contactEmail}
                  onChange={this.props.onChange}
                />
              </FormGroup>

            <FormGroup>
              <Label>Organization Website</Label>
              <Input
                type="text"
                name="website"
                placeholder="Enter Organization Website"
                value={this.props.form.website}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Button variant="" type="addMedia">
                Add Media
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

AddOrganizationForm.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddOrganizationForm;
