import React, { Component } from "react";
import PortalRowAll from "./PortalRowAll";
import PortalRowAllOrgs from "./PortalRowAllOrgs";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./css/Portal.css";

export class PortalAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        window.scrollTo(0, 0);
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
        }).catch(function (error) {
            alert(error);
        });
    }

    render() {
        console.log(this.state.data);

        return (
            <div>
                <div class="alert alert-danger d-none" id="error-alert"></div>
                <div>

                </div>
                <div>
                    <div class="container" id="allEventContainer">
                    <Button tag={Link} to="/Portal">
              See to be Approved
            </Button>
            <button type="submit" className="btn" onClick={() => this.handleSignOut()}>
                                    Sign Out
                        </button>
                        <h1>All Events</h1>
                        <table class="table table-hover" id="allEventTable">
                            <thead>
                                <tr>
                                    <th scope="col">Select</th>
                                    <th scope="col">#</th>
                                    <th scope="col">Organization Name</th>
                                    <th scope="col">Event Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Service Area</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                                <PortalRowAll/>
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
            </div>

        );
    }
}