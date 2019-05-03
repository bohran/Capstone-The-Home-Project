import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Row,
  CardDeck,
  Col
} from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NationalGeographicAPI } from "national-geographic-api";
import LoadingScreen from "react-loading-screen";
// import Sticky from 'react-sticky';

import DatePicker from "react-datepicker";

import "./css/Events.css";

export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoading: false,
      data: [],
      value: 0,
      previous: 0,
      title: "",
      description: ""
    };
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
      address:address, 
      city: city, 
      state: state, 
      zipcode: zipcode, 
      date:date, 
      startTime:startTime, 
      endTime: endTime, 
      url: url, 
      capacity:capacity, 
      room:room, 
      contactFirstName:contactFirstName,
      contactLastName:contactLastName, 
      contactEmail:contactEmail, 
      contactPhone:contactPhone, 
      coordinatorFirstName:coordinatorFirstName, 
      coordinatorLastName:coordinatorLastName,
      coordinatorEmail:coordinatorEmail, 
      coordinatorPhone:coordinatorPhone, 
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
          data: results,
          isLoading: false
        });
      });

  }
  render() {
    const content = this.state.data.map((d, i) => {
    //   let dates = this.state.data.map((d) => {
    //     return new Date((d.date)).toString();
    // })
      // let imageSrc = d.eventName;
      // if (d.urlToImage == null) {
      //   imageSrc = <br />;
      // } else {
      //   imageSrc = (
      //     <div className="image">
      //       <CardImg
      //         size="cover"
      //         src={imageSrc}
      //         display="block"
      //         alt={d.title}
      //       />
      //     </div>
      //   );
      // }
      return (
        <div className="events" key={"event" + i}>
        <CardGroup>
          <Card>
            <div className="image">
              <CardImg src={d.room} style={{ width: "100%" }} />
              <CardBody>
                <CardTitle>{d.eventName}</CardTitle>
                <CardSubtitle>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {d.address}
                </CardSubtitle>
                <CardSubtitle>
                  <FontAwesomeIcon icon={faClock} /> {d.startTime} - {d.endTime}
                </CardSubtitle>
                <CardSubtitle>
                  <FontAwesomeIcon icon={faCalendar} />
                   {" " + d.date}
                </CardSubtitle>
                <Button
                  className="learn"
                  onClick={this.handleCardClick.bind(null, i)}
                >
                  learn more
                </Button>
              </CardBody>
            </div>
          </Card>
          </CardGroup>
        </div>
      );
    });
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>
          Events that match your search:
        </h2>
        <div className = "add">
        <h4>New Organization?</h4>
          <Button tag={Link} to="/RegOrganization">
            + Add Organization
          </Button> 
          <br/>
          <Button tag={Link} to="/AddEvent">
            + Add Event
          </Button>
        </div>
        <Nav vertical className="sidebar">
          <div className="categories">
            <h4>Select an Action:</h4>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> All
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> Give
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> Learn
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> Volunteer
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> Activism
              </Label>
            </FormGroup>
          </div>
          <br />
          <div className="filters">
            <h4>Select Area of Service:</h4>
            <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> All
                </Label>
              </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="check1" /> Housing/Shelter
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="check1" /> Legal/Employment
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="check1" /> Day Centers
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="check1" /> Basic Needs
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="check1" /> Health/Wellness
              </Label>
            </FormGroup>
            <br />
            <div className="location">
              <h4>Select Location:</h4>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> All
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Seattle
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Bellevue
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Everett
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Burien
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Kirkland
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Bothell
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Renton
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Redmond
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Tacoma
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Olympia
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="check1" /> Lakewood
                </Label>
              </FormGroup>
            </div>
            <br />
            <div className="date">
              <h4>Select Date:</h4>
              <FormGroup>
                <Input
                  style={{ width: "50%" }}
                  type="select"
                  id="exampleSelect"
               >
                  <option>All</option>
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>This Week</option>
                  <option>This Weekend</option>
                  <option>This Month</option>
                </Input>
              </FormGroup>
            </div>
          </div>
        </Nav>
        
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
            <ModalHeader>{this.state.eventName}.</ModalHeader>
            <ModalBody> 
            Organization:
            {this.state.organizationName}
            <br/>
            Description:
            {" " + this.state.eventDescription}
            <br/>
            Address:
            {" " + this.state.address},{" " + this.state.city}, {" " + this.state.zipcode},
            <br/>
            Date:
            {" " + this.state.date}
            <br/>
            Time:
            {" " + this.state.startTime} - {" " + this.state.endTime}
            <br/>
            Event Website: {" "}
            <a href={" " + this.state.url + " "}>Visit Site</a>
            <br/>
            Capacity:
            {" " + this.state.capacity}
            <br/>
            Event Coordinator Contact Information:
            {" " + this.state.coordinatorFirstName}
            <br/>
            {" " + this.state.coordinatorLastName}
            <br/>
            {" " + this.state.coordinatorEmail}
            <br/>
            {" " + this.state.coordinatorPhone}
            </ModalBody>

            <Button
              style={{
                backgroundColor: " #cf0f2e",
                width: "80px",
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
