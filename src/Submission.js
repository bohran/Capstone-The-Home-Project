import React, { Component } from 'react';
import './css/App.css';

class Submission extends Component {
  render() {
    return (
      <section>
        <div className="formContainer">
        <div>
        <h1 >Your event has been submitted for approval!</h1>
        <p>We've sent your event to Pyramid for approval. The event should be approved in the next business day. 
            Please contact us at eropes@uw.edu to make changes to your event posting or 
            any other inquiries related to your event.</p>
        </div>
        <div className="buttonContainer">
            <button className="submitButton" ><a className="eventLink" href="../index.html"> Return to Calendar </a> </button>
            <button className="submitButton"><a className="eventLink" href="./events.html"> Submit Another Event</a> </button>
            </div>
        </div>
        </section>
    );
  }
}
export default Submission;