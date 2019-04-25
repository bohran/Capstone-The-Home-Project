import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

class NewEvent extends Component {
  render() {
    return (
      <div>
        <h2 className="pageTitle">Add a New Event</h2>

        <div className="addEvent">
          <Form>
            <h5>Event Information:</h5>

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
                  <Label>Event Category</Label>
                  <Input
                    type="select"
                    name="eventType"
                    value={this.props.form.eventType}
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
              <Label>Event Description</Label>
              <Input
                type="text"
                name="eventDescr"
                placeholder="Enter text"
                value={this.props.form.eventDescr}
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
                    name="eventAddress"
                    placeholder="e.g. 1234 Main St."
                    value={this.props.form.eventAddress}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Room</Label>
                  <Input
                    type="text"
                    name="eventAddress"
                    placeholder="e.g. 101"
                    value={this.props.form.eventRoom}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Event City</Label>
                  <Input
                    type="text"
                    name="eventCity"
                    placeholder="e.g. Seattle"
                    value={this.props.form.eventCity}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Event County</Label>
                  <Input
                    type="text"
                    name="eventCounty"
                    placeholder="e.g. King"
                    value={this.props.form.eventCounty}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Event Zip Code</Label>
                  <Input
                    type="text"
                    name="eventZip"
                    placeholder="e.g. 98105"
                    value={this.props.form.eventZip}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <h5>Event Contact Information:</h5>
            <h3 className="subtitle">
              This information is used to confirm any changes in the event details
            </h3>

            <Row form>
              <Col md={4}>
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
              <Col md={4}>
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
              <Col md={4}>
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
            </Row>

            <h5>Event Coordinator Information:</h5>
            <h3 className="subtitle">
              This information will be used by interested volunteers and
              participants who want to get invovled
            </h3>

            <Row form>
              <Col md={4}>
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
              <Col md={4}>
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
              <Col md={4}>
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
            </Row>

            <h5>Event Social Media:</h5>
            <Row form>
            <Col md={4}>
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
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Twitter</Label>
                  <Input
                    type="text"
                    name="website"
                    placeholder="Enter URL"
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
                    placeholder="Enter URL"
                    value={this.props.form.instagram}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Button variant="" type="file" name="file" id="addMedia">
                Add Media
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

NewEvent.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NewEvent;
