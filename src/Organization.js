import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

export class Organization extends Component {
  render() {
    return (
      <div>
        <Form>
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

          <h2> Organization Contact:</h2>

          <Form.Row>
            <Form.Group controlId="formGridCName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="contactName"
                placeholder="Enter Contact Name"
              />
            </Form.Group>

            <Form.Group controlId="formGridCRole">
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

          {/* <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Nothing For Now</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group> */}

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Organization Website</Form.Label>
            <Form.Control
              type="orgSite"
              placeholder="Enter Organization Website"
            />
          </Form.Group>

          <Button variant="" type="addMedia">
            Add Media
          </Button>

          {/* <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        ;
      </div>
    );
  }
}
