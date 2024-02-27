/** @format */

import React, { useState, useEffect } from "react";
import { send_newsletter } from "../../../Repo/Api";

const Newsletter = ({ formTitle, formDesc }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [nearestRegion, setNearestRegion] = useState(null);
  const [interest, setInterest] = useState(null);

  const payload = {
    firstName,
    lastName,
    phone,
    email,
    nearestRegion,
    interest,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    send_newsletter(payload);
  };

  return (
    <div
      className="About-Us_Newsletter"
      style={{ width: "100%", padding: "0" }}
    >
      <div className="left">
        <img src="./Image/23.png" alt="" />
      </div>
      <div
        className="right"
        style={{ background: "#F5A302", width: "70%", padding: "10px" }}
      >
        <div className="content">
          <h5>{formTitle}</h5>
          <p className="desc">
            {formDesc}
          </p>

          <form onSubmit={submitHandler}>
            <div className="Two_Inputs">
              <div>
                <label>
                  <span>*</span>First Name
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label>
                  <span>*</span>Last Name
                </label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="Single_Input">
              <div>
                <label>
                  <span>*</span>Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="Single_Input">
              <div>
                <label>
                  <span>*</span>Mobile Number
                </label>
                <input
                  type="tel"
                  minLength={10}
                  maxLength={12}
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="Two_Inputs">
              <div>
                <label>
                  <span>*</span>Nearest Region
                </label>
                <input
                  type="text"
                  required
                  value={nearestRegion}
                  onChange={(e) => setNearestRegion(e.target.value)}
                />
              </div>
              <div>
                <label>
                  <span>*</span>I’m interested in
                </label>
                <input
                  type="text"
                  required
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </div>
            </div>

            <p className="Policy">
              By subscribing, you are giving us permission to contact you about
              our products and services. You may unsubscribe at any time{" "}
              <span>View our Privacy Policy</span> .
            </p>

            <button className="NewsLetter_Button" type="submit">
              SUBSCRIBE TO NEWSLETTER
            </button>
          </form>

          <p className="Assistance_P">Need Assistance?</p>

          <button className="Whatsapp_Button">
            <i className="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
          </button>

          <div className="contact_Detail">
            <p>Or Call us at </p>
            <i className="fa-solid fa-phone"></i>
            <p>+44 1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
