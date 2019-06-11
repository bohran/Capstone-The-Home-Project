import React from "react";
import "./css/Portal.css";

export default class PortalRowAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedEvents: []
        }
    }

    componentDidMount() {
        let url = "https://api.seattleforallkc.com/events";
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
            let deny = document.getElementById("deleteAllEventButton");
            deny.addEventListener("click", () => {
                let conf = window.confirm("Delete the selected events? This action is final and cannot be reversed");
                if (conf === true) {
                    for (let id of this.state.selectedEvents) {
                        let url = "https://api.seattleforallkc.com/events/" + id;
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
            for (let event of data) {
                let table = document.getElementById("allEventTable");
                let row = document.createElement("tr");
                row.classList.add("tableRow");
                let id = document.createElement("th");
                id.scope = "row";
                let organization = document.createElement("td");
                let name = document.createElement("td");
                let type = document.createElement("td");
                let service = document.createElement("td");
                let date = document.createElement("td");
                let city = document.createElement("td");
                let buttonDiv = document.createElement("td");
                let button = document.createElement("button");
                buttonDiv.appendChild(button);
                button.innerHTML = "More";
                button.classList = "btn-sm";
                button.id = "buttonClick";
                let approveButton = document.createElement("button");
                approveButton.innerHTML = "Approve";
                let form = document.createElement("div");
                form.classList.add("form-check");
                let input = document.createElement("input");
                input.type = "checkbox";
                input.classList.add("form-check-input");
                form.appendChild(input);
                row.addEventListener("click", (event) => {
                    if(event.target.id !== "buttonClick") {    
                        input.click();
                    }
                });
                input.addEventListener("click", () => {
                    row.click();
                });
                input.addEventListener("change", () => {
                    if (!this.state.selectedEvents.includes(event.id)) {
                        this.state.selectedEvents.push(event.id);
                    } else {
                        let index = this.state.selectedEvents.indexOf(event.id)
                        this.state.selectedEvents.splice(index, 1);
                    }
                    console.log(this.state.selectedEvents);
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
                    let firstName = document.createElement("p");
                    // CategoryName 
                    let categoryName = document.createElement("p");  
                    let eventName = document.createElement("p");
                    let dateTime = document.createElement("p");        
                    let capacity = document.createElement("p"); 
                    let room = document.createElement("p");   
                    let contactEmail = document.createElement("p");
                    let contactPhone = document.createElement("p");
                    let contactFirstName = document.createElement("p");
                    let coordinatorEmail = document.createElement("p");
                    let coordinatorPhone = document.createElement("p");
                    let coordinatorFirstName = document.createElement("p");
                    let services = document.createElement("p");
                    let fullAddressText = event.address + ", " + event.city + " " + event.state + ", " + event.zipcode;
                    county.textContent = "County: " + event.county;
                    categoryName.textContent = "Category: " + event.categoryName;
                    eventName.textContent = "Event Name: " + event.eventName;
                    dateTime.textContent = "Date/Time: " + event.date + " " + event.startTime + " - " + event.endTime;
                    capacity.textContent = "Capacity: " + event.capacity;
                    room.textContent = "Room: " + event.room;
                    contactEmail.textContent = "Contact Email: " + event.contactEmail;
                    contactPhone.textContent = "Contact Phone: " + event.contactPhone;
                    coordinatorEmail.textContent = "Coordinator Email: " + event.coordinatorEmail;
                    coordinatorPhone.textContent = "Coordinator Phone: " + event.coordinatorPhone;

                    let fullName = event.contactFirstName + " " + event.contactLastName;
                    contactFirstName.textContent = "Contact Name: " + fullName;
                    fullName = event.coordinatorFirstName + " " + event.coordinatorLastName;
                    coordinatorFirstName.textContent = "Coordinator Name: " + fullName;
                    if (event.organizations != null && event.organizations.length > 0) {
                        organizationName.textContent = "Organization Name: " + event.organizations[0];
                    }
                    if (event.services != null && event.services.length > 0) {
                        let serviceList = event.services[0];
                        for(let i = 1; i < event.services.length; i++) {
                            serviceList = serviceList + ", " + event.services[i];
                        }
                        services.textContent = "Service Areas: " + serviceList;
                    } 
                    urlText.textContent = "Event Website: " + event.url;
                    description.textContent = "Description: " + event.description;
                    fullAddress.textContent = "Address: " + fullAddressText;
                    body.appendChild(eventName);
                    body.appendChild(dateTime);
                    body.appendChild(description);
                    body.appendChild(services);
                    body.appendChild(urlText);
                    body.appendChild(organizationName);
                    body.appendChild(fullAddress);
                    body.appendChild(room);
                    body.appendChild(capacity);
                    body.appendChild(contactFirstName);
                    body.appendChild(contactEmail);
                    body.appendChild(contactPhone);
                    body.appendChild(coordinatorFirstName);
                    body.appendChild(coordinatorEmail);
                    body.appendChild(coordinatorPhone);

                
                    modal.style.display = "block";
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
                form.style.display = "inline-block";
                input.style.margin = "auto";
                row.appendChild(form);
                row.appendChild(id);
                row.appendChild(organization);
                row.appendChild(name);
                row.appendChild(type);
                row.appendChild(service);
                row.appendChild(date);
                row.appendChild(city);
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