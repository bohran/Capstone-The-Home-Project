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

    confirmForm: {
      // ONLY place where the data exists
      orgFormEntries: {
        name: "",
        category: "",
        mission: "",
        contactName: "",
        contactRole: "",
        contactPhone: "",
        contactEmail: "",
        website: ""
      },
      eventFormEntries: {
        title: "",
        eventType: "",
        eventDescr: "",
        date: "",
        startTime: "",
        endTime: "",
        eventAddress: "",
        eventCity: "",
        eventCounty: "",
        eventZip: "",
        creatorFName: "",
        creatorLName: "",
        creatorEmail: "",
        coordinateFName: "",
        coordinateLName: "",
        coordinateEmail: ""
      }
    }
  };

  // change orgForms
  handleChangeOrg = event => {
    console.log(event.target);
    // Copy orgFormEntries
    let updateOrgForm = _.cloneDeep(this.state.confirmForm.orgFormEntries);
    // Update every field
    updateOrgForm[event.target.name] = event.target.value;
    updateOrgForm[event.target.category] = event.target.value;
    updateOrgForm[event.target.mission] = event.target.value;
    updateOrgForm[event.target.contactName] = event.target.value;
    updateOrgForm[event.target.contactRole] = event.target.value;
    updateOrgForm[event.target.contactPhone] = event.target.value;
    updateOrgForm[event.target.contactEmail] = event.target.value;
    updateOrgForm[event.target.website] = event.target.value;
    // Set state og orgFormEntires with new copy
    this.setState({
      orgFormEntries: updateOrgForm
    });
  };

  // change eventForms
  handleChangeEvent = event => {
    // Copy of eventFormEntries
    let updateEventForm = _.cloneDeep(this.state.confirmForm.eventFormEntries);
    // Check for each field
    updateEventForm[event.target.title] = event.target.value;
    updateEventForm[event.target.eventType] = event.target.value;
    updateEventForm[event.target.eventDescr] = event.target.value;
    updateEventForm[event.target.date] = event.target.value;
    updateEventForm[event.target.startTime] = event.target.value;
    updateEventForm[event.target.endTime] = event.target.value;
    updateEventForm[event.target.eventAddress] = event.target.value;
    updateEventForm[event.target.eventCity] = event.target.value;
    updateEventForm[event.target.eventCounty] = event.target.value;
    updateEventForm[event.target.eventZip] = event.target.value;
    updateEventForm[event.target.creatorFName] = event.target.value;
    updateEventForm[event.target.creatorLName] = event.target.value;
    updateEventForm[event.target.creatorEmail] = event.target.value;
    updateEventForm[event.target.coordinatorFName] = event.target.value;
    updateEventForm[event.target.coordinatorLName] = event.target.value;
    updateEventForm[event.target.coordinatorEmail] = event.target.value;
    
  
    
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
          form={this.state.confirmForm.orgFormEntries}
          onChange={this.handleChangeOrg}
        />
      );
    } else if (this.state.currentStage === Stage.EVENT_DETAILS) {
      content = (
        <NewEvent
          form={this.state.confirmForm.eventFormEntries}
          onChange={this.handleChangeEvent}
        />
      );
    } else if (this.state.currentStage === Stage.CONFIRMATION) {
      content = (
        <Confirmation 
          form={this.state.confirmationForm} 
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
    // } else {
    //   return <newEvent form={this.state.eventFormEntries} />;
    // }
    // <Button onClick={this.setState({ currentStage: STAGE.EVENT_DETAILS })}>
    //   {" "}
    //   next
    // </Button>;
  }
}
