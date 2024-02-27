/** @format */

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { eventEnquiry } from "../../../Repo/Api";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [nearestRegion, setNearestRegion] = useState(null);
  const [interest, setInterest] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);

  const payload = {
    firstName,
    lastName,
    email,
    phone,
    nearestRegion,
    interest,
    date,
    slot,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    eventEnquiry(payload);
  };

  return (
    <div className="Find_work_contact_form">
      <div className="left_container">
        <div className="content">
          <h5>Lorem ipsum dolor sit amet, consectetur</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            dignissim elementum. Suspendisse quis enim aliquet dui efficitur
            ultricies nec id nisi. Donec at odio condimentum neque imperdiet
            molestie. Mauris nec
          </p>
        </div>
      </div>

      <div className="right_container">
        <div className="contact-query-form">
          <form onSubmit={submitHandler}>
            <div className="two-inputs">
              <div>
                <label>
                  <span>*</span> First Name
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label>
                  <span>*</span> Last Name
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="two-inputs mt-4">
              <div style={{ width: "100%" }}>
                <label>
                  <span>*</span> Email Address
                </label>
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="two-inputs mt-4">
              <div style={{ width: "100%" }}>
                <label>
                  <span>*</span> Phone Number
                </label>
                <input
                  type="tel"
                  minLength={10}
                  maxLength={12}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="two-inputs mt-4">
              <div>
                <label>
                  <span>*</span> Nearest Region
                </label>
                <input
                  type="text"
                  required
                  onChange={(e) => setNearestRegion(e.target.value)}
                />
              </div>
              <div>
                <label>
                  <span>*</span> I’m interested in
                </label>{" "}
                <input
                  type="text"
                  required
                  onChange={(e) => setInterest(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <p>
                <span>*</span>Availibility to Call Back
              </p>
              <p style={{ fontFamily: "Plus Jakarta Sans" }} className="desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy
              </p>
            </div>

            <Calendar onChange={(e) => setDate(e)} />

            <div className="mt-4">
              <p>
                <span>*</span> Select your Slot & Timings
              </p>
              <select
                className="Full-width-select"
                onChange={(e) => setSlot(e.target.value)}
                value={slot}
              >
                <option></option>
                <option value="1 PM">1 PM</option>
                <option value="2 PM">2 PM</option>
                <option value="3 PM">3 PM</option>
                <option value="4 PM">4 PM</option>
                <option value="5 PM">5 PM</option>
                <option value="6 PM">6 PM</option>
                <option value="7 PM">7 PM</option>
                <option value="8 PM">8 PM</option>
                <option value="9 PM">9 PM</option>
                <option value="10 PM">10 PM</option>
                <option value="11 PM">11 PM</option>
                <option value="12 PM">12 PM</option>
              </select>
            </div>

            <p className="Privacy">
              By submitting your details, you are giving us permission to
              contact you about our products and services..{" "}
              <span>View our Privacy Policy</span> .
            </p>

            <button className="submit-btn" type="submit">
              SUBMIT
            </button>

            <p className="assistance">Need Assistance?</p>
            <button className="Whatsapp_Button">
              <i className="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
            </button>

            <div className="contact_Detail">
              <p>Or Call us at </p>
              <i className="fa-solid fa-phone"></i>
              <p>+44 1234567890</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
