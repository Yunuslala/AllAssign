/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Please Select an Option Below</p>
      </div>

      <div className="Appointment_Selection">
        <p className="title">
          Choose one of the option from the options below :
        </p>

        <div className="boxes">
          <div className="Item">
            <img src="/Image/2.png" alt="" />
            <Link to="/login">
              <p>
                Returning Client <br /> / Member{" "}
              </p>
            </Link>
          </div>
          <div className="Item">
            <img src="/Image/3.png" alt="" />
            <Link to="/indiAppointment">
              <p>Individual Appointment </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
