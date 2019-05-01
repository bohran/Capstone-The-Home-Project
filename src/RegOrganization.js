
import React, { Component } from "react";
import _ from "lodash";
import { Button } from "reactstrap";

import NewOrg from "./OrgForm";
import Confirmation from "./OrgConfirmation";
import Submission from "./Submission";

const Stage = {
  ORGANIZATION: 0,
  CONFIRMATION: 1,
  SUBMISSION: 2
};

export default class RegOrganization extends Component {
  state = {
    currentStage: Stage.ORGANIZATION,
      // ONLY place where the data exists
      orgFormEntries: {
        name: "",
        type: "",
        mission: "",
        address: "",
        state: "",
        city: "",
        county: "",
        zip: "",
        contactFName: "",
        contactLName: "",
        contactRole: "",
        contactPhone: "",
        contactEmail: "",
        website: "",
        twitter: "",
        facebook: "",
        instagram: "",
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
        <NewOrg
          form={this.state.orgFormEntries}
          onChange={this.handleChangeOrg}
        />
      );
    } else if (this.state.currentStage === Stage.CONFIRMATION) {
      content = (
        <Confirmation 
          orgForm={this.state.orgFormEntries}
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