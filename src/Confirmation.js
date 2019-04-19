import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Organization } from './AddOrganizationForm';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron } from 'reactstrap';
import './css/App.css';

class Confirmation extends Component {
  render() {
    console.log(this.props.orgForm);
    console.log(this.props.eventForm);
    return (
        <div className="formContainer">
        <div>
        <h1 >Please review your information is correct before submitting.</h1>
        </div>
        <div>Event Title: {title}</div>
        <div>Organization: {organization}</div>
        <div>Date: {date}</div>
        <div>Time: {time}</div>
        <div>Location: {address}</div>
        <div>Description: {description}</div>
        <div>Person of Contact: {contact}</div>
        <div className="buttonContainer">
            <button className="submitButton" ><a className="eventLink" href="../App.js"> Cancel </a> </button>
            <button className="submitButton"><a className="eventLink" href="./Events.js"> Submit Event</a> </button>
            </div>
        </div>
    );
  }
}

Confirmation.propTypes = {
  orgForm: PropTypes.object.isRequired,
  eventForm: PropTypes.object.isRequired,
};

export default Confirmation;

