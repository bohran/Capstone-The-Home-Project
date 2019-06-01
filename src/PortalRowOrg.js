import React from "react";
import "./css/Portal.css";

export default class PortalRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedOrgs: [],
            render: false
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
                console.log(results);
                this.setState({
                    data: results
                });
            });
        window.scrollTo(0, 0);
    }

    // handleCheck() {

    // }

    // handleApprove() {

    // }

    // handleDelete() {

    // }

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
                    row.classList.add("tableRow");
                    let organization = document.createElement("td");
                    let state = document.createElement("td");
                    let descr = document.createElement("td");
                    let address = document.createElement("td");
                    let city = document.createElement("td");
                    let url = document.createElement("td");
                    let buttonDiv = document.createElement("td");
                    let button = document.createElement("button");
                    buttonDiv.appendChild(button);
                    button.innerHTML = "More";
                    button.classList = "btn-sm";
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

                                    }
                                })
                        }
                        // let index = this.state.data.indexOf(org);
                        // console.log(index);
                        // let newData = this.state.data;
                        // newData.splice(index, 1);
                        // this.setState(
                        //     {data:newData}
                        // )

                    });

                    // Modal Stuff

                    button.addEventListener("click", () => {


                        let modal = document.getElementById("modalM");

                        let body = document.getElementById("modalBody");
                        body.innerHTML = "";
                        let organizationName = document.createElement("p");
                        let description = document.createElement("p");
                        let fullAddress = document.createElement("p");
                        let urlText = document.createElement("p");
                        let zipcode = document.createElement("p");
                        let county = document.createElement("p");
                        let orgType = document.createElement("p");
                        let email = document.createElement("p");
                        let phone = document.createElement("p");
                        let firstName = document.createElement("p");
                        let role = document.createElement("p");
                        let fullAddressText = org.address + ", " + org.city + " " + org.state + ", " + org.zipcode;
                        zipcode.textContent = org.zipcode;
                        county.textContent = org.county;
                        email.textContent = org.email;
                        phone.textContent = org.phone;
                        let fullName = org.firstName + " " + org.lastName;
                        firstName.textContent = fullName;
                        organizationName.textContent = org.organizationName;

                        urlText.textContent = org.url;
                        description.textContent = org.organizationDescription;
                        fullAddress.textContent = fullAddressText;
                        body.appendChild(organizationName);
                        body.appendChild(description);
                        body.appendChild(fullAddress);
                        body.appendChild(urlText);
                        body.appendChild(firstName);


                        console.log("click row");
                        modal.style.display = "block";
                    });




                    id.textContent = org.id;
                    organization.textContent = org.organizationName;

                    state.textContent = org.state;
                    url.textContent = org.url;
                    descr.textContent = org.organizationDescription;
                    address.textContent = org.address;
                    city.textContent = org.city;
                    form.style.display = "inline-block";
                    input.style.margin = "auto";
                    row.appendChild(form);
                    row.appendChild(id);
                    row.appendChild(organization);
                    row.appendChild(descr);
                    row.appendChild(url);
                    row.appendChild(address);
                    row.appendChild(city);
                    row.appendChild(state);
                    // row.appendChild(approveButton);

                    row.appendChild(buttonDiv);
                    table.appendChild(row);
                }
                let span = document.getElementsByClassName("close")[0];
                let modal = document.getElementById("modalM");
                window.onclick = (event) => {
                    if (event.target === modal) {
                        modal.style.display = "none";
                    }
                }
                span.addEventListener("click", function (evt) {
                    evt.preventDefault();
                    modal.style.display = "none";
                });
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