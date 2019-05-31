import React from "react";

export default class PortalRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedEvents: []
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
                    let submit = document.getElementById("approveEventsButton");
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
                    let form = document.createElement("div");
                    form.classList.add("form-check");
                    let input = document.createElement("input");
                    input.type = "checkbox";
                    input.classList.add("form-check-input");
                    form.appendChild(input);
                    input.addEventListener("change", () => {
                        if (!this.state.selectedEvents.includes(event.id)) {
                            this.state.selectedEvents.push(event.id);
                        } else {
                            let index = this.state.selectedEvents.indexOf(event.id)
                            this.state.selectedEvents.splice(index, 1);
                        }
                        console.log(this.state.selectedEvents);
                    });
                    //button = createModal(event, button);
                    button.addEventListener("click", () => {
                        console.log("clicked");
                    });
                    submit.addEventListener("click", () => {
                        for (let id of this.state.selectedEvents) {
                            let url = "https://api.emmaropes.me/events/approve/" + id;
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
                        }
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
                    row.appendChild(form);
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