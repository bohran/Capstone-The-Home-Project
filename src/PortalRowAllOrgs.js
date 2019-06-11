import React from "react";
import "./css/Portal.css";

export default class PortalRowAllOrgs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedOrgs: [],
            render: false
        }
    }

    componentDidMount() {
        let url = "https://api.seattleforallkc.com/organizations";
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



    renderTable(data) {
        console.log(this.state.data)
        if (data.length > 0) {
            let deny = document.getElementById("deleteAllOrgButton");
            deny.addEventListener("click", () => {
                let conf = window.confirm("Delete the selected organizations? This action is final and cannot be reversed");
                if (conf === true) {
                    for (let org of this.state.selectedOrgs) {
                        let url = "https://api.seattleforallkc.com/organizations/" + org.id;
                        fetch(url, {
                            method: "DELETE",
                            headers: new Headers({
                                'Authorization': window.localStorage.getItem("sessionID")
                            })
                        })
                            .then(response => {
                                if (response.ok) {
                                    window.location.reload(true);
                                }
                            })
                    }
                }
            });
            for (let org of data) {

                let table = document.getElementById("allOrgTable");
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
                button.id = "buttonClick";
                url.style.wordWrap = "break-word";
                let approveButton = document.createElement("button");
                approveButton.innerHTML = "Approve";
                let form = document.createElement("div");
                form.classList.add("form-check");
                let input = document.createElement("input");
                input.type = "checkbox";
                input.classList.add("form-check-input");
                form.appendChild(input);

                row.addEventListener("click", (event) => {
                    if (event.target.id !== "buttonClick") {
                        input.click();
                    }
                });
                input.addEventListener("click", () => {
                    row.click();
                });
                input.addEventListener("change", () => {
                    if (!this.state.selectedOrgs.includes(org)) {
                        this.state.selectedOrgs.push(org);
                    } else {
                        let index = this.state.selectedOrgs.indexOf(org)
                        this.state.selectedOrgs.splice(index, 1);
                    }
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
                    let county = document.createElement("p");
                    let orgType = document.createElement("p");
                    let email = document.createElement("p");
                    let phone = document.createElement("p");
                    let fullName = document.createElement("p");
                    let role = document.createElement("p");
                    fullAddress.textContent = "Address: " + org.address + ", " + org.city + " " + org.state + ", " + org.zipcode;
                    county.textContent = "County: " + org.county;
                    email.textContent = "Contact Email: " + org.email;
                    phone.textContent = "Contact Phone: " + org.phone;
                    fullName.textContent = "Contact Name: " + org.firstName + " " + org.lastName;
                    organizationName.textContent = "Organization Name: " + org.organizationName;
                    role.textContent = "Contact Role: " + org.role;
                    urlText.textContent = "Website: " + org.url;
                    description.textContent = "Description: " + org.organizationDescription;
                    if (org.organizationType != null && org.organizationType.length > 0) {
                        let typeList = org.organizationType[0];
                        for (let i = 1; i < org.organizationType.length; i++) {
                            typeList = typeList + ", " + org.organizationType[i];
                        }
                        orgType.textContent = "Organization Type: " + typeList;
                    }

                    body.appendChild(organizationName);
                    body.appendChild(description);
                    body.appendChild(orgType);
                    body.appendChild(fullAddress);
                    body.appendChild(urlText);
                    body.appendChild(fullName);
                    body.appendChild(role);
                    body.appendChild(email);
                    body.appendChild(phone);

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

    render() {
        console.log(this.state.data)
        this.renderTable(this.state.data)
        return (
            <tbody>

            </tbody>
        )
    }
}