import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import "mdbreact/dist/css/style.css";
// import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from "react-parallax";

import "./css/Home.css";

// TALK WITH EMMA ABOUT STORING THE EVENT IN A DUMMY TABLE UNTIL APPROVED BY PYRAMID

export class Home extends Component {
  render() {
    return (
      <div className="homeBody">
        <Parallax
          //   blur={{ min: -15, max: 15 }}
          bgImage={require("./img/CoverPhotoBW.png")}
          bgImageAlt="collective pictures of the community"
          strength={400}
          style={{ minHeight: "700px", maxHeight: "700px", width: "100%" }}

        >
          <div class="scroll-down" style={{margin:'30%', bottom: '50%', top:'70%'}}></div>


          <div className="bannerBox">
            <p className="bannerContent">
              Aligning organizations in the fight to end homelessness in King
              County
            </p>
          </div>
        </Parallax>

        <h1 className="homeTitle">Home Project Calendar</h1>
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
          With overwhelming momentum and support from the community, the Home
          Project was initiated to help increase coordination, clarity and
          alignment between those leading the work while also engaging the
          general public in taking action towards the path to ending
          homelessness in King County.
        </p>
        <div className="homeFeatures">
          <p className="feature">
            <p className="highlightFeature">Share </p> Post events directly on
            the site and increase visibility to other organizations and
            community members
          </p>
          <p className="feature">
            <p className="highlightFeature">Discover </p> Search the calendar
            for opportunities to get involved and work with other organizations
            based on service area and purpose
          </p>
          <p className="feature">
            <p className="highlightFeature">Collaborate </p> Align missions and
            efforts in order to minimize resource waste and maximize reach and
            impact
          </p>
        </div>
      </div>
    );
  }
}
