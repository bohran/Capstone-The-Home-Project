import React from "react";

export default class PortalRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedOrgs: []
        }
    }

    componentDidMount() {
        let url = "https://api.emmaropes.me/unapprovedorgs";
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

    handleCheck() {

    }

    handleApprove() {

    }

    handleDelete() {

    }

    renderTable(data) {
        console.log(this.state.data)
        if (data.length > 0) {
            if (data.length > 0) {
                for (let org of data) {
                    let submit = document.getElementById("approveButton");
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
                    let form = document.createElement("div");
                    form.classList.add("form-check");
                    let input = document.createElement("input");
                    input.type = "checkbox";
                    input.classList.add("form-check-input");
                    form.appendChild(input);
                    // onChange={this.handleSelect}
                    // input.onchange = this.state.selectedOrgs.push(org.id)
                    button.addEventListener("click", () => {
                        console.log("clicked");
                    });
                    input.addEventListener("change", () => {
                        if (!this.state.selectedOrgs.includes(org.id)) {
                            this.state.selectedOrgs.push(org.id);
                        } else {
                            let index = this.state.selectedOrgs.indexOf(org.id)
                            this.state.selectedOrgs.splice(index, 1);
                        }
                    });
                    submit.addEventListener("click", () => {
                        for (let id of this.state.selectedOrgs) {
                            let url = "https://api.emmaropes.me/organizations/" + id;
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
                    // row.appendChild(approveButton);
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