// Add Event route takes you here
import React, { Component } from "react";
import _ from "lodash";

import NewEvent from "./EventForm";
import Confirmation from "./EventConfirmation";
import EventSubmission from "./EventSubmission";
import "./css/form.css";
import "./css/confirm.css";

const Stage = {
  EVENT: 0,
  CONFIRMATION: 1,
  SUBMISSION: 2
};

export default class AddEvent extends Component {
  state = {
    currentStage: Stage.EVENT,
    // ONLY place where the data exists
    eventFormEntries: {
      title: "",
      category: "",
      orgs: [],
      services: [],
      descr: "",
      date: "",
      startTime: "",
      endTime: "",
      address: "",
      room: "",
      city: "",
      capacity: 0,
      county: "",
      zip: "",
      state: "",
      creatorFName: "",
      creatorLName: "",
      creatorEmail: "",
      creatorPhone: "",
      coordinatorFName: "",
      coordinatorLName: "",
      coordinatorEmail: "",
      coordinatorPhone: "",
      website: "",
      img: "https://i.ytimg.com/vi/Ll4HftFKjD8/maxresdefault.jpg"
    },
    orgData: []
  };

  handleSaveEvent = () => {
    var capacityAsInt = parseInt(this.state.eventFormEntries.capacity, 10);
    let url = "https://api.emmaropes.me/events";
    fetch(url, {
      method: "post",
      body: JSON.stringify({
        categoryName: this.state.eventFormEntries.category,
        eventName: this.state.eventFormEntries.title,
        eventDescription: this.state.eventFormEntries.descr,
        address: this.state.eventFormEntries.address,
        city: this.state.eventFormEntries.city,
        state: this.state.eventFormEntries.state,
        zipcode: this.state.eventFormEntries.zip,
        date: this.state.eventFormEntries.date,
        startTime: this.state.eventFormEntries.startTime,
        endTime: this.state.eventFormEntries.endTime,
        county: this.state.eventFormEntries.county,
        url: this.state.eventFormEntries.website,
        capacity: capacityAsInt,
        room: this.state.eventFormEntries.room,
        contactEmail: this.state.eventFormEntries.creatorEmail,
        contactPhone: this.state.eventFormEntries.creatorPhone,
        contactFirstName: this.state.eventFormEntries.creatorFName,
        contactLastName: this.state.eventFormEntries.creatorLName,
        services: this.state.eventFormEntries.services,
        organizations: this.state.eventFormEntries.orgs
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw response.text();
      })
      .then(text => {
        console.log(text);
        return JSON.parse(text);
      })
      .then(responseObject => {
        this.handleNext();
      })
      .catch(function(err) {
        console.log("ERROR!");
        console.log(err);
      });
  };

  // change eventForms
  handleChangeEvent = event => {
    // Copy of eventFormEntries
    let updateEventForm = _.cloneDeep(this.state.eventFormEntries);
    // Check for each field
    updateEventForm[event.target.name] = event.target.value;
    // Set state to new form
    this.setState({
      eventFormEntries: updateEventForm
    });
  };

  handleChangeService = event => {
    let newServices = _.cloneDeep(this.state.eventFormEntries.services);
    var option = event.target.value;
    if(newServices.includes(option)) {
      newServices = _.remove(newServices, function(n) {
        return n !== option
      })
    } else {
      newServices.push(option);
    }
    let updateEventForm = _.cloneDeep(this.state.eventFormEntries);

    updateEventForm.services = newServices;

    this.setState({
      eventFormEntries: updateEventForm
    });
  };

  //change eventForms
  handleNext = () => {
      this.setState({
        currentStage: this.state.currentStage + 1
      });
  };

  handleBack = () => {
    this.setState({
      currentStage: this.state.currentStage - 1
    });
};

  componentDidMount() {
    let url = "https://api.emmaropes.me/organizations";
    let req = new Request(url);
    fetch(req)
      .then(response => {
        return response.json();
      })
      .then(results => {
        this.setState({
          orgData: results
        });
      });
  }

  render() {
    let orgOptions = [];
    orgOptions = this.state.orgData.map((d, i) => {
      return {value: d.organizationName, label: d.organizationName};
      // return <option key={d.organizationName + i}>{d.organizationName}</option>;
    });
    let content = "";
    if (this.state.currentStage === Stage.EVENT) {
      content = (
        <NewEvent
          form={this.state.eventFormEntries}
          onChange={this.handleChangeEvent}
          onUpdate={this.handleChangeService}
          onNext={this.handleNext}
          orgList={orgOptions}
        />
      );
    } else if (this.state.currentStage === Stage.CONFIRMATION) {
      content = (
        <Confirmation
          eventForm={this.state.eventFormEntries}
          onEdit={this.handleBack}
          onConfirm={this.handleSaveEvent}
        />
      );
    } else if (this.state.currentStage === Stage.SUBMISSION) {
      content = <EventSubmission />;
    }
    return <div>{content}</div>;
  }
}
