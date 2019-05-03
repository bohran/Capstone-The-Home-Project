// Add Event route takes you here
import React, { Component } from "react";
import _ from "lodash";

import NewEvent from "./EventForm";
import Confirmation from "./EventConfirmation";
import Submission from "./Submission";

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
      title: "21 Mile Marathon",
      category: "Give",
      orgs: ["All Home"],
      services: ["Housing/Shelter"],
      descr: "Run a marathon while raising money for the homeless shelter around the King County area.",
      date: "19/10/22",
      startTime: "10:00:00",
      endTime: "17:00:00",
      address: "3rd Ave Main St.",
      room: "https://i.ytimg.com/vi/Ll4HftFKjD8/maxresdefault.jpg",
      city: "Bellevue",
      capacity: 1000,
      county: "King",
      zip: "98007",
      state: "WA",
      creatorFName: "Emily",
      creatorLName: "Lao",
      creatorEmail: "EmLao@gmail.com",
      creatorPhone: "425-332-1910",
      coordinatorFName: "",
      coordinatorLName: "",
      coordinatorEmail: "",
      coordinatorPhone: "",
      website: "",
      img: "https://i.ytimg.com/vi/Ll4HftFKjD8/maxresdefault.jpg"
    }
  };

  handleSaveEvent = () => {
    var capacityAsInt = parseInt(this.state.eventFormEntries.capacity, 10)
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
    console.log(event.target.value);
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
    var options = event.target.options;
    var services = this.state.eventFormEntries.services;
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        services.push(options[i].value);
      }
    }
    let updateEventForm = _.cloneDeep(this.state.eventFormEntries);

    updateEventForm.services = services;

    this.setState({
      eventFormEntries: updateEventForm
    });
  };

  //change eventForms
  handleNext = () => {
    let newStage = this.state.currentStage + 1;
    this.setState({
      currentStage: newStage
    });
  };

  render() {
    let content = "";
    if (this.state.currentStage === Stage.EVENT) {
      content = (
        <NewEvent
          form={this.state.eventFormEntries}
          onChange={this.handleChangeEvent}
          onUpdate={this.handleChangeService}
          onNext={this.handleNext}
        />
      );
    } else if (this.state.currentStage === Stage.CONFIRMATION) {
      content = (
        <Confirmation
          eventForm={this.state.eventFormEntries}
          onConfirm={this.handleSaveEvent}
        />
      );
    } else if (this.state.currentStage === Stage.SUBMISSION) {
      content = <Submission />;
    }
    return <div>{content}</div>;
  }
}
