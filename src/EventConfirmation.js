import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Row, Col } from "reactstrap";
import moment from "moment";
import _ from "lodash";

class Confirmation extends Component {
  convertOrgInput = () => {
    let orgs = [];
    let input = this.props.eventForm.organizations;
    for (let i = 0; i < input.length; i = i + 1) {
      orgs.push(input[i].value);
    }
    this.props.eventForm.orgs = orgs;
    this.props.eventForm.category = this.props.eventForm.category.value;
    this.props.eventForm.city = this.props.eventForm.city.value;
    this.props.onConfirm();
  };

  converDate = () => {
    let startTime = moment(this.props.eventForm.startTime, "HH:mm:ss").format(
      "h:mm A"
    );
    let endTime = "";
    if (this.props.eventForm.endTime !== "") {
      endTime =
        " - " +
        moment(this.props.eventForm.endTime, "HH:mm:ss").format("h:mm A");
    }
    return startTime + endTime;
  };

  render() {
    console.log(this.props.eventForm.endTime);
    return (
      <section>
        <h2 className="pageTitle">CONFIRM YOUR EVENT DETAILS</h2>
        <h6 className="help">
          Please confirm the following information before submitting. If you
          need to make edits, select the edit button below the form.
        </h6>

        <div className="addEvent">
          <Form>
            <h5 className="formTitle">Event Information</h5>
            <FormGroup>
              <Label>
                Organization:{" "}
                <p className="formText">
                  {" "}
                  {_.join(
                    this.props.eventForm.organizations.map(d => {
                      return d.value;
                    }),
                    ", "
                  )}
                </p>
              </Label>
            </FormGroup>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Event Title:
                    <p className="formText"> {this.props.eventForm.title}</p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Event Type:{" "}
                    <p className="formText">
                      {this.props.eventForm.category.value}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Area(s) of Service:{" "}
                    <p className="formText">
                      {_.join(this.props.eventForm.services, ", ")}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Event Description:{" "}
                    <p className="formText">{this.props.eventForm.descr}</p>
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Event Date:{" "}
                    <p className="formText">{this.props.eventForm.date}</p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Time: <p className="formText">{this.converDate()}</p>
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
                  <Label>
                    Address:{" "}
                    <p className="formText">{this.props.eventForm.address}</p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Room:{" "}
                    <p className="formText">{this.props.eventForm.room}</p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Event Capacity:{" "}
                    <p className="formText">{this.props.eventForm.capacity}</p>
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    City:{" "}
                    <p className="formText">
                      {this.props.eventForm.city}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    County:{" "}
                    <p className="formText">{this.props.eventForm.county}</p>
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    Zip Code:{" "}
                    <p className="formText">{this.props.eventForm.zip}</p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    State:{" "}
                    <p className="formText">{this.props.eventForm.state}</p>
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Event Contact Information</h5>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    First Name:{" "}
                    <p className="formText">
                      {this.props.eventForm.creatorFName}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Last Name:{" "}
                    <p className="formText">
                      {this.props.eventForm.creatorLName}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Email:{" "}
                    <p className="formText">
                      {this.props.eventForm.creatorEmail}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Phone:{" "}
                    <p className="formText">
                      {this.props.eventForm.creatorPhone}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Event Coordinator Information</h5>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    First Name:{" "}
                    <p className="formText">
                      {this.props.eventForm.coordinatorFName}{" "}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Last Name:{" "}
                    <p className="formText">
                      {this.props.eventForm.coordinatorLName}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Email:{" "}
                    <p className="formText">
                      {this.props.eventForm.coordinatorEmail}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label>
                    Phone:{" "}
                    <p className="formText">
                      {this.props.eventForm.coordinatorPhone}
                    </p>
                  </Label>
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Additional Event Information</h5>

            <FormGroup>
              <Label>
                Website:{" "}
                <p className="formText">{this.props.eventForm.website}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Media: <br />
                <img
                  src={this.props.eventForm.img}
                  alt="Default"
                  style={{ width: "200px" }}
                />{" "}
              </Label>
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
            onClick={this.convertOrgInput}
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
