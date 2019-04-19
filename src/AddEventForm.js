import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Organization.css";

class NewEvent extends Component {
  render() {
    return (
      <div>
        <h2 className="orgPageTitle">ADD AN EVENT</h2>

        <div className="addEvent">
          <Form>
            <h5>Event Information:</h5>
            <FormGroup>
              <Label>Event Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter Event Title"
                value={this.props.form.title}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <h5>Event Category</h5>
              <Input
                type="select"
                name="eventType"
                value={this.props.form.eventType}
                onChange={this.props.onChange}
              >
                <option>Choose...</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Event Description</Label>
              <Input
                type="text"
                name="eventDescr"
                placeholder="Enter Event Description"
                value={this.props.form.eventDescr}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Event Date</Label>
              <Input
                type="text"
                name="date"
                placeholder="Enter Event Date"
                value={this.props.form.date}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Start Time</Label>
              <Input
                type="text"
                name="startTime"
                placeholder="Enter Event Start Time"
                value={this.props.form.startTime}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>End Time</Label>
              <Input
                type="text"
                name="endTime"
                placeholder="Enter Event End Time"
                value={this.props.form.endTime}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Address</Label>
              <Input
                type="text"
                name="eventAddress"
                placeholder="e.g. 1234 Main St."
                value={this.props.form.eventAddress}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Event City</Label>
              <Input
                type="text"
                name="eventCity"
                placeholder="e.g. Seattle"
                value={this.props.form.eventCity}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Event County</Label>
              <Input
                type="text"
                name="eventCounty"
                placeholder="e.g. King"
                value={this.props.form.eventCounty}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Event Zip Code</Label>
              <Input
                type="text"
                name="eventZip"
                placeholder="e.g. 98105"
                value={this.props.form.eventZip}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <h5>Event Contact Information:</h5>

            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="creatorFName"
                placeholder="Enter First Name"
                value={this.props.form.creatorFName}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="creatorLName"
                placeholder="Enter Last Name"
                value={this.props.form.creatorLName}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="creatorEmail"
                placeholder="Enter Contact Email"
                value={this.props.form.creatorEmail}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <h5>Event Coordinator Information:</h5>

            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="coordinatorFName"
                placeholder="Enter First Name"
                value={this.props.form.coordinatorFName}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="coordinatorLName"
                placeholder="Enter Last Name"
                value={this.props.form.coordinatorLName}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="coordinatorEmail"
                placeholder="Enter Contact Email"
                value={this.props.form.coordinatorEmail}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Button variant="" type="file" name="file" id="addMedia">
                Add Media
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

NewEvent.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NewEvent;
