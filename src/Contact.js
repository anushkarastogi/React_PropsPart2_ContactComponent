import React from "react";

export default function Contact() {
  return (
    <div className="contact-card">
      <img src="./images/mr-whiskerson.jpg" alt="" />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" alt="" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" alt="" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}
