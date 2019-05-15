import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import "mdbreact/dist/css/style.css";
// import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from "react-parallax";
import { Button } from "reactstrap";

import "./css/Home.css";
import { About } from "./About";

// TALK WITH EMMA ABOUT STORING THE EVENT IN A DUMMY TABLE UNTIL APPROVED BY PYRAMID

export class Home extends Component {
  render() {
    return (
      <div className="homeBody">
        {/* <Parallax */}
        {/* blur={7}
        bgImage={require("./img/Seattle-WA.jpg")}
        strength={1000} */}
        {/* > */}
        {/* <h1 style={{ color: "white" , marginTop: "100px", fontSize: "150px", color: "#fafaed"}}>#SeattleForAll</h1> */}
        {/* <div style={{ height: "200px" }} /> */}
        {/* </Parallax> */}
        {/* <div className="contentBox"> */}
        {/* <h1 className="parallaxTitle">
            #SeattleForAll
          </h1> */}
        {/* <h1 style ={{fontSize: '6.5rem', fontWeight:'bold'}}>The Home Project</h1>
            <h2>An Engagement and Advocacy Initiative with One Goal:</h2>
            <h2>A Home for Everyone in King County</h2> */}
        {/* </div> */}
        <Parallax
          //   blur={{ min: -15, max: 15 }}
          bgImage={require("./img/CoverPhoto2BWY.png")}
          bgImageAlt="collective pictures of the community"
          strength={500}
          style={{ minHeight: "750px", maxHeight:"750px", width: "100%" }}
          >
         <div className = "bannerTitle" style={{marginTop:"15%", fontWeight: "lighter",textShadow: "0 0 100px rgba(0,0,0,500)"}}>#SeattleForAll</div>
         {/* <div className = "bannerTitle" style={{marginTop:"15%", color: "black"}}>#SeattleForAll</div> */}

          {/* <div style={{ minHeight: "600px", maxHeight:"600px", width: "100%" }} /> */}
        </Parallax>
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
            <Button href="https://drive.google.com/drive/folders/1S2roKWt-aGCMwJwjUvboZDna0C8TG-z0">
              Toolkits
            </Button>
          </div>
          <div />
        </div>
      </div>
    );
  }
}
