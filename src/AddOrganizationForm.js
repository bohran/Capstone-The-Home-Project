import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

export class Organization extends Component {
  render() {
    console.log(this.props.form);
    
    return (
      <div>
        <h2 className="orgPageTitle">SELECT AN ORGANIZATION</h2>

        <div className="selectOrg">
          <Form>
            <Form.Group controlId="formGridName">
              <h5>Organization Name</h5>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <subtitle className="newOrgButton">
          Don't see your Organization listed? Click Here.
        </subtitle>
        <div className="addOrg">
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
              <Form.Group controlId="formGridCategory">
                <h5>Organization Category</h5>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridMission">
              <Form.Label>Organization Mission Statement</Form.Label>
              <Form.Control
                type="orgMissStatement"
                placeholder="Enter Mission Statement"
              />
            </Form.Group>

            <h5>Organization Contact:</h5>

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
              <Form.Label>Organization Website</Form.Label>
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

            <Button variant="primary" type="submit" onClick="./AddEventForm">
              Next
            </Button>
          </Form>
          ;
        </div>
      </div>
    );
  }
}
