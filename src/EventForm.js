import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

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
  render() {
    return (
      <div>
        <h2 className="pageTitle">Add a New Event</h2>

        <div className="addEvent">
          <Form>
            <h5>Event Information</h5>

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
            <FormGroup check inline>
              <Input
                type="checkbox"
                name="housing"
                value={this.props.form.housing}
                onChange={this.props.onUpdate}
              />{" "}
              <Label check>Housing/Shelter</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="checkbox"
                name="emp"
                value={this.props.form.emp}
                onChange={this.props.onUpdate}
              />{" "}
              <Label check>Employment</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="checkbox"
                name="dayCenter"
                value={this.props.form.dayCenter}
                onChange={this.props.onUpdate}
              />{" "}
              <Label check>Day Center</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="checkbox"
                name="basic"
                value={this.props.form.basic}
                onChange={this.props.onUpdate}
              />{" "}
              <Label check>Basic Needs</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input
                type="checkbox"
                name="wellness"
                value={this.props.form.wellness}
                onChange={this.props.onUpdate}
              />{" "}
              <Label check>{"Health & Wellness"}</Label>
            </FormGroup>
            {/* <option>Housing/Shelter</option>
                    <option>Legal/Employment</option>
                    <option>Day Centers</option>
                    <option>Basic Needs</option>
                    <option>{"Health & Wellness"}</option> */}
            {/* <FormGroup>
              <Label>Select Your Organization</Label>
              <Input
                type="select"
                name="orgs"
                value={this.props.form.orgs}
                onChange={this.props.onChange}
              >
                <option>Give</option>
                <option>Learn</option>
                <option>Volunteer</option>
                <option>Activism</option>
              </Input>
            </FormGroup> */}
            <Row form>
              <Col md={8}>
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
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Host Organization</Label>
                  <Input
                    type="select"
                    name="org"
                    value={this.props.form.orgs}
                    onChange={this.props.onChange}
                  >
                    <option />
                  </Input>
                </FormGroup>
              </Col>
            </Row>

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

            <h5>Event Contact Information</h5>
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

            <h5>Event Coordinator Information</h5>
            <h3 className="subtitle">
              This information will be used by interested volunteers and
              participants who want to get invovled
            </h3>

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

            <h5>Additional Event Information</h5>

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
        <Button variant="primary" type="submit" onClick={this.props.onNext}>
          Continue
        </Button>
      </div>
    );
  }
}

NewEvent.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default NewEvent;
