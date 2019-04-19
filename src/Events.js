import React, { Component } from "react";
import { AddEvent } from './AddEventForm';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import './css/Events.css';

export class Events extends Component{
    render(){
        return(
            <div>
                <button className = "button">
                <Link className = "buttonText" to="/AddEvent">+Add Event</Link>
                </button>
            </div>
        )
    }
}