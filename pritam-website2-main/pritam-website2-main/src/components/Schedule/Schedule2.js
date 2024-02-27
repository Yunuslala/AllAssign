/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram, AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import Calendar from 'react-calendar';


const Schedule2 = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 2 OF 3</p>
        </div>
        <p className="title">Select Time & Slot</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">

            <Calendar />


          <p className="title">Select Slot</p>

          <div className="Box" style={{ alignItems: "center" }}>
            <div className="Item">
              <input type="radio" name="slot"  style={{ marginTop: "5px" }} />

              <div className="description-box" style={{ width: "100%" }}>
                <p className="title">10:00 AM</p>
              </div>
            </div>
            <div className="Item">
              <input type="radio" name="slot"  style={{ marginTop: "5px" }} />

              <div className="description-box" style={{ width: "100%" }}>
                <p className="title">1:25 PM</p>
              </div>
            </div>
            <div className="Item">
              <input type="radio" name="slot" style={{ marginTop: "5px" }} />

              <div className="description-box" style={{ width: "100%" }}>
                <p className="title">6:00 PM</p>
              </div>
            </div>

           
          </div>
        </div>

        <div className="right_div">
          <div className="Box">
            <div className="two-sec">
              <img src="/Image/8.png" alt="" />
              <div>
                <p className="title">Shahina Hoja Aesthetics</p>
                <span className="Stars">
                  <span>
                    {" "}
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span> (122) </span>
                </span>
                <div className="contact-info">
                  <BsFillTelephoneFill />
                  <p>(469)823-0402</p>
                </div>
                <div className="contact-info">
                  <GrMail />
                  <p>info@shahinahoja.com</p>
                </div>
                <div className="contact-info">
                  <AiFillInstagram />
                  <p>@nurse.shahina</p>
                </div>
              </div>
            </div>
            <div className="two-sec mt-3">
              <AiFillClockCircle style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  10:00 AM - 9:30 PM
                </p>
              </div>
            </div>
            <div className="two-sec mt-3">
              <BiCurrentLocation style={{ fontSize: "20px" }} />
              <div>
                <p className="title" style={{ fontSize: "16px" }}>
                  905 Watters Creek Boulevard, 141, Allen, Texas, USA
                </p>
              </div>
            </div>

            <button className="locate_btn">LOCATE ON GOOGLE MAPS</button>

            <div className="Items">
              <div className="two-div">
                <p className="head">JetPeel Facial</p>
                <p className="head"> $499</p>
              </div>
              <div className="two-div">
                <p className="desc">1 Hour</p>
              </div>
            </div>

            <div className="Items">
              <div className="two-div">
                <p className="head">TOTAL PRICE</p>
                <p className="head"> $499</p>
              </div>
              <div className="two-div">
                <p className="desc">1 SERVICE SELECTED</p>
              </div>
            </div>
          </div>

          <button className="book" onClick={() => navigate('/schedule3')}>BOOK NOW</button>
        </div>
      </div>
    </>
  );
};

export default Schedule2;
