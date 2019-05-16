import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CustomInput
} from "reactstrap";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";

import "./css/Organization.css";

class NewOrg extends Component {

  handleTypeChange = event => {
    let selected = false;
    let inputType = event.target.value;
    let formCategory = this.props.form.type;
    if(formCategory.includes(inputType)) {
      formCategory = _.remove(formCategory, function(n) {
        return n !== inputType
      })
    } else {
      formCategory.push(inputType);
      selected = true;
    }
    this.props.form.type = formCategory;
    console.log(this.props.form.type);
    return selected;
  }

  handleTypeOutput = () => {
    return this.props.form.type;
  }
  render() {
    return (
      <div>
        <h2 className="pageTitle">Add Your Organization</h2>
        <div className="addOrg">
          <Form>
            <h5 className="formTitle">Organization Information</h5>

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
                  <h6 onChange={this.handleTypeOutput}>Category Selected: {this.props.form.type}</h6>
                  <Input
                    // selected={this.props.form.type.includes(value)}
                    // select={this.handleCategoryChange}
                    type="select"
                    name="type"
                    value={this.props.form.type}
                    onChange={this.handleTypeChange}
                    // multiple
                  >
                    <option>Housing (Permanent)</option>
                    <option>Shelter (Not Permanent)</option>
                    <option>Rapid Re-housing</option>
                    <option>Transitional Housing</option>
                    <option>Urban Encampments</option>
                    <option>Housing Search </option>
                    <option>Diversion</option>
                    <option>Safe Parking</option>
                    <option>Women's/Family Drop-In</option>
                    <option>YYA Drop-In</option>
                    <option>Men's Drop-In</option>
                    <option>General Population Drop-In</option>
                    <option>Legal Services / Eviction</option>
                    <option>Case Management</option>
                    <option>Employment Search</option>
                    <option>Clothing</option>
                    <option>Food</option>
                    <option>Shower/Laundry</option>
                    <option>Toiletries</option>
                    <option>Storage</option>
                    <option>Medical / Health</option>
                    <option>Social / Emotional</option>
                    <option>Dental Care</option>
                    <option>Addiction Recovery</option>
                    <option>Mental Health</option>
                    <option>Domestic Violence Support</option>
                    <option>Emergency/ Crisis Hotline</option>
                    <option>Mailing Address</option>
                    <option>Phone and Computer Access</option>
                    <option>Transportation Assistance</option>
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

            <h5 className="formTitle">Organization Contact</h5>
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

            <h5 className="formTitle">Additional Information</h5>
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
              <Label>Select Cover Photo</Label>
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
        <Button
          variant="primary"
          type="submit"
          value="1"
          onClick={this.props.onNext}
        >
          Continue
        </Button>
      </div>
    );
  }
}

NewOrg.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default NewOrg;
