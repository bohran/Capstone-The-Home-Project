"use strict";

  function openOrgForm() {
    var newForm = document.getElementById("addNewOrg");
    var oldForm = document.getElementById("storedOrgs");
    var oldSubmitButton = document.getElementById("oldSubmitButton");
    if (newForm.style.display === "none") {
      newForm.style.display = "block";
      oldForm.style.display = "none";
      oldSubmitButton.style.display = "none";
    } else {
      newForm.style.display = "none";
      oldForm.style.display = "block";
      oldSubmitButton.style.display = "block";
    }
  }