import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function ContactUs() {
  const [progress, setProgress] = useState(0);

  const updateProgressBar = () => {
    const inputValue = document.getElementById("message").value;
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;

    if (inputValue === "") {
      alert("Please fill in message fields.");
      return false;
    } else if (nameValue === "") {
      setProgress(33.33);
      alert("Please fill in name field.");
      return false;
    } else if (emailValue === "") {
      setProgress(66.66);
      alert("Please fill in email field.");
      return false;
    } else {
      setProgress(100);
      alert("Form submitted.");
      return true;
    }
  };

  return (
    <main>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>We would love to hear from you!</p>

        <div className="progress mt-3" id="progressBar">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress}%` }} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <form>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" required /><br />
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required /><br />
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" cols="50" required /><br />
          <input type="submit" value="Send" onClick={updateProgressBar} /><br />
        </form>
      </section>
    </main>
  );
}

export default ContactUs;
