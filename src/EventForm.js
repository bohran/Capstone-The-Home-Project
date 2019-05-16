import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
// import "./css/form.css";

class NewEvent extends Component {
  // componentDidMount() {
  //   let url = "https://api.emmaropes.me/organizations";
  //   let req = new Request(url);
  //   fetch(req)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(results => {
  //       console.log(results);
  //       this.setState({
  //         orgList: results
  //       });
  //     });
  // }

  // let orgOptions =
  handleSameAs = () => {
    var contact = document.getElementById("coordInfo");
    if (contact.style.display === "block") {
      contact.style.display = "none";
      this.props.form.coordinatorFName = this.props.form.creatorFName;
      this.props.form.coordinatorLName = this.props.form.creatorLName;
      this.props.form.coordinatorEmail = this.props.form.creatorEmail;
      this.props.form.coordinatorPhone = this.props.form.creatorPhone;
    } else {
      contact.style.display = "block";
    }
  };
  render() {
    return (
      <div>
        <h2 className="pageTitle">ADD A NEW EVENT</h2>

        <div className="addEvent">
          <Form>
            <h5 className="formTitle">Select Your Organization</h5>
            <FormGroup>
              {/* <Label>Select Your Organization</Label> */}
              <Input
                type="select"
                name="org"
                value={this.props.form.orgs}
                onChange={this.props.onChange}
              >
                {" "}
                {this.props.orgList}
              </Input>
            </FormGroup>

            <h6 className="help">
              Don't see your Organization listed?{" "}
              <Link className="helpLink" to="/RegOrganization">
                Register it here.
              </Link>
            </h6>

            <h5 className="formTitle">Event Information</h5>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Event Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter text"
                    value={this.props.form.title}
                    onChange={this.props.onChange}
                    // isRequired={true}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Event Type</Label>
                  <Input
                    type="select"
                    name="category"
                    value={this.props.form.category}
                    onChange={this.props.onChange}
                  >
                    <option>Give</option>
                    <option>Learn</option>
                    <option>Volunteer</option>
                    <option>Activism</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <h6>Area of Service</h6>
            <div>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes("Housing/Shelter")}
                  type="checkbox"
                  name="services"
                  value={"Housing/Shelter"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check>Housing/Shelter</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                checked={this.props.form.services.includes("Employment")}
                  type="checkbox"
                  name="services"
                  value={"Employment"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check>Employment</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                checked={this.props.form.services.includes("Day Center")}
                  type="checkbox"
                  name="services"
                  value={"Day Center"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check>Day Center</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                checked={this.props.form.services.includes("Basic Needs")}
                  type="checkbox"
                  name="services"
                  value={"Basic Needs"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check>Basic Needs</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                checked={this.props.form.services.includes("Health & Wellness")}
                  type="checkbox"
                  name="services"
                  value={"Health & Wellness"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check>{"Health & Wellness"}</Label>
              </FormGroup>
            </div>

            <FormGroup>
              <Label>Description</Label>
              <Input
                type="text"
                name="descr"
                placeholder="Enter text"
                value={this.props.form.descr}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={this.props.form.date}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Start Time</Label>
                  <Input
                    type="time"
                    name="startTime"
                    value={this.props.form.startTime}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>End Time</Label>
                  <Input
                    type="time"
                    name="endTime"
                    value={this.props.form.endTime}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={8}>
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
                  <Label>Room</Label>
                  <Input
                    type="text"
                    name="room"
                    placeholder="e.g. 101"
                    value={this.props.form.room}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label>Event Capacity</Label>
                  <Input
                    type="text"
                    name="capacity"
                    placeholder="e.g. 40"
                    value={this.props.form.capacity}
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
              <Col md={2}>
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

            <h5 className="formTitle">Event Contact Information</h5>
            <h3 className="subtitle">
              This information is used to confirm any changes in the event
              details
            </h3>

            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="creatorFName"
                    placeholder="Enter text"
                    value={this.props.form.creatorFName}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="creatorLName"
                    placeholder="Enter text"
                    value={this.props.form.creatorLName}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="text"
                    name="creatorEmail"
                    placeholder="Enter email"
                    value={this.props.form.creatorEmail}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    name="creatorPhone"
                    placeholder="Enter phone"
                    value={this.props.form.creatorPhone}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Event Coordinator Information</h5>
            <h3 className="subtitle">
              This information will be used by interested volunteers and
              participants who want to get invovled
            </h3>
            <div className="formChecks">
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  name="coordinatorInfo"
                  onClick={this.handleSameAs}
                />{" "}
                <Label check>Same As Event Contact Information</Label>
              </FormGroup>
            </div>

            <div id="coordInfo" style={{ display: "block" }}>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      name="coordinatorFName"
                      placeholder="Enter text"
                      value={this.props.form.coordinatorFName}
                      onChange={this.props.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      name="coordinatorLName"
                      placeholder="Enter text"
                      value={this.props.form.coordinatorLName}
                      onChange={this.props.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="text"
                      name="coordinatorEmail"
                      placeholder="Enter email"
                      value={this.props.form.coordinatorEmail}
                      onChange={this.props.onChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label>Phone</Label>
                    <Input
                      type="text"
                      name="coordinatorPhone"
                      placeholder="Enter phone"
                      value={this.props.form.coordinatorPhone}
                      onChange={this.props.onChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>

            <h5 className="formTitle">Additional Event Information</h5>

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

            <h5>Cover Photo</h5>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Link</Label>
                  <Input
                    type="test"
                    name="img"
                    placeholder="Enter URL"
                    value={this.props.form.img}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Browse Default</Label>
                  <Input
                    type="test"
                    name="img"
                    placeholder="Enter URL"
                    value={this.props.form.img}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="formButton">
          <Button
            variant="primary"
            type="submit"
            value="1"
            onClick={this.props.onNext}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

NewEvent.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  orgList: PropTypes.array.isRequired
};

export default NewEvent;
