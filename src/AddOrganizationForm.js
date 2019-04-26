import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, Row, Col, CustomInput } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

class AddOrganizationForm extends Component {
  render() {
    console.log(this.props.form);

    return (
      <div>
        <h2 className="pageTitle">Add Your Organization</h2>

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

        {/* <h6 className="newOrgButton">
          Don't see your Organization listed? Click Here.
        </h6> */}

        {/* Adding a new Form */}
        <div className="addOrg">
          <Form>
            <h5>Organization Information:</h5>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter text"
                    value={this.props.form.name}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Category</Label>
                  <Input
                    type="select"
                    name="category"
                    value={this.props.form.category}
                    onChange={this.props.onChange}
                  >
                    <option>Choose...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>Mission Statement</Label>
              <Input
                type="text"
                name="mission"
                placeholder="Enter text"
                value={this.props.form.mission}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <h5>Organization Contact:</h5>
            <h3 className="subtitle">
              This information will be used to confirm any changes in the
              organizaiton details
            </h3>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="contactName"
                    placeholder="Enter text"
                    value={this.props.form.contactName}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Role</Label>
                  <Input
                    type="text"
                    name="contactRole"
                    placeholder="Enter text"
                    value={this.props.form.contactRole}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    name="contactPhone"
                    placeholder="e.g. (123)-456-7890"
                    value={this.props.form.contactPhone}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="contactEmail"
                    placeholder="Enter email"
                    value={this.props.form.contactEmail}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                placeholder="Enter URL"
                value={this.props.form.website}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <h5>Organization Social Media:</h5>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Twitter</Label>
                  <Input
                    type="text"
                    name="website"
                    placeholder="Enter handle"
                    value={this.props.form.twitter}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Facebook</Label>
                  <Input
                    type="text"
                    name="website"
                    placeholder="Enter URL"
                    value={this.props.form.facebook}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Instagram</Label>
                  <Input
                    type="text"
                    name="website"
                    placeholder="Enter username"
                    value={this.props.form.instagram}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>Add Media</Label>
              <CustomInput
                id="mediaButton"
                type="file"
                name="media"
                value={this.props.form.media}
                onChange={this.props.onChange}
              />
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

AddOrganizationForm.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddOrganizationForm;
