import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CustomInput
} from "reactstrap";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";

const types = [
  { value: "Philanthropy", label: "Philanthropy" },
  { value: "Government", label: "Government" },
  { value: "Non-Profit", label: "Non-Profit" },
  { value: "Foundation", label: "Foundation" },
  { value: "Housing (Permanent)", label: "Housing (Permanent)" },
  { value: "Shelter (Not Permanent)", label: "Shelter (Not Permanent)" },
  { value: "Rapid Re-housing", label: "Rapid Re-housing" },
  { value: "Transitional Housing", label: "Transitional Housing" },
  { value: "Urban Encampments", label: "Urban Encampments" },
  { value: "Housing Search", label: "Housing Search" },
  { value: "Diversion", label: "Diversion" },
  { value: "Safe Parking", label: "Safe Parking" },
  { value: "Women's/Family Drop-In", label: "Women's/Family Drop-In" },
  { value: "YYA Drop-In", label: "YYA Drop-In" },
  { value: "Men's Drop-In", label: "Men's Drop-In" },
  {
    value: "General Population Drop-In",
    label: "General Population Drop-In"
  },
  {
    value: "Legal Services / Eviction",
    label: "Legal Services / Eviction"
  },
  { value: "Case Management", label: "Case Management" },
  { value: "Employment Search", label: "Employment Search" },
  { value: "Clothing", label: "Clothing" },
  { value: "Food", label: "Food" },
  { value: "Shower/Laundry", label: "Shower/Laundry" },
  { value: "Toiletries", label: "Toiletries" },
  { value: "Storage", label: "Storage" },
  { value: "Medical / Health", label: "Medical / Health" },
  { value: "Social / Emotional", label: "Social / Emotional" },
  { value: "Dental Care", label: "Dental Care" },
  { value: "Addiction Recovery", label: "Addiction Recovery" },
  { value: "Mental Health", label: "Mental Health" },
  {
    value: "Domestic Violence Support",
    label: "Domestic Violence Support"
  },
  {
    value: "Emergency/ Crisis Hotline",
    label: "Emergency/ Crisis Hotline"
  },
  { value: "Mailing Address", label: "Mailing Address" },
  { value: "Phone and Computer Access", label: "Phone and Computer Access" },
  { value: "Transportation Assistance", label: "Transportation Assistance" }
];
const cities = [
  {
    value: "Algona",
    label: "Algona"
  },
  {
    value: "Auburn",
    label: "Auburn"
  },
  {
    value: "Bellevue",
    label: "Bellevue"
  },
  {
    value: "Bothell",
    label: "Bothell"
  },
  {
    value: "Burien",
    label: "Burien"
  },
  {
    value: "Carnation",
    label: "Carnation"
  },
  {
    value: "Covington",
    label: "Covington"
  },
  {
    value: "Des Moines",
    label: "Des Moines"
  },
  {
    value: "Duvall",
    label: "Duvall"
  },
  {
    value: "Enumclaw",
    label: "Enumclaw"
  },
  {
    value: "Federal Way",
    label: "Federal Way"
  },
  {
    value: "Issaquah",
    label: "Issaquah"
  },
  {
    value: "Kenmore",
    label: "Kenmore"
  },
  {
    value: "Kent",
    label: "Kent"
  },
  {
    value: "Kirkland",
    label: "Kirkland"
  },
  {
    value: "Lake Forest Park",
    label: "Lake Forest Park"
  },
  {
    value: "Maple Valley",
    label: "Maple Valley"
  },
  {
    value: "Medina",
    label: "Medina"
  },
  {
    value: "Mercer Island",
    label: "Mercer Island"
  },
  {
    value: "Newcastle",
    label: "Newcastle"
  },
  {
    value: "Normandy Park",
    label: "Normandy Park"
  },
  {
    value: "North Bend",
    label: "North Bend"
  },
  {
    value: "Pacific",
    label: "Pacific"
  },
  {
    value: "Redmond",
    label: "Redmond"
  },
  {
    value: "Renton",
    label: "Renton"
  },
  {
    value: "Sammamish",
    label: "Sammamish"
  },
  {
    value: "Seatac",
    label: "Seatac"
  },
  {
    value: "Seattle",
    label: "Seattle"
  },
  {
    value: "Shoreline",
    label: "Shoreline"
  },
  {
    value: "Snoqualmie",
    label: "Snoqualmie"
  },
  {
    value: "Tukwila",
    label: "Tukwila"
  },
  {
    value: "Woodinville",
    label: "Woodinville"
  }
];

const requiredFields = [
  "organizationName",
  "organizationType",
  "address",
  "state",
  "city",
  "zipcode",
  "county",
  "firstName",
  "lastName",
];

const prettyNames = {
  organizationName: "Organization Name",
  organizationType: "Organization Type",
  address: "Address",
  state: "State",
  city: "City",
  zipcode: "Zip code",
  county: "County",
  firstName: "Contact First Name",
  lastName: "Contact Last Name",
};

class NewOrg extends Component {
  state = {
    errorMessage: ""
  };

  handleTypeChange = input => {
    this.props.form.type = input;
  };

  handleCityChange = input => {
    this.props.form.city = input;
  };

  handleOnChange = email => {
    // let email = this.props.form.creatorEmail;
    if (email === "") {
      return false;
    } else {
      return !email.includes("@");
    }
  };

  handleRequirements = () => {
    let errorFields = requiredFields.filter(field =>
      _.isEmpty(this.props.form[field])
    );

    // no errors
    if (_.isEmpty(errorFields)) {
      this.props.onNext();
    } else {
      // errors = error messages
      let prettyErrors = errorFields.map(field => {
        return prettyNames[field];
      });

      let errors =
        "The following fields cannot be empty: " + _.join(prettyErrors, ", ");
      alert(errors);

      this.setState({
        errorMessage: errors
      });
    }
  };

  render() {
    return (
      <div>
        <h2 className="pageTitle">Add Your Organization</h2>
        <div className="addOrg">
          <Form>
            <h5 className="formTitle">Organization Information</h5>
            <FormGroup>
              <Label>Name *</Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter text"
                value={this.props.form.name}
                onChange={this.props.onChange}
              />
            </FormGroup>
            <div className="formTypes">
              <h6>Organization Category *</h6>
              <Select
                defaultValue={this.props.form.type}
                options={types}
                isMulti
                onChange={this.handleTypeChange}
              />
            </div>

            <FormGroup>
              <Label>Mission Statement</Label>
              <Input
                type="text"
                name="mission"
                placeholder="Enter text"
                value={this.props.form.mission}
                onChange={this.props.onChange}
              />
            </FormGroup>
            <Row form>
              <Col md={10}>
                <FormGroup>
                  <Label>Address *</Label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="e.g. 1234 Main St."
                    value={this.props.form.address}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>

              <Col md={2}>
                <FormGroup>
                  <Label>State *</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="e.g. WA"
                    value={this.props.form.state}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>City *</Label>
                  <Select
                    onChange={this.handleCityChange}
                    options={cities}
                    placeholder="Select..."
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Zip Code *</Label>
                  <Input
                    type="text"
                    name="zip"
                    placeholder="e.g. 98105"
                    value={this.props.form.zip}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>County *</Label>
                  <Input
                    type="text"
                    name="county"
                    placeholder="e.g. King"
                    value={this.props.form.county}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Organization Contact</h5>
            <h3 className="subtitle">
              This information will be used to confirm any changes in the
              organization details
            </h3>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>First Name *</Label>
                  <Input
                    type="text"
                    name="contactFName"
                    placeholder="Enter text"
                    value={this.props.form.contactFName}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Last Name *</Label>
                  <Input
                    type="text"
                    name="contactLName"
                    placeholder="Enter text"
                    value={this.props.form.contactLName}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Role *</Label>
                  <Input
                    type="text"
                    name="contactRole"
                    placeholder="Enter text"
                    value={this.props.form.contactRole}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Phone *</Label>
                  <Input
                    type="text"
                    name="contactPhone"
                    placeholder="e.g. (123)-456-7890"
                    value={this.props.form.contactPhone}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Email *</Label>
                  <Input
                    invalid={this.handleOnChange(this.props.form.contactEmail)}
                    type="email"
                    name="contactEmail"
                    placeholder="Enter email"
                    value={this.props.form.contactEmail}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <h5 className="formTitle">Additional Information</h5>
            <FormGroup>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                placeholder="Enter URL"
                value={this.props.form.website}
                onChange={this.props.onChange}
              />
            </FormGroup>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label>Twitter</Label>
                  <Input
                    type="text"
                    name="twitter"
                    placeholder="Enter handle"
                    value={this.props.form.twitter}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Facebook</Label>
                  <Input
                    type="text"
                    name="facebook"
                    placeholder="Enter URL"
                    value={this.props.form.facebook}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Instagram</Label>
                  <Input
                    type="text"
                    name="instagram"
                    placeholder="Enter username"
                    value={this.props.form.instagram}
                    onChange={this.props.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="formButton">
          <Button
            variant="primary"
            type="submit"
            value="1"
            onClick={this.handleRequirements}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

NewOrg.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default NewOrg;
