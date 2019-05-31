import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  InputGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faQuestionCircle,
  faQuestion,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import moment from "moment";
import _ from "lodash";
import Select from "react-select";
import ReactTooltip from "react-tooltip";

import "./css/Events.css";

// TODO: Put in seperate constant file
const Service = {
  HOUSING: "Housing/Shelter",
  LEGAL: "Legal/Employment",
  DAYCENTER: "Day Centers",
  BASIC: "Basic Needs",
  HEALTH: "Health & Wellness"
};

const times = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Today",
    label: "Today"
  },
  {
    value: "Tomorrow",
    label: "Tomorrow"
  },
  {
    value: "This Week",
    label: "This Week"
  },
  {
    value: "Next Week",
    label: "Next Week"
  },
  {
    value: "This Month",
    label: "This Month"
  }
];

const cities = [
  {
    value: "All",
    label: "All"
  },
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

export class Events extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false,
      data: [],
      value: 0,
      previous: 0,
      title: "",
      description: "",
      category: "All",
      filter: [],
      input: "",
      filteredData: [],
      selectedCity: [],
      selectedDate: "",
      opacity: 1
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  handleCardClick = index => {
    const eventName = this.state.data[index].eventName;
    const eventDescription = this.state.data[index].eventDescription;
    const organizationName = this.state.data[index].organizations[0];
    const address = this.state.data[index].address;
    const city = this.state.data[index].city;
    const state = this.state.data[index].state;
    const zipcode = this.state.data[index].zipcode;
    const date = this.state.data[index].date;
    const startTime = this.state.data[index].startTime;
    const endTime = this.state.data[index].endTime;
    const url = this.state.data[index].url;
    const capacity = this.state.data[index].capacity;
    const imageURL = this.state.data[index].imageURL;
    const room = this.state.data[index].room;
    const contactFirstName = this.state.data[index].contactFirstName;
    const contactLastName = this.state.data[index].contactLastName;
    const contactEmail = this.state.data[index].contactEmail;
    const contactPhone = this.state.data[index].contactPhone;
    const coordinatorFirstName = this.state.data[index].coordinatorFirstName;
    const coordinatorLastName = this.state.data[index].coordinatorLastName;
    const coordinatorEmail = this.state.data[index].coordinatorEmail;
    const coordinatorPhone = this.state.data[index].coordinatorPhone;

    this.setState({
      eventName: eventName,
      eventDescription: eventDescription,
      organizationName: organizationName,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      date: date,
      startTime: startTime,
      endTime: endTime,
      url: url,
      capacity: capacity,
      room: room,
      imageURL: imageURL,
      contactFirstName: contactFirstName,
      contactLastName: contactLastName,
      contactEmail: contactEmail,
      contactPhone: contactPhone,
      coordinatorFirstName: coordinatorFirstName,
      coordinatorLastName: coordinatorLastName,
      coordinatorEmail: coordinatorEmail,
      coordinatorPhone: coordinatorPhone,
      modal: true
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    let url = "https://api.emmaropes.me/events";
    let req = new Request(url);
    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.setState({
          data: results
        });
      });
    window.scrollTo(0, 0);
  }

  handleCategory = event => {
    // Update every field
    let newCategory = event.target.value;
    // Set state og orgFormEntires with new copy
    this.setState({
      category: newCategory
    });
  };

  handleSelect = event => {
    if (this.state.filter.includes(event.target.value)) {
      this.removeService(event.target.value);
    } else {
      this.addService(event.target.value);
    }
  };

  addService = service => {
    let newServices = _.cloneDeep(this.state.filter);
    newServices.push(service);
    this.setState({
      filter: newServices
    });
  };

  // handle the All option of Area of Service
  handleAll = () => {
    this.setState({
      filter: _.values(Service)
    });
  };

  removeService = service => {
    let newServices = _.filter(this.state.filter, s => service !== s);
    this.setState({
      filter: newServices
    });
  };

  // Search method
  handleSearch = search => {
    this.setState({
      input: search.target.value
    });
  };

  handleCityChange = city => {
    let cityList = city.map(d => {
      return d.value;
    });
    this.setState({ selectedCity: cityList });
  };

  handleDateChange = date => {
    let maxDate = new Date();
    if (date.value === "Today") {
      maxDate = maxDate.getFullYear() + maxDate.getMonth() + maxDate.getDate();
    } else if (date.value === "Tomorrow") {
      maxDate =
        maxDate.getFullYear() + maxDate.getMonth() + maxDate.getDate() + 1;
    } else if (date.value === "This Week") {
      maxDate =
        maxDate.getFullYear() + maxDate.getMonth() + maxDate.getDate() + 7;
    } else if (date.value === "Next Week") {
      maxDate =
        maxDate.getFullYear() + maxDate.getMonth() + maxDate.getDate() + 14;
    } else if (date.value === "This Month") {
      maxDate = maxDate.getFullYear() + maxDate.getMonth() + 31;
    }
    console.log(maxDate);
    this.setState({ selectedDate: maxDate });
  };

  render() {
    console.log(`Option selected:`, this.state.selectedCity);
    console.log(`Option selected:`, this.state.selectedDate);
    const classes = "tooltip-inner";
    const filteredData = this.state.data.filter(d => {
      const matchesCategory =
        d.categoryName === this.state.category || this.state.category === "All";

      //TODO: improve efficiency?
      const serviceOverlap = _.intersection(d.services, this.state.filter);
      const matchesService =
        serviceOverlap.length !== 0 || this.state.filter.length === 0;
      const searchInput =
        d.eventName.toLowerCase().includes(this.state.input.toLowerCase()) ||
        this.state.input === "";
      const cityMatch =
        this.state.selectedCity.includes(d.city) ||
        this.state.selectedCity === [];
      const dateMatch =
        this.state.selectedDate >= d.date || this.state.selectedDate === "";
      if (matchesCategory && matchesService && searchInput && cityMatch && dateMatch) {
        return true;
      } else {
        return false;
      }
    });
    const content = filteredData.map((d, i) => {
      let mlist = [];
      var month_name = function(dt) {
        mlist = [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ];
        return mlist[dt.getMonth()];
      };
      if (d.services !== null) {
      }

      return (
        <div className="events" key={"event" + i}>
          <Row>
            <Col>
              <CardGroup>
                <Card onClick={this.handleCardClick.bind(null, i)}>
                  <div className="image">
                    <CardImg src={d.imageURL} />
                    <CardBody>
                      <CardTitle>
                        <div className="eventMonth">
                          {" " + month_name(new Date(d.date))} <br />
                          <div className="eventDay">
                            {" " + new Date(d.date).getDate() + " "}
                          </div>
                        </div>
                        <div className="eventName">{" " + d.eventName}</div>
                      </CardTitle>
                      <br />
                      <CardSubtitle>
                        <div className="eventAddress">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {d.city},{" "}
                          {d.state}
                        </div>
                        <div className="eventTime">
                          <FontAwesomeIcon icon={faClock} />{" "}
                          {moment(d.startTime, "HH:mm:ss").format("h:mm A")} -{" "}
                          {moment(d.endTime, "HH:mm:ss").format("h:mm A")}
                        </div>
                        {/* <button className="service">{d.services}</button> */}
                        <br />
                        {/* <button
                          className="serviceType"
                          style={{
                            color:
                              d.categoryName === "Give"
                                ? "blue"
                                : null || d.categoryName === "Learn"
                                ? "green"
                                : null || d.categoryName === "Volunteer"
                                ? "yellow"
                                : null || d.categoryName === "Activism"
                                ? "purple"
                                : null
                          }}
                        >
                          {d.categoryName}
                        </button> */}
                      </CardSubtitle>
                    </CardBody>
                  </div>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <div>
        <div className="search">
          <InputGroup>
            {/* <InputGroupAddon addonType="append"> */}
            {/* <InputGroupText>Search</InputGroupText> */}
            <Input
              placeholder="Search events or organizations"
              value={this.state.input}
              onChange={this.handleSearch}
            />
            {/* </InputGroupAddon> */}
          </InputGroup>
          <Button tag={Link} to="/AddEvent">
            + Add Event
          </Button>
        </div>

        {/* <h2 style={{ textAlign: "center", fontWeight: "300" }}> */}
        {/* Events that match your search: */}
        {/* </h2> */}
        {/* <div className="add"> */}
        {/* <h4>New Organization?</h4>
          <Button tag = {Link} to="/RegOrganization">
            + Add Organization
          </Button>
          <br /> */}
        {/* <Button tag= {Link} to ="/AddEvent">
            + Add Event
          </Button> */}
        {/* </div> */}
        {/* <Nav vertical className="sidebar"> */}
        <div className="sidebarFilter">
          <div className="filters">
            <h5>Select Area of Service:</h5>
            <FormGroup check>
              <Label check>
                <Input
                  checked={this.state.filter.includes(Service.HOUSING)}
                  type="checkbox"
                  name="check1"
                  value={Service.HOUSING}
                  onChange={this.handleSelect}
                />{" "}
                {Service.HOUSING}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  checked={this.state.filter.includes(Service.LEGAL)}
                  type="checkbox"
                  name="check1"
                  value={Service.LEGAL}
                  onChange={this.handleSelect}
                />{" "}
                {Service.LEGAL}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  checked={this.state.filter.includes(Service.DAYCENTER)}
                  type="checkbox"
                  name="check1"
                  value={Service.DAYCENTER}
                  onChange={this.handleSelect}
                />{" "}
                {Service.DAYCENTER}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  checked={this.state.filter.includes(Service.BASIC)}
                  type="checkbox"
                  name="check1"
                  value={"Basic Needs"}
                  onChange={this.handleSelect}
                />{" "}
                {Service.BASIC}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  checked={this.state.filter.includes(Service.HEALTH)}
                  type="checkbox"
                  name="check1"
                  value={Service.HEALTH}
                  onChange={this.handleSelect}
                />{" "}
                {Service.HEALTH}
              </Label>
            </FormGroup>
            <br />
            <div className="date">
              <h5>Select Date:</h5>
              <Select
                onChange={this.handleDateChange}
                options={times}
                placeholder="Select..."
              />
            </div>
            <br />
            <div className="location">
              <h5>Select Location:</h5>
              <Select
                style={{ position: "fixed" }}
                onChange={this.handleCityChange}
                options={cities}
                isMulti="true"
                placeholder="Select..."
                defaultValue={cities === "All"}
              />
            </div>
            <br />
          </div>
          <div className="categories">
            <h5>Select an Action:</h5>
            <FormGroup check>
              <Label check>
                <Input
                  checked={this.state.category === "All"}
                  type="radio"
                  name="radio1"
                  value={"All"}
                  onChange={this.handleCategory}
                />{" "}
                All
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  value={"Give"}
                  onChange={this.handleCategory}
                />{" "}
                Give
              </Label>{" "}
              <ReactTooltip place="top" type="dark" effect="float" />
              <FontAwesomeIcon
                icon={faQuestionCircle}
                style={{ width: "10px" }}
                data-tip="Make a donation, whether it’s funding, food, or in-kind."
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  value={"Learn"}
                  onChange={this.handleCategory}
                />{" "}
                Learn
              </Label>{" "}
              <FontAwesomeIcon
                icon={faQuestionCircle}
                style={{ width: "10px" }}
                data-tip="Learn more about the issue and what’s happening in our community."
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  value={"Volunteer"}
                  onChange={this.handleCategory}
                />{" "}
                Volunteer
              </Label>{" "}
              <FontAwesomeIcon
                icon={faQuestionCircle}
                style={{ width: "10px" }}
                data-tip="Use your time and talents to help out."
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  value={"Activism"}
                  onChange={this.handleCategory}
                />{" "}
                Activism
              </Label>{" "}
              <FontAwesomeIcon
                icon={faQuestionCircle}
                style={{ width: "10px" }}
                data-tip="Use your voice to make change in our community."
              />
            </FormGroup>
          </div>
          <br />
        </div>
        {/* </Nav> */}

        <div
          style={{
            display: "flex",
            alignItems: "align-self",
            flexDirection: "row",
            flexWrap: "wrap",
            flexBasis: 1,
            marginLeft: "50px"
          }}
        >
          {content}

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader>{this.state.eventName}</ModalHeader>
            <ModalBody>
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>
                Hosted by:
              </h7>
              <h7 style={{ fontWeight: "400" }}>
                {" " + this.state.organizationName}
              </h7>
              <br />
              <br />
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>
                Description:
              </h7>
              <h7 style={{ fontWeight: "100" }}>
                {" " + this.state.eventDescription}
              </h7>
              <br />
              <br />
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>Address:</h7>
              <h7 style={{ fontWeight: "100" }}>
                {" " + this.state.address + ","} {this.state.city + ","}{" "}
                {this.state.state}
                {" " + this.state.zipcode}
              </h7>
              <br />
              <br />
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>Date:</h7>
              <h7 style={{ fontWeight: "100" }}>{" " + this.state.date}</h7>
              <br />
              <br />
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>Time:</h7>
              <h7 style={{ fontWeight: "100" }}>
                {" " +
                  moment(this.state.startTime, "HH:mm:ss").format(
                    "h:mm A"
                  )}{" "}
                - {moment(this.state.endTime, "HH:mm:ss").format("h:mm A")}
              </h7>
              <br />
              <br />
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>
                Event Website:
              </h7>{" "}
              <a href={" " + this.state.url + " "}>Visit Site</a>
              <br />
              <br />
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>
                Capacity:
              </h7>
              <h7 style={{ fontWeight: "100" }}>{" " + this.state.capacity}</h7>
              <br />
              <br />
              <h7 style={{ color: "#177283", fontWeight: "bold" }}>
                Event Coordinator Contact Information:
              </h7>
              {" " + this.state.coordinatorFirstName}
              <br />
              {" " + this.state.coordinatorLastName}
              <br />
              {" " + this.state.coordinatorEmail}
              <br />
              {" " + this.state.coordinatorPhone}
            </ModalBody>
            <Button
              style={{
                backgroundColor: " #cf0f2e",
                width: "90px",
                float: "right",
                marginLeft: "80%"
              }}
              onClick={this.toggle}
            >
              Close
            </Button>
          </Modal>
        </div>
      </div>
    );
  }
}
