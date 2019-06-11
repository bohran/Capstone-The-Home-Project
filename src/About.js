import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Row } from "reactstrap";
import { Button } from "reactstrap";

import "./css/About.css";

export class About extends Component {
  render() {
    return (
      <div className="aboutBody">
        <div className="contentBox">
          <div
            className="aboutTitle"
            // style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            Seattle for All Calendar
          </div>
          <div className="slogan">
            An Engagement and Advocacy Initiative with One Goal: A Home for
            Everyone in King County
          </div>
          <img src="./img/AboutUsImage.png" alt="community" width="20%"/>
          <br />
          <div className="missionContent">
            People across our region are frustrated that so many King County
            residents are experiencing homelessness, and are concerned that
            progress is not happening quickly enough, at a large enough scale.
          </div>
          <div className="attention">
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
          </div>
        </div>
        <br/>
        <h2 className="aboutTitle">The Team</h2>
        <div className="slogan">
            A team of Informatics students at the University of Washington <br/> partnered with Pyramid Communications to bring this calendar resource to life.
          </div>
          <div className="imgContainer">
            <div className="aboutTeamImgs">
              <img
                className="teamPhotos"
                src="./img/shannonBW2.jpeg"
                alt="Portrait of Shannon Gatta"
              />
              <h6 className="photoTitles">Shannon Gatta </h6>
              <h3>
                <h6 className="memberTag">Front-End Developer</h6>
              </h3>
            </div>
            <div className="aboutTeamImgs">
              <img
                className="teamPhotos"
                src="./img/eshaBW2.jpeg"
                alt="Portrait of Esha More"
              />
              <h6 className="photoTitles">Esha More</h6>
              <h3>
                <h6 className="memberTag">Front-End Developer</h6>
              </h3>
            </div>
            <div className="aboutTeamImgs">
              <img
                className="teamPhotos"
                src="./img/emmaBW2.jpeg"
                alt="Portrait of Emma Ropes"
              />
              <h6 className="photoTitles">Emma Ropes</h6>
              <h3>
                <h6 className="memberTag">Back-End Developer</h6>
              </h3>
            </div>
            <div className="aboutTeamImgs">
              <img
                className="teamPhotos"
                src="./img/nicoleBW2.jpeg"
                alt="Portrait of Nicole Bohra"
              />
              <h6 className="photoTitles">Nicole Bohra</h6>
              <h3>
                <h6 className="memberTag">Front-End Developer</h6>
              </h3>
            </div>
          </div>
      </div>
    );
  }
}
