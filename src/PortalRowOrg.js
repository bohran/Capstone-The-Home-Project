import React from "react";

export default class PortalRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = "https://api.emmaropes.me/organizations";
        let req = new Request(url);
        fetch(req)
            .then(response => {
                return response.json();
            })
            .then(results => {
                this.setState({
                    data: results
                });
            });
        window.scrollTo(0, 0);
    }

    renderTable(data) {
        console.log(this.state.data)
        if (data.length > 0) {
            if (data.length > 0) {
                for (let org of data) {
                    let table = document.getElementById("orgTable");
                    let row = document.createElement("tr");
                    let id = document.createElement("th");
                    id.scope = "row";
                    let organization = document.createElement("td");
                    let state = document.createElement("td");
                    let descr = document.createElement("td");
                    let address = document.createElement("td");
                    let city = document.createElement("td");
                    let url = document.createElement("td");
                    let button = document.createElement("button");
                    let approveButton = document.createElement("button");
                    approveButton.innerHTML = "Approve";
                    //button = createModal(event, button);
                    button.addEventListener("click", () => {
                        console.log("clicked");
                    });
                    approveButton.addEventListener("click", () => {
                        let url = "https://api.emmaropes.me/events/approve/" + org.id;
                        console.log(url);
                        fetch(url, {
                            method: "PATCH"
                        })
                            .then(response => {
                                console.log(response.status);
                                if (response.ok) {
                                    // NEED PAGE TO REFRESH
                                }
                            })
                    });
                    id.textContent = org.id;
                    organization.textContent = org.organizationName;

                    state.textContent = org.state;
                    url.textContent = org.url;
                    descr.textContent = org.organizationDescription;
                    address.textContent = org.address;
                    city.textContent = org.city;
                    row.appendChild(id);
                    row.appendChild(organization);
                    row.appendChild(descr);
                    row.appendChild(url);
                    row.appendChild(address);
                    row.appendChild(city);
                    row.appendChild(state);
                    row.appendChild(approveButton);
                    //row.appendChild(button);
                    table.appendChild(row);
                }
            }
        }
    }

    render() {
        console.log(this.state.data)
        this.renderTable(this.state.data)
        return (
            <tbody>

            </tbody>
        )
    }
}