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
            <h5>Organization Information:</h5>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Organization Name</Form.Label>
                <Form.Control
                  type="orgName"
                  placeholder="Enter Organization Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Organization Category</Form.Label>
                <Form.Control
                  type="orgCategory"
                  placeholder="Select Organization Category"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridMission">
              <Form.Label>Organization Mission Statement</Form.Label>
              <Form.Control
                type="orgMissStatement"
                placeholder="Enter Mission Statement"
              />
            </Form.Group>

            <h5>Event Contact:</h5>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="contactName"
                  placeholder="Enter Contact Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="contactRole"
                  placeholder="Enter Contact Role"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="contactPhone"
                  placeholder="Enter Contact Phone"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="contactPhone"
                  placeholder="Enter Contact Email"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridZip">
              <Form.Label>Event Link</Form.Label>
              <Form.Control
                type="orgSite"
                placeholder="Enter Organization Website"
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
