/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillInstagram, AiFillClockCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { PiMagnifyingGlassThin } from "react-icons/pi";

const Schedule1 = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  return (
    <>
      <div className="Backward_Heading step_Heading">
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}>STEP 1 OF 3</p>
        </div>
        <p className="title">Select Services</p>
      </div>

      <div className="schedule_1">
        <div className="left_div">
          <ul className="Menu_List">
            <li tabIndex={0} active>
              FEATURED
            </li>
            <li>BODY </li>
            <li>TREATMENTS</li>
            <li>CONSULTATIONS</li>
            <li>FACIALS</li>
          </ul>

          <p className="title">Featured Services</p>

          <div className="Box">
            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">RF NEEDLING</p>
                <p className="desc">1 Hour</p>
              </div>

              <div className="price-Box">
                <p className="title">Starting from $499</p>
                <p className="desc">2 ADD-ONS AVAILABLE</p>
              </div>
            </div>

            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">JetPeel Facial</p>
                <p className="desc">1 Hour</p>
              </div>

              <div className="price-Box">
                <p className="title">$499</p>
              </div>
            </div>

            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">Microneedling</p>
                <p className="desc">1 Hour</p>
                <ul>
                  <li>Fine lines & Wrinkles are Softened</li>
                  <li> Skin is tightened & thickend </li>
                  <li> Elastin & Colagen Restores </li>
                  <li> Acne Scarring is Reduced </li>
                  <li> Stretch Marks are Improved </li>
                </ul>
              </div>

              <div className="price-Box">
                <p className="title"> $499</p>
              </div>
            </div>

            <div className="Item">
              <input type="checkbox" />
              <div className="description-box">
                <p className="title">JeTOP Hair Loss Treatment </p>
                <p className="desc" style={{ textAlign: "justify" }}>
                  The JetPeel delivery system provides a deep, micro massage to
                  the scalp, boosting blood circulation to nourish the hair
                  follicles. The treatment consists of 2 steps: first we use
                  pressurized air and Jet Detox water to remove buildup and
                  purify the scalp - creating the optimal foundation for strong,
                  shiny hair. Step 2: An infusion of Jetop serum with
                  ingredients such as Redensyl shown to increase hair growth by
                  214%.No needles,a painless process and all natural
                  ingredients.Best Part? We're offering the Jetop Hair Loss
                  Treatment for ONLY $149 (normally $199)
                </p>
              </div>
              <div className="price-Box">
                <p className="title"> $499</p>
              </div>
            </div>

            <div className="Item">
              <input type="checkbox" />

              <div className="description-box">
                <p className="title">Laser Hair Removal</p>
                <p className="desc">30 Min</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>We use Medical Grade Laser Machine- MT One (Quanta)</li>
                </ul>
              </div>

              <div className="price-Box">
                <p className="title"> $499</p>
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
                <p className="delete"> DELETE</p>
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

          <button className="book" onClick={() => navigate('/schedule2')} >BOOK NOW</button>

          <div className="border-collapsed"></div>

          <div className="Box">
            <div className="search-div">
              <PiMagnifyingGlassThin />
              <input type="search" placeholder="Search Services" />
            </div>

            <div className="add-on">
              <div className="left">
                <div className="head">
                  <p className="title"> RF Needling</p>
                  <p className="price">$499</p>
                </div>
                <p className="desc">1 HOUR</p>
              </div>

              <input type="checkbox" />
            </div>

            <div className="add-on">
              <div className="left">
                <div className="head">
                  <p className="title"> RF Needling</p>
                  <p className="price">$499</p>
                </div>
                <p className="desc">1 HOUR</p>
              </div>

              <input type="checkbox" />
            </div>

            <div className="add-on">
              <div className="left">
                <div className="head">
                  <p className="title"> RF Needling</p>
                  <p className="price">$499</p>
                </div>
                <p className="desc">1 HOUR</p>
              </div>

              <input type="checkbox" />
            </div>

            <div className="add-on">
              <div className="left">
                <div className="head">
                  <p className="title"> RF Needling</p>
                  <p className="price">$499</p>
                </div>
                <p className="desc">1 HOUR</p>
              </div>

              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule1;
