import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label } from "reactstrap";
import _ from "lodash";

import "./css/confirm.css";

class Confirmation extends Component {
  convertCategoryInput = () => {
    let types = [];
    console.log(this.props.orgForm.type);
    let input = this.props.orgForm.type;
    for (let i = 0; i < input.length; i = i + 1) {
      types.push(input[i].value);
    }
    this.props.orgForm.type = types;
    this.props.orgForm.city = this.props.orgForm.city.value;
    this.props.onConfirm();
  };

  render() {
    console.log(this.props.orgForm.city);
    return (
      <section>
        <h2 className="pageTitle">CONFIRM YOUR ORGANIZATION DETAILS</h2>
        <h6 className="help">
          Please confirm your information before submitting.
        </h6>

        <div className="addOrg">
          <Form>
            <h5 className="formTitle">Organization Information</h5>
            <FormGroup>
              <Label>
                Organization Name:{" "}
                <p className="formText"> {this.props.orgForm.name} </p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Organization Type:{" "}
                <p className="formText">
                  {" "}
                  {_.join(
                    this.props.orgForm.type.map(d => {
                      return d.value;
                    }),
                    ", "
                  )}{" "}
                </p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Mission:{" "}
                <p className="formText"> {this.props.orgForm.mission}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Organization Address:{" "}
                <p className="formText"> {this.props.orgForm.address}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Organization State:{" "}
                <p className="formText"> {this.props.orgForm.state}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Organization City:{" "}
                <p className="formText"> {this.props.orgForm.city}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Organization County:{" "}
                <p className="formText"> {this.props.orgForm.county}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Organization Zip Code:{" "}
                <p className="formText"> {this.props.orgForm.zip}</p>
              </Label>
            </FormGroup>

            <h5 className="formTitle">Organization Contact</h5>

            <FormGroup>
              <Label>
                First Name:{" "}
                <p className="formText"> {this.props.orgForm.contactFName}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Last Name:{" "}
                <p className="formText"> {this.props.orgForm.contactLName}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Role:{" "}
                <p className="formText"> {this.props.orgForm.contactRole}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Email:{" "}
                <p className="formText"> {this.props.orgForm.contactEmail}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Phone:{" "}
                <p className="formText"> {this.props.orgForm.contactPhone}</p>
              </Label>
            </FormGroup>

            <h5 className="formTitle">Additional Information</h5>
            <FormGroup>
              <Label>
                Website:{" "}
                <p className="formText"> {this.props.orgForm.website}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Twitter:{" "}
                <p className="formText"> {this.props.orgForm.twitter}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Facebook:{" "}
                <p className="formText"> {this.props.orgForm.facebook}</p>
              </Label>
            </FormGroup>

            <FormGroup>
              <Label>
                Instagram:{" "}
                <p className="formText"> {this.props.orgForm.instgram}</p>
              </Label>
            </FormGroup>
          </Form>
        </div>

        <div className="formButton">
          <Button
            variant="primary"
            type="submit"
            value="0"
            onClick={this.props.onEdit}
          >
            Edit
          </Button>
          <Button
            variant="primary"
            type="submit"
            value="2"
            onClick={this.convertCategoryInput}
          >
            Confirm
          </Button>
        </div>
      </section>
    );
  }
}

Confirmation.propTypes = {
  orgForm: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default Confirmation;
