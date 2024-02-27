/** @format */

import React, { useEffect } from "react";
import Banner from "../Component/Partial/Book-An-Event/Banner";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookFullService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Book-An-Event Book-Full-Service">
      <Banner />
      {/* Contact Form */}
      <div className="Find_work_contact_form">
        <div className="left_container">
          <div className="About_Us">
            <h5> Our Services</h5>
            <div
              className="Three_Div"
              style={{ display: "flex", flexDirection: "column", gap: "60px" }}
            >
              <div className="Item">
                <p className="Head">VIP Bar Service</p>
                <div className="upper"></div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo..
                </p>
              </div>

              <div className="Item">
                <p className="Head">Wooden Bar</p>
                <div className="upper second"></div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo..
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right_container">
          <div className="contact-query-form">
            <h5 className="head">Book the Bar </h5>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nisi lacus, cursus pharetra ligula tempor, cursus maximus lectus.
              Curabitur eget felis sit amet tellus
            </p>
            <form>
              <div className="two-inputs">
                <div>
                  <label>
                    <span>*</span> First Name
                  </label>
                  <input type="text" />
                </div>
                <div>
                  <label>
                    <span>*</span> Last Name
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="two-inputs mt-4">
                <div style={{ width: "100%" }}>
                  <label>
                    <span>*</span> Email Address
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="two-inputs mt-4">
                <div style={{ width: "100%" }}>
                  <label>
                    <span>*</span> Phone Number
                  </label>
                  <input type="text" />
                </div>
              </div>

              <div className="two-inputs mt-4">
                <div style={{ width: "100%" }}>
                  <label>Any Comments</label>
                  <textarea placeholder="Type here........." />
                </div>
              </div>

              <div className="mt-4">
                <p>
                  <span>*</span>Availibility to Call Back
                </p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed diam nonumy
                </p>
              </div>

              <Calendar />

              <div className="mt-4">
                <p>
                  <span>*</span> Select your Slot & Timings
                </p>
                <input type="text" />
              </div>

              <p className="Privacy">
                By submitting your details, you are giving us permission to
                contact you about our products and services..{" "}
                <span>View our Privacy Policy</span> .
              </p>

              <button className="submit-btn">SUBMIT</button>

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

      <div className="permanent-job" style={{ backgroundColor: "transparent" }}>
        <div className="mt-5 Community_Page">
          <FAQ />
        </div>
        <div className="pt-5"></div>
      </div>
    </div>
  );
};

export default BookFullService;
