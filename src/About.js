import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./css/Events.css";


export class About extends Component {
  render() {
    return (<div>
        
        
        <h2 className="contactPageTitle">Our Creators</h2>
            <Row>
                <div class="col-lg-3 col-sm-6 text-center mb-4">
                    <img class="rounded-circle img-fluid d-block mx-auto w-75" src="./img/shannon.jpg" alt="Portrait of Shannon Gatta"/>
                    <h3>Shannon Gatta </h3>
                    <h3><small>Data Scientist</small></h3>
                    <p id="email">sgatta@uw.edu</p>
                </div>
            <div class="col-lg-3 col-sm-6 text-center mb-4">
                <img class="rounded-circle img-fluid d-block mx-auto w-75" src="./img/esha.jpg"/>
                <h3>Esha More</h3>
                <h3><small>UX Designer</small></h3>
                <p id="email">moree@uw.edu </p> 
            </div>
            <div class="col-lg-3 col-sm-6 text-center mb-4">
                    <img class="rounded-circle img-fluid d-block mx-auto w-75" src="./img/emma.jpeg" alt="Portrait of Emma Ropes"/>
                    <h3>Emma Ropes</h3>
                    <h3><small>Web Developer</small></h3>
                    <p id="email">eropes@uw.edu </p> 
                </div>
            <div class="col-lg-3 col-sm-6 text-center mb-4">
                    <img class="rounded-circle img-fluid d-block mx-auto w-75" src="./img/nicole.jpg"/>
                    <h3>Nicole Bohra</h3>
                    <h3><small>Data Scientist</small></h3>
                    <p id="email">bohran@uw.edu</p>
                </div>
            </Row>
        </div>
    );
  }
}

