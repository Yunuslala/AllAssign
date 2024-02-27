/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram, AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";


const Schedule3 = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 3 OF 3</p>
        </div>
        <p className="title">Review & Confirm</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <div className="review_box">
            <p className="title">Confirm with Card</p>
            <p className="desc">
              You won't be charged now, payment will be collected in store after
              your appointment
            </p>

            <form>
              <div>
                <p>Card Holder Full Name</p>
                <input type="text" placeholder="Add Card Holder Full Name" />
              </div>

              <div>
                <p>Card Number</p>
                <input type="text" placeholder="Credit OR Debit Card Number" />
              </div>

              <div className="two_input">
                <div className="first">
                  <p>Expiry Date</p>
                  <input type="text" placeholder="MM / YYYY" />
                </div>
                <div>
                  <p>CVV</p>
                  <input type="text" placeholder="***" />
                </div>
              </div>

              <div className="payment_div">
                <p>Pay Securely with</p>
                <img src="/Image/9.png" alt="" />
                <img src="/Image/10.png" alt="" />
                <img src="/Image/11.png" alt="" />
                <img src="/Image/12.png" alt="" />
                <img src="/Image/13.png" alt="" />
              </div>

              <div className="border-line" />

              <div className="content">
                <p>Cancellation policy</p>
                <p className="desc">
                  Cancel for free up to 48 hours ahead, otherwise you will be
                  charged 50% of the service price for late cancellation or 100%
                  for not showing up.
                </p>
              </div>
              <div className="content">
                <p>Important info from Shahina Hoja Aesthetics</p>
                <p className="desc">
                  Please understand that when you forget or cancel your
                  appointment without giving enough notice, I miss the
                  opportunity to fill that appointment time, and clients on my
                  waiting list miss the opportunity to receive services.
                  Appointments are confirmed 48 hours in advance because I know
                  how easy it is to forget an appointment you booked months ago.
                  Since the services are reserved for you personally, a
                  Cancellation fee will apply if you no show.
                </p>
              </div>
              <div className="content">
                <p>Add booking notes</p>
                <p className="desc">
                  Include comments or requests about your booking
                </p>
              </div>

              <div>
                <textarea placeholder="Write your Notes here..............r" />
              </div>

              <div className="border-line" />

              <div className="submit_btn">
                <div style={{ marginTop: "0" }}>
                  <p>TOTAL PRICE</p>
                  <span>
                    <span className="total"> $499</span>
                    <span>1 SERVICE SELECTED</span>
                  </span>
                </div>

                <button onClick={() => navigate('/thanks')} >PROCEED TO PAY</button>
              </div>
            </form>
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
        </div>
      </div>
    </>
  );
};

export default Schedule3;
