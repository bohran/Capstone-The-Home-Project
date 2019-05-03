import React, { Component } from 'react';
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';
// import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";


import './css/Home.css';
import { Contact } from './Contact';
import { About } from './About';



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
            <h1 style ={{fontSize: '6.5rem', fontWeight:'bold'}}>The Home Project</h1>
            <h2>An Engagement and Advocacy Initiative with One Goal:</h2>
            <h2>A Home for Everyone in King County</h2>
            <br/>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('./img/tent.jpg')}
                strength={1000}>
            <div style={{ height: '500px' }} />
            </Parallax>
            <h1 style ={{fontSize: '4rem', fontWeight:'bold'}} id='#aboutus'>About Us</h1>
            <h3>People across our region are frustrated that so many King County residents are experiencing homelessness, and are concerned that progress is not happening quickly enough, at a large enough scale.</h3>

<h3>We know that homelessness in King County is solvable.</h3>
<h3>And, to solve this problem, the whole community must be invested in understanding its causes and supporting its solutions.</h3>
<h3>How we talk about these issues matters. Together, by building common understanding about who is experiencing homelessness, why, and what we can do about it, 
    we can foster unity and community support for our shared path forward.</h3> <br/>
    <div>
        <h3>Learn more about how you can help via our Messaging Toolkits:</h3>
        <Button href = 'https://drive.google.com/drive/folders/1S2roKWt-aGCMwJwjUvboZDna0C8TG-z0'>Toolkits</Button>
    </div>
    <div>
        {About}
    </div>
</div>)
    }
}