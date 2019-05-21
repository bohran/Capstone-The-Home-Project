import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Row, Col } from "reactstrap";

class Confirmation extends Component {
  render() {
    let services = this.props.eventForm.services.map((d, i) => {
      if (i + 1 !== this.props.eventForm.services.length) {
        return d + ", ";
      } else {
        return d;
      }
    });
    return (
      <section>
        <h2 className="pageTitle">CONFIRM YOUR EVENT DETAILS</h2>

        <div className="addEvent">
          <Form>
            <h6 className="help">
              Please confirm the following information before submitting. If you
              need to make edits, select the edit button below the form.
            </h6>
            <br />
            <h5 className="formTitle">Event Information</h5>
            <FormGroup>
              <Label>Organization: {this.props.eventForm.orgs}</Label>
            </FormGroup>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Event Title: {this.props.eventForm.title}</Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Event Type: {this.props.eventForm.category}</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Area(s) of Service: {services}</Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Event Description: {this.props.eventForm.descr}</Label>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Event Date: {this.props.eventForm.date}</Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Time: {this.props.eventForm.startTime} to{" "}
                    {this.props.eventForm.endTime}
                  </Label>
                </FormGroup>
              </Col>
              {/* <Col md={4}>
                <FormGroup>
                  <Label>End Time: {this.props.eventForm.endTime}</Label>
                </FormGroup>
              </Col> */}
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Address: {this.props.eventForm.address}</Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Room: {this.props.eventForm.room}</Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Event Capacity: {this.props.eventForm.capacity}</Label>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>City: {this.props.eventForm.city}</Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>County: {this.props.eventForm.county}</Label>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Zip Code: {this.props.eventForm.zip}</Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>State: {this.props.eventForm.state}</Label>
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Event Contact Information</h5>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label>First Name: {this.props.eventForm.creatorFName}</Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Last Name: {this.props.eventForm.creatorLName}</Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Email: {this.props.eventForm.creatorEmail}</Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Phone: {this.props.eventForm.creatorPhone}</Label>
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Event Coordinator Information</h5>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    First Name: {this.props.eventForm.coordinatorFName}
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Last Name: {this.props.eventForm.coordinatorLName}
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Email: {this.props.eventForm.coordinatorEmail}</Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>Phone: {this.props.eventForm.coordinatorPhone}</Label>
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Additional Event Information</h5>

            <FormGroup>
              <Label>Website: {this.props.eventForm.website}</Label>
            </FormGroup>

            <FormGroup>
              <Label>Media: {this.props.eventForm.img}</Label>
            </FormGroup>
          </Form>
        </div>
        <div className="formButton">
          <Button
            variant="primary"
            type="submit"
            value="0"
            onClick={this.props.onEdit}
          >
            Edit
          </Button>
          <Button
            variant="primary"
            type="submit"
            value="2"
            onClick={this.props.onConfirm}
          >
            Confirm
          </Button>
        </div>
      </section>
    );
  }
}

Confirmation.propTypes = {
  eventForm: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default Confirmation;
