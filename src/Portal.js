import React, { Component } from "react";
import PortalRow from "./PortalRow";
import PortalRowOrg from "./PortalRowOrg";
import PortalRowAll from "./PortalRowAll";
import PortalRowAllOrgs from "./PortalRowAllOrgs";
import "./css/Portal.css";

export class Portal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        window.scrollTo(0, 0);
        if (window.localStorage.getItem("sessionID") === null && window.localStorage.getItem("sessionID") === undefined) {
            let signInDiv = document.getElementById("signInDiv");
            signInDiv.style.display = "block";
            let div = document.getElementById("wholeDiv");
            div.style.display = "none";
        } else if (window.localStorage.getItem("sessionID") !== null) {
            let signInDiv = document.getElementById("signInDiv");
            signInDiv.style.display = "none";
            let div = document.getElementById("wholeDiv");
            div.style.display = "block";
        }
    }

    handleSignIn() {
        this.setState({ working: true, errorMessage: undefined });
        var credentials = {};
        credentials.email = document.getElementById("inputEmail").value;
        let em = document.getElementById("inputEmail");

        console.log(credentials.email);
        let pass = document.getElementById("inputPassword");

        credentials.password = document.getElementById("inputPassword").value;

        fetch("https://api.seattleforallkc.com/sessions", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem("sessionID")
            })
        }).then(function (response) {
            if (response.status < 300) {
                window.localStorage.setItem("sessionID", response.headers.get("Authorization"));
                console.log(response.headers.get("Authorization"));

                return response.json();
            }
            return response.text().then((t) => Promise.reject(t))
        }).then(function () {
            window.location.reload(true);
            em.value = "";
            pass.value = "";
            let signInDiv = document.getElementById("signInDiv");
            signInDiv.style.display = "none";
            let div = document.getElementById("wholeDiv");
            div.style.display = "block";
        })
            .catch(function (error) {
                alert(error);
            });
    }

    seeAll() {
        let div = document.getElementById("portalAllContainer");
        div.style.display = "block";
        let div2 = document.getElementById("portalContainer");
        div2.style.display = "none";
    }
    seeToBeApproved() {
        let div = document.getElementById("portalAllContainer");
        div.style.display = "none";
        let div2 = document.getElementById("portalContainer");
        div2.style.display = "block";
    }

    handleSignOut() {
        fetch("https://api.seattleforallkc.com/sessions/mine", {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': window.localStorage.getItem("sessionID")
            })
        }).then(function (response) {
            if (response.status < 300) {
                window.localStorage.removeItem("sessionID")
                return null;
            }
            return response.text().then((t) => Promise.reject(t));
        }).then(function () {
            let signInDiv = document.getElementById("signInDiv");
            signInDiv.style.display = "block";
            let div = document.getElementById("wholeDiv");
            div.style.display = "none";
            let div2 = document.getElementById("portalAllContainer");
            div2.style.display = "none";
            window.location.reload(true);
        }).catch(function (error) {
            alert(error);
        });
    }


    render() {
        console.log(this.state.data);

        return (
            <div>
                <div id="portalContainer">
                    <div class="alert alert-danger d-none" id="error-alert"></div>
                    <div id="signInDiv">

                        <form onSubmit={evt => this.handleSignIn(evt)}>
                            <div className="form-group">
                                <h1>Sign In</h1>
                                <label htmlFor="email">Email</label>
                                <input id="inputEmail" type="email" className="form-control"
                                    placeholder="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="inputPassword" type="password" className="form-control"
                                    placeholder="password"
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn" onClick={() => this.handleSignIn()}>
                                    Sign In
                        </button>
                            </div>

                        </form>


                    </div>
                    <div className="container" style={{ display: 'none' }} id="wholeDiv">
                        <div className="buttons">
                            <button type="submit" className="btn" onClick={() => this.seeAll()}>
                                See All Approved
                            </button>
                            <button type="submit" className="btn" onClick={() => this.handleSignOut()}>
                                Sign Out
                            </button>
                        </div>
                        <div className="container">
                            <div class="container" id="orgcontainer">
                                <h1>Organizations To Approve</h1>
                                <table class="table table-hover" id="orgTable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Select</th>
                                            <th scope="col">#</th>
                                            <th scope="col">Organization Name</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Website</th>
                                            <th scope="col">Street Address</th>
                                            <th scope="col">City</th>
                                            <th scope="col">State</th>
                                            <th scope="col">Details</th>
                                        </tr>
                                    </thead>
                                    <PortalRowOrg />
                                </table>
                                <button type="submit" class="btn" id="approveButton">Approve</button>
                                <button type="submit" class="btn" id="deleteOrgButton">Deny</button>
                            
                            <h1>Events To Approve</h1>
                            <table class="table table-hover" id="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Select</th>
                                        <th scope="col">#</th>
                                        <th scope="col">Organization</th>
                                        <th scope="col">Event Title</th>
                                        <th scope="col">Event Type</th>
                                        <th scope="col">Area of Service</th>
                                        <th scope="col">Event Date</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <PortalRow />
                            </table>
                            <button type="submit" class="btn" id="approveEventsButton">Approve</button>
                            <button type="submit" class="btn" id="deleteEventButton">Deny</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="modalM" className="modal" style={{
                    display: 'none',
                    position: "fixed",
                    zIndex: 1,
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    maxHeight: "100%",
                    overflow: "auto",
                    backgroundColor: "rgb(0,0,0)",
                    backgroundColor: "rgba(0,0,0,0.4)"
                }}>
                    <div style={{
                        backgroundColor: "#fefefe",
                        margin: "15% auto",
                        padding: 20,
                        border: "1px solid #888",
                        width: "90%"
                    }}>
                        <span className="close" style={{
                            color: 'aaa',
                            float: 'right',
                            fontSize: 28,
                            fontWeight: 'bold'
                        }}>&times;</span>
                        <div id="modalBody">
                        </div>
                    </div>
                </div>
                <div id="portalAllContainer" style={{ display: 'none' }}>
                    <div class="alert alert-danger d-none" id="error-alert"></div>
                    <div>

                    </div>
                    <div>
                        <div class="container" id="allEventContainer">
                            <div className="buttons">
                                <button type="submit" className="btn" onClick={() => this.seeToBeApproved()}>
                                    See To Be Approved
                        </button>
                                <button type="submit" className="btn" onClick={() => this.handleSignOut()}>
                                    Sign Out
                        </button>
                            </div>
                            <h1>All Events</h1>
                            <table class="table table-hover" id="allEventTable">
                                <thead>
                                    <tr>
                                        <th scope="col">Select</th>
                                        <th scope="col">#</th>
                                        <th scope="col">Organization Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">Street Address</th>
                                        <th scope="col">City</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <PortalRowAll />
                            </table>
                            <button type="submit" class="btn" id="deleteAllEventButton">Delete</button>
                        </div>
                    </div>
                    <div>
                        <div class="container" id="allOrgContainer">
                            <h1>All Orgs</h1>
                            <table class="table table-hover" id="allOrgTable">
                                <thead>
                                    <tr>
                                        <th scope="col">Select</th>
                                        <th scope="col">#</th>
                                        <th scope="col">Organization Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">Street Address</th>
                                        <th scope="col">City</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <PortalRowAllOrgs />
                            </table>
                            <button type="submit" class="btn" id="deleteAllOrgButton">Delete</button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}