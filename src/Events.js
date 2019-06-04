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
  InputGroup,
  NavbarToggler,
  Collapse,
  Nav
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import moment from "moment";
import _ from "lodash";
import Select from "react-select";
import ReactTooltip from "react-tooltip";
import ScrollUpButton from "react-scroll-up-button";
import Sidebar from "react-sidebar";

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
    this.state = {
      modal: false,
      sidebar: false,
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
      selectedDate: "All",
      opacity: 1
    };
  }

  // toggleTooltip = () => {
  //   this.setState({
  //     tooltipOpen: !this.state.tooltipOpen
  //   });
  // }

  toggleFilters = () => {
    this.setState({
      filtersOpen: !this.state.filtersOpen
    });
  };

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

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    let url = "https://api.seattleforallkc.com/events";
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
      maxDate = moment(maxDate, "YYYY/MM/DD").format("YYYY-MM-DD");
    } else if (date.value === "Tomorrow") {
      maxDate = moment(maxDate, "YYYY/MM/DD")
        .add(1, "days")
        .format("YYYY-MM-DD");
    } else if (date.value === "This Week") {
      maxDate = moment(maxDate, "YYYY/MM/DD")
        .add(7, "days")
        .format("YYYY-MM-DD");
    } else if (date.value === "Next Week") {
      maxDate = moment(maxDate, "YYYY/MM/DD")
        .add(14, "days")
        .format("YYYY-MM-DD");
    } else if (date.value === "This Month") {
      maxDate = moment(maxDate, "YYYY/MM/DD")
        .add(30, "days")
        .format("YYYY-MM-DD");
    } else {
      maxDate = "All";
    }
    this.setState({ selectedDate: maxDate });
  };

  handleOrgSearch = orgs => {
    let match = orgs.filter(d => {
      return d.toLowerCase().includes(this.state.input.toLowerCase());
    });
    return match.length !== 0;
  };

  // onSetSidebarOpen = open => {
  //   this.setState({ sidebarOpen: open });
  // };

  toggleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    });
  };

  render() {
    let content = "";
    if (this.state.data.length > 0) {
      const filteredData = this.state.data.filter(d => {
        const matchesCategory =
          d.categoryName === this.state.category ||
          this.state.category === "All";
        const serviceOverlap = _.intersection(d.services, this.state.filter);
        const matchesService =
          serviceOverlap.length !== 0 || this.state.filter.length === 0;
        const searchInput =
          d.eventName.toLowerCase().includes(this.state.input.toLowerCase()) ||
          this.state.input === "" ||
          this.handleOrgSearch(d.organizations);
        const matchCity =
          this.state.selectedCity.includes(d.city) ||
          this.state.selectedCity.length === 0;
        const matchDate =
          this.state.selectedDate >=
            moment(d.date, "YYYY/MM/DD")
              .subtract(1, "days")
              .format("YYYY-MM-DD") || this.state.selectedDate === "All";
        if (
          matchesCategory &&
          matchesService &&
          searchInput &&
          matchCity &&
          matchDate
        ) {
          return true;
        } else {
          return false;
        }
      });
      content = filteredData.map((d, i) => {
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
          <div className="event" key={"event" + i}>
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
    } else {
      content = (
        <div className="noEvents" style={{ paddingLeft: "50px" }}>
          No events match your search
        </div>
      );
    }
    return (
      <div>
        <div className="floatSideBar">
          {/* <Sidebar */}
          {/* } // open={this.state.sidebarOpen}
          // onSetOpen={this.onSetSidebarOpen}
          // styles={{ sidebar: { background: "white" } }}
          // > */}
          {/* <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button> */}
          {/* </Sidebar> */}
        </div>
        <ScrollUpButton StopPosition={0} ShowAtPosition={150} />
        <div className="search">
          <InputGroup>
            <Input
              placeholder="Search events or organizations"
              value={this.state.input}
              onChange={this.handleSearch}
            />
          </InputGroup>
          <Button tag={Link} to="/AddEvent">
            + Add Event
          </Button>
        </div>
        <Button className="modal" onClick={this.toggleSidebar}>
            Open{" "}
          </Button>
          <Modal isOpen={this.state.sidebar} toggle={this.toggleSidebar}>
            {/* sidebar={ */}
            <ModalBody>
              <div className="filters">
                <h5>Areas of Service:</h5>
                <FormGroup check>
                  <Label className="services" check>
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
                  <Label className="services" check>
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
                  <Label className="services" check>
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
                  <Label className="services" check>
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
                  <Label className="services" check>
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
                  <h5>Date Range:</h5>
                  <Select
                    onChange={this.handleDateChange}
                    options={times}
                    placeholder="Select..."
                  />
                </div>
                <br />
                <div className="location">
                  <h5>Location:</h5>
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
                <h5>Categories:</h5>
                <FormGroup check>
                  <Label className="services" check>
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
                  <Label className="services" check>
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
                  <Label className="services" check>
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
                  <Label className="services" check>
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
                  <Label className="services" check>
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
            </ModalBody>
          </Modal>
        <div className="calendarContainer">
          <div className="sidebarFixed">
            <div className="filters">
              <h5>Areas of Service:</h5>
              <FormGroup check>
                <Label className="services" check>
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
                <Label className="services" check>
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
                <Label className="services" check>
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
                <Label className="services" check>
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
                <Label className="services" check>
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
                <h5>Date Range:</h5>
                <Select
                  onChange={this.handleDateChange}
                  options={times}
                  placeholder="Select..."
                />
              </div>
              <br />
              <div className="location">
                <h5>Location:</h5>
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
              <h5>Categories:</h5>
              <FormGroup check>
                <Label className="services" check>
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
                <Label className="services" check>
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
                <Label className="services" check>
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
                <Label className="services" check>
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
                <Label className="services" check>
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
            {/* </Collapse> */}
            <br />
          </div>

          <div>
            <div className="events">{content}</div>
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader>{this.state.eventName}</ModalHeader>
            <ModalBody>
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>
                Hosted by:
              </h6>
              <h6 style={{ fontWeight: "400" }}>
                {" " + this.state.organizationName}
              </h6>
              <br />
              <br />
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>
                Description:
              </h6>
              <h6 style={{ fontWeight: "100" }}>
                {" " + this.state.eventDescription}
              </h6>
              <br />
              <br />
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>Address:</h6>
              <h6 style={{ fontWeight: "100" }}>
                {" " + this.state.address + ","} {this.state.city + ","}{" "}
                {this.state.state}
                {" " + this.state.zipcode}
              </h6>
              <br />
              <br />
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>Date:</h6>
              <h6 style={{ fontWeight: "100" }}>
                {" " +
                  moment(this.state.date, "YYYY/MM/DD")
                    .subtract(1, "days")
                    .format("MM/DD/YY")}
              </h6>
              <br />
              <br />
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>Time:</h6>
              <h6 style={{ fontWeight: "100" }}>
                {" " +
                  moment(this.state.startTime, "HH:mm:ss").format(
                    "h:mm A"
                  )}{" "}
                -{moment(this.state.endTime, "HH:mm:ss").format("h:mm A")}
              </h6>
              <br />
              <br />
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>
                Event Website:
              </h6>{" "}
              <a href={" " + this.state.url + " "}>Visit Site</a>
              <br />
              <br />
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>
                Capacity:
              </h6>
              <h6 style={{ fontWeight: "100" }}>{" " + this.state.capacity}</h6>
              <br />
              <br />
              <h6 style={{ color: "#177283", fontWeight: "bold" }}>
                Event Coordinator Contact Information:
              </h6>
              {" " + this.state.coordinatorFirstName}
              {" " + this.state.coordinatorLastName}
              <br />
              {" Email: " + this.state.coordinatorEmail}
              <br />
              {" Phone: " + this.state.coordinatorPhone}
            </ModalBody>
            <Button
              style={{
                backgroundColor: " #cf0f2e",
                width: "90px",
                float: "right",
                marginLeft: "80%"
              }}
              onClick={this.toggleModal}
            >
              Close
            </Button>
          </Modal>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
