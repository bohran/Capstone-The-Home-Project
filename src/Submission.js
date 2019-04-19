import React, { Component } from 'react';
import './App.css';

class Submission extends Component {
  render() {
    return (
      <section>
        <div class="formContainer">
        <div>
        <h1 >Your event has been submitted for approval!</h1>
        <p>We've sent your event to Pyramid for approval. The event should be approved in the next business day. 
            Please contact us at eropes@uw.edu to make changes to your event posting or 
            any other inquiries related to your event.</p>
        </div>
        <div class="buttonContainer">
            <button class="submitButton" ><a class="eventLink" href="../index.html"> Return to Calendar </a> </button>
            <button class="submitButton"><a class="eventLink" href="./events.html"> Submit Another Event</a> </button>
            </div>
        </div>
        </section>
    );
  }
}
export default Submission;