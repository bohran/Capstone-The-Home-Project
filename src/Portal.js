import React, { Component } from "react";
import PortalRow from "./PortalRow";
import PortalRowOrg from "./PortalRowOrg";

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
    }


    render() {
        console.log(this.state.data);
        return (
            <div>
                <div class="alert alert-danger d-none" id="error-alert"></div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">The Home Project Portal</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <button class="btn btn-outline-success my-2 my-sm-0 float-right" type="signout">Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <div class="container" id="eventcontainer">
                        <h1>Events To Approve</h1>
                        <table class="table table-hover" id="table">
                            <thead>
                                <tr>
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
                            {/* <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>City of Seattle</td>
                                <td>Save the City!</td>
                                <td>Activism</td>
                                <td>Housing/Shelter</td>
                                <td>June 1st, 2019</td>
                                <td>Seattle</td>
                                <td>
                                    <div class="btn">
                                        <button id="learnMoreButton" type="button" class="btn btn-dark" data-toggle="modal"
                                            data-target="#myModalLong">
                                            Learn More
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody> */}
                            <PortalRow />
                        </table>
                        <button type="submit" class="btn btn-primary" id="approveEventsButton">Approve Selected</button>
                    </div>
                    <div class="container" id="orgcontainer">
                        <h1>Organizations To Approve</h1>
                        <table class="table table-hover" id="orgTable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Organization Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Street Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Select</th>
                                </tr>
                            </thead>
                            <PortalRowOrg/>

                        </table>
                        <button type="submit" class="btn btn-primary" id="approveButton">Approve Selected</button>
                        <button type="submit" class="btn btn-primary" id="deleteButton">Deny Selected</button>
                    </div>
                </div>
            </div>

        );
    }
}