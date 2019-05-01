// AddEvent route takes you here
import React, { Component } from "react";
import _ from "lodash";
import { Button } from "reactstrap";

import AddOrganizationForm from "./AddOrganizationForm";
import NewEvent from "./AddEventForm";
import Confirmation from "./Confirmation";
import Submission from "./Submission";

const Stage = {
  ORGANIZATION: 0,
  EVENT_DETAILS: 1,
  CONFIRMATION: 2,
  SUBMISSION: 3
};

export default class AddEvent extends Component {
  state = {
    currentStage: Stage.ORGANIZATION,
      // ONLY place where the data exists
      orgFormEntries: {
        name: "",
        type: "",
        mission: "",
        address: "",
        city: "",
        county: "",
        zip: "",
        state: "",
        contactName: "",
        contactRole: "",
        contactPhone: "",
        contactEmail: "",
        website: "",
        twitter: "",
        facebook: "",
        instagram: "",
        img: ""
      },
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

  // change orgForms
  handleChangeOrg = event => {
    // Copy orgFormEntries
    let updateOrgForm = _.cloneDeep(this.state.orgFormEntries);
    // Update every field
    updateOrgForm[event.target.name] = event.target.value;
    // Set state og orgFormEntires with new copy
    this.setState({
      orgFormEntries: updateOrgForm
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
    if (this.state.currentStage === Stage.ORGANIZATION) {
      content = (
        <AddOrganizationForm
          form={this.state.orgFormEntries}
          onChange={this.handleChangeOrg}
        />
      );
    } else if (this.state.currentStage === Stage.EVENT_DETAILS) {
      content = (
        <NewEvent
          form={this.state.eventFormEntries}
          onChange={this.handleChangeEvent}
        />
      );
    } else if (this.state.currentStage === Stage.CONFIRMATION) {
      content = (
        <Confirmation 
          orgForm={this.state.orgFormEntries} 
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
