// AddEvent route takes you here
import React, { Component } from "react";
import _ from "lodash";
import { Button } from "reactstrap";

import AddOrganizationForm from "./AddOrganizationForm";
import NewEvent from "./AddEventForm";
import Confirmation from "./Confirmation";

const Stage = {
  ORGANIZATION: 0,
  EVENT_DETAILS: 1,
  CONFIRMATION: 2
};

export default class AddEvent extends Component {
  state = {
    currentStage: Stage.ORGANIZATION,
      // ONLY place where the data exists
      orgFormEntries: {
        name: "",
        category: "",
        mission: "",
        contactName: "",
        contactRole: "",
        contactPhone: "",
        contactEmail: "",
        website: "",
        twitter: "",
        facebook: "",
        instagram: ""
      },
      eventFormEntries: {
        title: "",
        eventType: "",
        eventDescr: "",
        date: "",
        startTime: "",
        endTime: "",
        eventAddress: "",
        eventRoom: "",
        eventCity: "",
        eventCounty: "",
        eventZip: "",
        creatorFName: "",
        creatorLName: "",
        creatorEmail: "",
        coordinatorFName: "",
        coordinatorLName: "",
        coordinatorEmail: "",
        website: "",
        twitter: "",
        facebook: "",
        instagram: ""
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
