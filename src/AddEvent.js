// Add Event route takes you here
import React, { Component } from "react";
import _ from "lodash";
import { Button } from "reactstrap";

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
        title: "",
        category: "",
        services: "",
        descr: "",
        date: "",
        startTime: "",
        endTime: "",
        address: "",
        room: "",
        city: "",
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
        img: ""
      }
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
  }

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
        />
      );
    } else if (this.state.currentStage === Stage.CONFIRMATION) {
      content = (
        <Confirmation 
          eventForm={this.state.eventFormEntries}
        />
      );
    } else if (this.state.currentStage === Stage.SUBMISSION) {
      content = (
        <Submission/>
      )
    }
    return (
      <div>
        {content}
        <Button variant="primary" type="submit" onClick={this.handleNext}>
          Continue
        </Button>
      </div>
    );
  }
}
