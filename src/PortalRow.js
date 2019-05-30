import React from "react";

export default class PortalRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = "https://api.emmaropes.me/unapprovedevents";
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
                for (let event of data) {
                    console.log(event.county);
                    let table = document.getElementById("table");
                    let row = document.createElement("tr");
                    let id = document.createElement("th");
                    id.scope = "row";
                    let organization = document.createElement("td");
                    let name = document.createElement("td");
                    let type = document.createElement("td");
                    let service = document.createElement("td");
                    let date = document.createElement("td");
                    let city = document.createElement("td");
                    let button = document.createElement("button");
                    let approveButton = document.createElement("button");
                    approveButton.innerHTML = "Approve";
                    //button = createModal(event, button);
                    button.addEventListener("click", () => {
                        console.log("clicked");
                    });
                    approveButton.addEventListener("click", () => {
                        let url = "https://api.emmaropes.me/events/approve/" + event.id;
                        console.log(url);
                        fetch(url, {
                          method: "PATCH"
                        })
                          .then(response => {
                            console.log(response.status);
                            if(response.ok) {
                                // NEED PAGE TO REFRESH
                            }
                          })
                    });
                    id.textContent = event.id;
                    if (event.organizations != null && event.organizations.length > 0) {
                        organization.textContent = event.organizations[0];
                    }
                    name.textContent = event.eventName;
                    type.textContent = event.categoryName;
                    if (event.services != null && event.services.length > 0) {
                        service.textContent = event.services[0];
                    }
                    let dateText = new Date(event.date);
                    console.log(dateText);
                    date.textContent = dateText.toLocaleString();
                    city.textContent = event.city;
                    row.appendChild(id);
                    row.appendChild(organization);
                    row.appendChild(name);
                    row.appendChild(type);
                    row.appendChild(service);
                    row.appendChild(date);
                    row.appendChild(city);
                    row.appendChild(approveButton);
                    //row.appendChild(button);
                    table.appendChild(row);
                }
            }
        }
    }

    render () {
        console.log(this.state.data)
        this.renderTable(this.state.data)
        return (
            <tbody>

            </tbody>
        )
    }
}