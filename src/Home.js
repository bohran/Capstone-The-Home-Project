import React, { Component } from 'react';
import { Navbar, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, NavbarBrand } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Organization } from './AddOrganizationForm';
// import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, Background } from 'react-parallax';

import './css/Home.css';



export class Home extends Component {
    render() {
        return (<div className="homeBody">
            <Parallax
                blur={7}
                bgImage={require('./img/Seattle-WA.jpg')}
                strength={1000}>
                <h1 style={{ color: "white" , marginTop: "100px", fontSize: "150px", color: "#fafaed"}}>#SeattleForAll</h1>
                <div style={{ height: '300px' }} />
            </Parallax>
            <h1 style ={{fontSize: '100px', fontWeight:'bold'}}>The Home Project</h1>
            <h2>An Engagement and Advocacy Initiative with One Goal:</h2>
            <h2>A Home for Everyone in King County</h2>
            <br/>
            {/* <h1 style = {{textTransform:"uppercase"}}>Through the Home Shows, we came together as a one community to fight homelessness.</h1> */}
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('./img/tent.jpg')}
                strength={1000}>
            <div style={{ height: '500px' }} />
            </Parallax>
            <h1>About Us</h1>
        </div>)
    }
}