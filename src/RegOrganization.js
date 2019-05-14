import React, { Component } from "react";
import _ from "lodash";

import NewOrg from "./OrgForm";
import Confirmation from "./OrgConfirmation";
import Submission from "./Submission";

const Stage = {
  ORGANIZATION: 0,
  CONFIRMATION: 1,
  EDIT: 2,
  SUBMISSION: 3
};

export default class RegOrganization extends Component {
  state = {
    currentStage: Stage.ORGANIZATION,
    // ONLY place where the data exists
    orgFormEntries: {
      name: "Tent Cities",
      type: ["Housing (Permanent)"],
      mission: "Providing immediate shelter for various people experiencing homelessness.",
      address: "223rd Main St.",
      state: "WA",
      city: "Kirkland",
      county: "King",
      zip: "98032",
      contactFName: "Ash",
      contactLName: "Renner",
      contactRole: "Media Manager",
      contactPhone: "",
      contactEmail: "aRenner@live.com",
      website: "",
      twitter: "",
      facebook: "",
      instagram: "",
      img: ""
    }
  };

  handleSaveOrg = () => {
    let url = "https://api.emmaropes.me/organizations";
    fetch(url, {
      method: "post",
      body: JSON.stringify({
        organizationName: this.state.orgFormEntries.name,
        organizationDescription: this.state.orgFormEntries.mission,
        address: this.state.orgFormEntries.address,
        city: this.state.orgFormEntries.city,
        state: this.state.orgFormEntries.state,
        zipcode: this.state.orgFormEntries.zip,
        county: this.state.orgFormEntries.county,
        organizationType: this.state.orgFormEntries.type,
        url: this.state.orgFormEntries.website,
        email: this.state.orgFormEntries.contactEmail,
        phone: this.state.orgFormEntries.ContactPhone,
        firstName: this.state.orgFormEntries.contactFName,
        lastName: this.state.orgFormEntries.contactLName,
        role: this.state.orgFormEntries.contactRole,
        twitter: this.state.orgFormEntries.twitter,
        instagram: this.state.orgFormEntries.instagram,
        facebook: this.state.orgFormEntries.facebook
      }),
      headers: new Headers({
        "Content-Type": "application/json"
        // 'Accept': 'application/json'
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

  handleChangeType = event => {
    var options = event.target.options;
    var types = this.state.orgFormEntries.type;
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        types.push(options[i].value);
      }
    }
    this.setState({
      orgFormEntries: {
        type: types
      }
    });
    console.log(this.state.orgFormEntries.type);
    // this.props.someCallback(types);
  };

  //change eventForms
  handleNext = event => {
    console.log(event.target.value)
    if(event.target.value === "1") {
      this.setState({
        currentStage: Stage.CONFIRMATION
      });
    } else if(event.target.value === "0") {
      this.setState({
        currentStage: Stage.ORGANIZATION
      });
    }
    // let newStage = this.state.currentStage + 1;
    // this.setState({
    //   currentStage: newStage
    // });
  };

  render() {
    let content = "";
    if (this.state.currentStage === Stage.ORGANIZATION) {
      content = (
        <NewOrg
          form={this.state.orgFormEntries}
          onChange={this.handleChangeOrg}
          onUpdate={this.handleChangeType}
          onNext={this.handleNext}
          stage={this.state.currentStage}
        />
      );
    } else if (this.state.currentStage === Stage.CONFIRMATION) {
      content = (
        <Confirmation
          orgForm={this.state.orgFormEntries}
          onNext={this.handleNext}
          onConfirm={this.handleSaveOrg}
        />
      );
    } else if (this.state.currentStage === Stage.SUBMISSION) {
      content = <Submission />;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
