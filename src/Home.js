import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import "mdbreact/dist/css/style.css";
import { Parallax } from "react-parallax";
import "./css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendar,
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Row,
  Col,
} from "reactstrap";
export class Home extends Component {
  render() {
    return (
      <div className="homeBody">
        <div className="parallax">
          <Parallax
            // blur={{ min: -15, max: 30 }}
            bgImage={require("./img/CoverPhotosTealBlur.jpg")}
            bgImageAlt="collective pictures of the community"
            strength={600}
            style={{ minHeight: "700px", maxHeight: "700px", width: "100%" }}
          >
            {/* <div className="bannerBox"> */}
            {/* <p className="bannerContent">
              Aligning organizations in the fight to end homelessness in King
              County
            </p> */}
            <p className="bannerContent">SEATTLE FOR ALL</p>
            {/* </div> */}
            <div className="scroll-down" />
          </Parallax>
        </div>
        <br/>
        {/* <h1 className="homeTitle">Home Project Calendar</h1> */}
        <p className="homeAbstract">
          Within King County alone, there are an estimated 12,000 people who are
          experiencing homelessness. This is becoming a prominent issue in the
          King County region to the point where the community has become
          inspired to make a change. Nonprofits, local businesses and other
          partner leaders have taken a stance on the fight to end homelessness.
          <br />
          <br />
          With overwhelming momentum and support from the community, the Home
          Project was initiated to help increase coordination, clarity and
          alignment between those leading the work while also engaging the
          general public in taking action towards the path to ending
          homelessness in King County.
        </p>
        <p className="homePurpose">
          There is a need for a coordinated entity to support alignment between
          those leading the fight to end homelessness in our community.
        </p>
        {/* DEAFUALT TEXT HERE, NEED TO EDIT!!! */}
        <p className="homeAbstract">
          We believe there is strength is numbers. Through this calendar resource, we encourage 
          organizations to join forces to increase their impact for this cause 
          and allow the general public to gain visibility on their missions and efforts.
        </p>
        <p className ="homeLiner">
          We can spark this impact with 3 simple steps:
        </p>
        <CardGroup className="homeFeatures">
          <Card className="feature">
            <CardTitle><FontAwesomeIcon className = "icon" icon={faCalendar}/></CardTitle>
            <CardTitle className="highlightFeature">Share </CardTitle> Post events directly on
            the site and increase visibility to other organizations and
            community members
          </Card>
          <Card className="feature">
          <CardTitle><FontAwesomeIcon className = "icon" icon={faSearch} /></CardTitle>
            <CardTitle className="highlightFeature">Discover </CardTitle> Search the calendar
            for opportunities to get involved and work with other organizations
            based on service area and purpose
           
          </Card>
          <Card className="feature">
          <CardTitle><FontAwesomeIcon className = "icon" icon={faHandsHelping}/></CardTitle>
            <CardTitle className="highlightFeature">Collaborate </CardTitle> Align missions and
            efforts in order to minimize resource waste and maximize reach and
            impact
          </Card>
        </CardGroup>
      </div>
    );
  }
}
