import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CustomInput
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

class NewOrg extends Component {
  render() {
    return (
      <div>
        <h2 className="pageTitle">Add Your Organization</h2>

        {/* Adding a new Form */}
        <div className="addOrg">
          <Form>
            <h5>Organization Information</h5>

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
                    name="type"
                    value={this.props.form.type}
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
            <Row form>
              <Col md={10}>
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="e.g. 1234 Main St."
                    value={this.props.form.address}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>

              <Col md={2}>
                <FormGroup>
                  <Label>State</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="e.g. WA"
                    value={this.props.form.state}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    placeholder="e.g. Seattle"
                    value={this.props.form.city}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Zip Code</Label>
                  <Input
                    type="text"
                    name="zip"
                    placeholder="e.g. 98105"
                    value={this.props.form.zip}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>County</Label>
                  <Input
                    type="text"
                    name="county"
                    placeholder="e.g. King"
                    value={this.props.form.county}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <h5>Organization Contact</h5>
            <h3 className="subtitle">
              This information will be used to confirm any changes in the
              organization details
            </h3>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="contactFName"
                    placeholder="Enter text"
                    value={this.props.form.contactFName}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="contactLName"
                    placeholder="Enter text"
                    value={this.props.form.contactLName}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
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

            <h5>Additional Information</h5>
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

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Twitter</Label>
                  <Input
                    type="text"
                    name="twitter"
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
                    name="facebook"
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
                    name="instagram"
                    placeholder="Enter username"
                    value={this.props.form.instagram}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>Add Cover Photo</Label>
              <CustomInput
                id="mediaButton"
                type="file"
                name="img"
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

NewOrg.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NewOrg;
