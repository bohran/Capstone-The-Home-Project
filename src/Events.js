import React, { Component } from "react";
import { AddEvent } from './AddEventForm';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, CardDeck, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NationalGeographicAPI } from 'national-geographic-api';

import DatePicker from 'react-datepicker';

import './css/Events.css';

export class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: [], 
            value: 0,
            previous: 0,
            title: this.props.title,
            description: this.props.description

            //   dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
        console.log(this.state.modal)

    }
    // API from NewsAPI (headlines from National Geog)
    componentDidMount() {
        let url = 'https://newsapi.org/v2/everything?' +
            'sources=national-geographic&' +
            'apiKey=de4895b190034f1897ca47779c016325';
        let req = new Request(url);
        fetch(req)
            .then(response => {
                return response.json();
            }).then(results => {
                this.setState({ data: results.articles });
                console.log(results.articles);
                console.log(this.state.data)

            })
    }
    render() {
        const content = this.state.data.map((d, i) => {
            let imageSrc = d.urlToImage;
            console.log(imageSrc)
            if (d.urlToImage == null) {
                imageSrc = <br />;
            } else {
                imageSrc = <div className='image'>
                    <CardImg size='cover' src={imageSrc} display="block" alt={d.title} />
                </div>
            };
            return (
                <div className="events" key={"event" + i}>
                                <Card>
                                    <div className="image">
                                        <CardImg src={d.urlToImage} style={{width: '100%'}} />
                                        <CardBody>
                                            <CardTitle>{d.title}</CardTitle>
                                            <CardSubtitle>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {d.description}
                                            </CardSubtitle>
                                            <CardSubtitle>
                                                <FontAwesomeIcon icon={faClock} /> 6:00-8:30PM
                                            </CardSubtitle>
                                            <CardSubtitle>
                                                <FontAwesomeIcon icon={faCalendar} />{d.publishedAt}
                                            </CardSubtitle>
                                            <Button onClick={this.toggle}>Learn More</Button>
                                            <Modal key ={i} isOpen={this.state.modal} toggle={this.toggle}>
                                                <ModalHeader>{this.props.title}</ModalHeader>
                                                <ModalBody> {this.props.description}</ModalBody>
                                                <Button color="primary" onClick={this.toggle}>Close</Button>
                                            </Modal>
                                        </CardBody>
                                    </div>
                                </Card>
                    </div>
                );
            });
     return(
        <div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>Events that match your search:</h2>
        <div className="add">
            <Button tag={Link} to="/AddEvent">+ Add Event</Button>
        </div>
        <Nav vertical className="sidebar">
            <div className="categories">
                <h3>Select an Action:</h3>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Give
            </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Learn
            </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Volunteer
            </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Activism
            </Label>
                </FormGroup>
            </div>
            <div className="filters">
                <h3>Select Area of Service:</h3>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="check1" />{' '}
                        Housing/Shelter
                </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="check1" />{' '}
                        Legal/Employment
                </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="check1" />{' '}
                        Day Centers
                </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="check1" />{' '}
                        Basic Needs
                </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="radio1" />{' '}
                        Health/Wellness
                </Label>
                </FormGroup>
                <div className="location">
                    <h3>Select Location:</h3>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Choose Option
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>All</DropdownItem>
                    <DropdownItem>Seattle</DropdownItem>
                    <DropdownItem>Bellevue</DropdownItem>
                    <DropdownItem>Renton</DropdownItem>
                    <DropdownItem>Burien</DropdownItem>
                    <DropdownItem>Kirkland</DropdownItem>
                    <DropdownItem>Lakewood</DropdownItem>
                    <DropdownItem>Everett</DropdownItem>
                    <DropdownItem>Tacoma</DropdownItem>
                    <DropdownItem>Olympia</DropdownItem>
                    <DropdownItem>Bothell</DropdownItem>
                    <DropdownItem>Renton</DropdownItem>
                    <DropdownItem>Kent</DropdownItem>
                   </DropdownMenu>
            </Dropdown> 
                </div>
                <div className="date">
                    <h3>Select Date:</h3>
                     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Choose Option
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>Today</DropdownItem>
                    <DropdownItem>Tomorrow</DropdownItem>
                    <DropdownItem>This Week</DropdownItem>
                    <DropdownItem>This Weekend</DropdownItem>
                    <DropdownItem>Next Week</DropdownItem>
                    <DropdownItem>Next Weekend</DropdownItem>
                    <DropdownItem>This Month</DropdownItem>
                   </DropdownMenu>
            </Dropdown>                    
                     <FormGroup>
            <Input type="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Input>
            </FormGroup> 
                </div>
            </div>
        </Nav>
        <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', flexBasis:1, marginLeft:'50px'}}>
            {content}
        </div>
        </div>
     )
    }
}

