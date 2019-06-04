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
import moment from "moment";

import "bootstrap/dist/css/bootstrap.css";
import "react-image-picker/dist/index.css";

import "./css/form.css";

const requiredFields = [
  "organizations",
  "title",
  "category",
  "services",
  "date",
  "startTime",
  "address",
  "city",
  "creatorFName",
  "creatorLName",
  "creatorEmail"
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
  "./img/volunteer5.jpg"
];
const cities = [
  {
    value: "Algona",
    label: "Algona"
  },
  {
    value: "Auburn",
    label: "Auburn"
  },
  {
    value: "Bellevue",
    label: "Bellevue"
  },
  {
    value: "Bothell",
    label: "Bothell"
  },
  {
    value: "Burien",
    label: "Burien"
  },
  {
    value: "Carnation",
    label: "Carnation"
  },
  {
    value: "Covington",
    label: "Covington"
  },
  {
    value: "Des Moines",
    label: "Des Moines"
  },
  {
    value: "Duvall",
    label: "Duvall"
  },
  {
    value: "Enumclaw",
    label: "Enumclaw"
  },
  {
    value: "Federal Way",
    label: "Federal Way"
  },
  {
    value: "Issaquah",
    label: "Issaquah"
  },
  {
    value: "Kenmore",
    label: "Kenmore"
  },
  {
    value: "Kent",
    label: "Kent"
  },
  {
    value: "Kirkland",
    label: "Kirkland"
  },
  {
    value: "Lake Forest Park",
    label: "Lake Forest Park"
  },
  {
    value: "Maple Valley",
    label: "Maple Valley"
  },
  {
    value: "Medina",
    label: "Medina"
  },
  {
    value: "Mercer Island",
    label: "Mercer Island"
  },
  {
    value: "Newcastle",
    label: "Newcastle"
  },
  {
    value: "Normandy Park",
    label: "Normandy Park"
  },
  {
    value: "North Bend",
    label: "North Bend"
  },
  {
    value: "Pacific",
    label: "Pacific"
  },
  {
    value: "Redmond",
    label: "Redmond"
  },
  {
    value: "Renton",
    label: "Renton"
  },
  {
    value: "Sammamish",
    label: "Sammamish"
  },
  {
    value: "Seatac",
    label: "Seatac"
  },
  {
    value: "Seattle",
    label: "Seattle"
  },
  {
    value: "Shoreline",
    label: "Shoreline"
  },
  {
    value: "Snoqualmie",
    label: "Snoqualmie"
  },
  {
    value: "Tukwila",
    label: "Tukwila"
  },
  {
    value: "Woodinville",
    label: "Woodinville"
  }
];

const Service = {
  HOUSING: "Housing/Shelter",
  LEGAL: "Legal/Employment",
  DAYCENTER: "Day Centers",
  BASIC: "Basic Needs",
  HEALTH: "Health & Wellness"
};
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

  handleCityChange = input => {
    this.props.form.city = input;
  };

  handleSameAs = () => {
    var sameAsChecked = document.getElementById("sameAsCheck");
    var contact = document.getElementById("coordInfo");

    if (sameAsChecked.checked) {
      contact.style.display = "none";
      this.props.form.coordinatorFName = this.props.form.creatorFName;
      this.props.form.coordinatorLName = this.props.form.creatorLName;
      this.props.form.coordinatorEmail = this.props.form.creatorEmail;
      this.props.form.coordinatorPhone = this.props.form.creatorPhone;
    } else {
      contact.style.display = "block";
    }
  };

  handleTypeChange = input => {
    this.props.form.category = input.value;
  };

  checkDate = () => {
    let eventDate = this.props.form.date.split("-");

    let newEventDate = new Date(eventDate[0], eventDate[1] - 1, eventDate[2]);
    var currDate = new Date();

    let eventDateFormatted = moment(newEventDate, "YYYY/MM/DD").format(
      "YYYY-MM-DD"
    );
    let currDateFormatted = moment(currDate, "YYYY/MM/DD")
      .subtract(1, "days")
      .format("YYYY-MM-DD");

    return eventDateFormatted <= currDateFormatted;
  };

  handleOnChange = email => {
    // let email = this.props.form.creatorEmail;
    if (email === "") {
      return false;
    } else {
      return !email.includes("@");
    }
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
    this.props.form.img = image.src;
  };

  handleEventType = input => {
    this.props.form.category = input;
  };

  handleOrgNames = input => {
    this.props.form.organizations = input;
  };

  render() {
    const types = [
      { value: "Give", label: "Give" },
      { value: "Learn", label: "Learn" },
      { value: "Volunteer", label: "Volunteer" },
      { value: "Activism", label: "Activism" }
    ];
    return (
      <div>
        <h2 className="pageTitle">ADD A NEW EVENT</h2>

        <div className="addEvent">
          <Form>
            <h5 className="formTitle">Select Your Organization *</h5>
            <Select
              defaultValue={this.props.form.organizations}
              options={this.props.orgList}
              isMulti
              onChange={this.handleOrgNames}
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
              <Select
                defaultValue={this.props.form.category}
                options={types}
                onChange={this.handleEventType}
              />
            </div>
            <h6>Area of Service *</h6>
            <div className="formChecks">
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes(Service.HOUSING)}
                  type="checkbox"
                  name="services"
                  value={Service.HOUSING}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  {Service.HOUSING}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes(Service.LEGAL)}
                  type="checkbox"
                  name="services"
                  value={Service.LEGAL}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  {Service.LEGAL}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes(Service.DAYCENTER)}
                  type="checkbox"
                  name="services"
                  value={Service.DAYCENTER}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  {Service.DAYCENTER}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes(Service.BASIC)}
                  type="checkbox"
                  name="services"
                  value={Service.BASIC}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  {Service.BASIC}
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  checked={this.props.form.services.includes(Service.HEALTH)}
                  type="checkbox"
                  name="services"
                  value={Service.HEALTH}
                  onChange={this.props.onUpdate}
                />{" "}
                <Label check className="serviceOptions">
                  {Service.HEALTH}
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
                  <Label>Capacity</Label>
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
                  <Select
                  style={{ position: "fixed" }}
                  onChange={this.handleCityChange}
                  options={cities}
                  placeholder="Select..."
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
                    invalid={this.handleOnChange(this.props.form.creatorEmail)}
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
            <div id="fomrChecks">
              <FormGroup check inline>
                <Input
                  id="sameAsCheck"
                  type="checkbox"
                  name="coordinatorInfo"
                  onChange={this.handleSameAs}
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
                      invalid={this.handleOnChange(
                        this.props.form.coordinatorEmail
                      )}
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
              <h3 className="subtitle">
                You can also upload your local photos on Imgur and copy paste
                that link into this field.
              </h3>
              <Input
                onClick={this.toggle}
                type="test"
                name="img"
                placeholder="Enter URL"
                value={this.props.form.img}
                onChange={this.props.onChange}
              />
            </FormGroup>
            {/* <div className="orOption">OR</div> */}
            <div className="formImages">
              <Label>or Select from Default</Label>
              <ImagePicker
                images={defaultImgs.map((image, i) => ({
                  src: image,
                  value: i
                }))}
                onPick={this.selectImage}
              />
              {/* <Button
                className="imageButton"
                type="button"
                onClick={() => console.log(this.props.form.img)}
              >
                Select
              </Button> */}
            </div>
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
 