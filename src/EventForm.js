import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import Select from "react-select";
import _ from "lodash";
import ImagePicker from "react-image-picker";

import "bootstrap/dist/css/bootstrap.css";
import 'react-image-picker/dist/index.css'

import "./css/form.css";
// import "./css/form.css";

const requiredFields = [
  "orgs",
  "title",
  "category",
  "services",
  "date",
  "startTime",
  "address",
  "city",
  "creatorFName",
  "creatorLName",
  "creatorEmail",
  "coordinatorFName",
  "coordinatorLName",
  "coordinatorEmail"
];

const prettyNames = {
  title: "Title",
  category: "Type",
  orgs: "Organizations",
  services: "Services",
  descr: "Description",
  date: "Date",
  startTime: "Start Time",
  endTime: "End Time",
  address: "Address",
  room: "Room",
  city: "City",
  capacity: "Capacity",
  county: "County",
  zip: "Zip Code",
  state: "State",
  creatorFName: "Creator First Name",
  creatorLName: "Creator Last Name",
  creatorEmail: "Creator Email",
  creatorPhone: "Creator Phone",
  coordinatorFName: "Coordinator First Name",
  coordinatorLName: "Coordinator Last Name",
  coordinatorEmail: "Coordinator Email",
  coordinatorPhone: "Coordinator Phone"
};

const defaultImgs = [
  "./img/activism1.jpg",
  "./img/activism2.jpg",
  "./img/activism3.jpg",
  "./img/activism4.jpg",
  "./img/activism5.jpg",
  "./img/give1.jpg",
  "./img/give2.jpg",
  "./img/give3.jpg",
  "./img/give4.jpg",
  "./img/learn1.jpg",
  "./img/learn2.jpg",
  "./img/learn3.jpg",
  "./img/learn4.jpg",
  "./img/learn5.jpg",
  "./img/volunteer1.jpg",
  "./img/volunteer2.jpg",
  "./img/volunteer3.jpg",
  "./img/volunteer4.jpg",
  "./img/volunteer5.jpg",
]

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      modal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

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

  handleHostOrgs = input => {
    let newOrgs = [];
    for (let i = 0; i < input.length; i = i + 1) {
      newOrgs.push(input[i].value);
    }
    this.props.form.orgs = newOrgs;
  };

  handleTypeChange = input => {
    this.props.form.category = input.value;
  };

  checkDate = () => {
    let eventDate = this.props.form.date.split("-");

    let newEventDate = new Date(eventDate[0], eventDate[1] - 1, eventDate[2]);
    var currDate = new Date();

    let formatCurrDate =
      currDate.getFullYear() + currDate.getMonth() + currDate.getDate();
    let formatEventDate =
      newEventDate.getFullYear() +
      newEventDate.getMonth() +
      newEventDate.getDate();

    return formatCurrDate > formatEventDate;
  };

  handleRequirements = () => {
    let errorFields = requiredFields.filter(field =>
      _.isEmpty(this.props.form[field])
    );

    // no errors
    if (_.isEmpty(errorFields)) {
      this.props.onNext();
    } else {
      // errors = error messages
      let prettyErrors = errorFields.map(field => {
        return prettyNames[field];
      });

      let errors =
        "The following fields cannot be empty: " + _.join(prettyErrors, ", ");
      alert(errors);

      this.setState({
        errorMessage: errors
      });
    }
  };

  selectImage = image => {
    console.log(image.src);
    this.props.form.img = image.src;
  };

  render() {
    const types = [
      { value: "Give", label: "Give" },
      { value: "Learn", label: "Learn" },
      { value: "Volunteer", label: "Volunteer" },
      { value: "Activism", label: "Activism" }
    ];

    console.log(this.props.form.img);
    // let filteredImgs = defaultImgs.filter((d) => {
    //   return d.includes(this.props.form.category.toLowerCase());
    // })

    return (
      <div>
        <h2 className="pageTitle">ADD A NEW EVENT</h2>

        <div className="addEvent">
          <Form>
            <h5 className="formTitle">Select Your Organization *</h5>
            <Select
              options={this.props.orgList}
              isMulti
              onChange={this.handleHostOrgs}
            />
            <h6 className="help">
              Don't see your Organization listed?{" "}
              <Link className="helpLink" to="/RegOrganization">
                Register it here.
              </Link>
            </h6>
            <h5 className="formTitle">Event Information</h5>
            <FormGroup>
              <Label>Event Title *</Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter text"
                value={this.props.form.title}
                onChange={this.props.onChange}
                // invalid={this.state.error[1].title}
              />
            </FormGroup>
            <div className="formTypes">
              <h6>Event Type *</h6>
              <Select options={types} onChange={this.handleTypeChange} />
            </div>
            <h6>Area of Service *</h6>
            <div className="formChecks">
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes("Housing/Shelter")}
                  type="checkbox"
                  name="services"
                  value={"Housing/Shelter"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  Housing/Shelter
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes("Employment")}
                  type="checkbox"
                  name="services"
                  value={"Employment"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  Employment
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes("Day Center")}
                  type="checkbox"
                  name="services"
                  value={"Day Center"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  Day Center
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes("Basic Needs")}
                  type="checkbox"
                  name="services"
                  value={"Basic Needs"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  Basic Needs
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes(
                    "Health & Wellness"
                  )}
                  type="checkbox"
                  name="services"
                  value={"Health & Wellness"}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  {"Health & Wellness"}
                </Label>
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
                  <Label>Event Date *</Label>
                  <Input
                    invalid={this.checkDate()}
                    type="date"
                    name="date"
                    value={this.props.form.date}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Start Time *</Label>
                  <Input
                    required={true}
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
                    invalid={
                      this.props.form.startTime > this.props.form.endTime &&
                      this.props.form.endTime !== ""
                    }
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
                  <Label>Address *</Label>
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
                  <Label>City *</Label>
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
                  <Label>First Name *</Label>
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
                  <Label>Last Name *</Label>
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
                  <Label>Email *</Label>
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
              participants who want to get involved
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
                    <Label>First Name *</Label>
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
                    <Label>Last Name *</Label>
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
                    <Label>Email *</Label>
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
            <h5>Cover Photo *</h5>
            <FormGroup>
              <Label>Upload Link</Label>
              <Input
                onClick={this.toggle}
                type="test"
                name="img"
                placeholder="Enter URL"
                value={this.props.form.img}
                onChange={this.props.onChange}
              />
            </FormGroup>
            <br /> OR
            <div>
              <ImagePicker
                images={defaultImgs.map((image, i) => ({ src: image, value: i }))}
                onPick={this.selectImage}
              />
              <button
                type="button"
                onClick={() => console.log(this.props.form.img)}
              >
                OK
              </button>
            </div>
            {/* <FormGroup>
              <Button onClick={this.toggle}>Browse Default</Button>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </ModalBody>
                <Button color="primary" onClick={this.toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Modal>
            </FormGroup> */}
          </Form>
        </div>
        <div className="formButton">
          <Button
            variant="primary"
            type="submit"
            onClick={this.handleRequirements}
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
