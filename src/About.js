import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";

import "./css/About.css";

export class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <div className="contentBox">
          <div className="missionTitle" style={{ fontSize: "40px", fontWeight: "bold" }}>
            The Home Project
          </div>
          <div className="slogan">
            An Engagement and Advocacy Initiative with One Goal: A Home for
            Everyone in King County
          </div>
          <br />
          <div className="missionContent">
            People across our region are frustrated that so many King County
            residents are experiencing homelessness, and are concerned that
            progress is not happening quickly enough, at a large enough scale.
          </div>
          <div className="attention">
            {/* WE KNOW THAT HOMELESSNESS IN KING COUNTY IS SOLVABLE. */}
            We know that homelessness in King County is solvable.
          </div>
          <div className="missionContent">
            And, to solve this problem, the whole community must be invested in
            understanding its causes and supporting its solutions.
          </div>
          <div className="missionContent">
            How we talk about these issues matters. Together, by building common
            understanding about who is experiencing homelessness, why, and what
            we can do about it, we can foster unity and community support for
            our shared path forward.
          </div>{" "}
          <br />
          <div>
            <div className="learnMore">
              Learn more about how you can help via our Messaging Toolkits:
            </div>
            <Button className="toolkitButton" href="https://drive.google.com/drive/folders/1S2roKWt-aGCMwJwjUvboZDna0C8TG-z0">
              Toolkits
            </Button>
          </div>
          <div />
        </div>
        <h2 className="contactPageTitle">Our Creators</h2>
        <Row>
          <div class="col-lg-3 col-sm-6 text-center mb-4">
            <img
              class="rounded-circle img-fluid d-block mx-auto w-50"
              src="./img/shannon.jpg"
              alt="Portrait of Shannon Gatta"
            />
            <h3>Shannon Gatta </h3>
            <h3>
              <small>Data Scientist</small>
            </h3>
            <p id="email">sgatta@uw.edu</p>
          </div>
          <div class="col-lg-3 col-sm-6 text-center mb-4">
            <img
              class="rounded-circle img-fluid d-block mx-auto w-50"
              src="./img/esha.jpg"
            />
            <h3>Esha More</h3>
            <h3>
              <small>UX Designer</small>
            </h3>
            <p id="email">moree@uw.edu </p>
          </div>
          <div class="col-lg-3 col-sm-6 text-center mb-4">
            <img
              class="rounded-circle img-fluid d-block mx-auto w-50"
              src="./img/emma.jpeg"
              alt="Portrait of Emma Ropes"
            />
            <h3>Emma Ropes</h3>
            <h3>
              <small>Web Developer</small>
            </h3>
            <p id="email">eropes@uw.edu </p>
          </div>
          <div class="col-lg-3 col-sm-6 text-center mb-4">
            <img
              class="rounded-circle img-fluid d-block mx-auto w-50"
              src="./img/nicole.jpg"
            />
            <h3>Nicole Bohra</h3>
            <h3>
              <small>Data Scientist</small>
            </h3>
            <p id="email">bohran@uw.edu</p>
          </div>
        </Row>
      </div>
    );
  }
}
