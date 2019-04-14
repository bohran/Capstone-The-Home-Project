import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

export class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: "",
      eventDescr: "",
      eventType: "",
      date: "",
      startTime: "",
      endTime: "",
      eventAddress: "",
      eventCity: "",
      eventCount: "",
      eventZip: "",
      creatorFName: "",
      creatorLName: "",
      creatorEmail: "",
      contactFName: "",
      contactLName: "",
      contactEmail: ""
    };
  }
  render() {
    return (
      <div>
        <h2 className="orgPageTitle">ADD AN EVENT</h2>

        <div className="addEvent">
          <Form>
            <h5>Event Information:</h5>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  type="eventTitle"
                  placeholder="Enter Event Title"
                />
              </Form.Group>

              <Form.Group controlId="formGridCategory">
                <h5>Event Category</h5>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridDescr">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                type="eventDescr"
                placeholder="Enter Event Description"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="eventDate" placeholder="Enter Event Date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGriStartTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="startTime"
                  placeholder="Enter Event Start Time"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGriEndTime">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="endTime"
                  placeholder="Enter Event End Time"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="formGriStartTime">
              <Form.Label>Address</Form.Label>
              <Form.Control type="startTime" placeholder="e.g. 1234 Main St." />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Event City</Form.Label>
                <Form.Control type="eventCity" placeholder="e.g. Seattle" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGriCounty">
                <Form.Label>Event County</Form.Label>
                <Form.Control type="eventCounty" placeholder="e.g. King" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGriZip">
                <Form.Label>Event Zip Code</Form.Label>
                <Form.Control type="endTime" placeholder="e.g. 98105" />
              </Form.Group>
            </Form.Row>

            <h5>Event Contact Information:</h5>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="contactFName"
                  placeholder="Enter First Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="contactLName"
                  placeholder="Enter Last Name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="contactEmail"
                placeholder="Enter Contact Email"
              />
            </Form.Group>

            <h5>Event Coordinator Information:</h5>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCoordFName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="coordinateFName"
                  placeholder="Enter First Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCoordLName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="coordinateLName"
                  placeholder="Enter Last Name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="formGridCoordEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="coordinateEmail"
                placeholder="Enter Contact Email"
              />
            </Form.Group>

            <Form.Group controlId="formGridMedia">
              <Button variant="" type="addMedia">
                Add Media
              </Button>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          ;
        </div>
      </div>
    );
  }
}
