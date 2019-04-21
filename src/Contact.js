import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

export class Contact extends Component {
  render() {
    return (<div>
        <h2 className="contactPageTitle">Contact Us</h2>
        <div class="formContainer">
            <div class="contactName">
            Pyramid Communications
            </div>
            <div class="contactInfo">
            info@pyramidcommunications.com
            </div>
            <div class="contactInfo">
            206.374.7788
            </div>
            <div class="contactInfo">
            1932 First Avenue Suite 507, Seattle, WA 98101  
            </div>
        </div>
        <h2 className="contactPageTitle">Our Creators</h2>
        <div class="membersContainer">
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
        </div>
    );
  }
}

