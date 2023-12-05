// EmailForm.js

import React, { useState } from "react";
import "./Contact.css";
import { Footer } from "./Footer";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!emailRegex.test(value));
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    setPhoneNumberError(!phoneRegex.test(value));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailError && !phoneNumberError) {
      // Add your logic for handling the submitted data here
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      console.log("Message:", message);
    } else {
      console.log("Form has errors. Please correct them before submitting.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="email-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? "error" : ""}
          />
          {emailError && (
            <span className="error-message">Invalid email address</span>
          )}
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={phoneNumberError ? "error" : ""}
          />
          {phoneNumberError && (
            <span className="error-message">Invalid phone number</span>
          )}
        </label>

        <label>
          Message:
          <textarea value={message} onChange={handleMessageChange} />
        </label>

        <button type="submit">Send Message</button>
      </form>
      <Footer />
    </>
  );
};
