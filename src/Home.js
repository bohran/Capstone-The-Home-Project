import React, { Component } from 'react';
import { Navbar, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, NavbarBrand } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Organization } from './Organization';
import './Home.css';

export class Home extends Component {
    render() {
        return (<div>
            <h1>#SeattleForAll</h1>
        </div>)
    }
}