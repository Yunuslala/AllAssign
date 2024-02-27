/** @format */

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import { eventEnquiry, send_newsletter } from "../Repo/Api";
import axios from "axios";
import { useParams } from "react-router-dom";
const PermanentStaff = () => {
  const {staffId}=useParams()
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [nearestRegion, setNearestRegion] = useState(null);
  const [interest, setInterest] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [response,setResponse]=useState()

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
  // "https://www.youtube.com/embed/JxZ9iqWVlSE?si=InTXwsXs3JbTwAMf&amp;start=3"
  const getPermanentStaff = async () => {
       const fetch = await axios.get(
         `https://pritam-backend.vercel.app/api/v1/admin/getstaffTalentedTypeById/${staffId}`
       );
       const responsedata = fetch.data;
       console.log("permanentstaff",responsedata.data);
       setResponse(responsedata.data);

  }

  useEffect(() => {
   getPermanentStaff() 
  },[])
  const submitHandler = (e) => {
    e.preventDefault();
    eventEnquiry(payload);
  };



  return (
    <div className="casual-staff Permanent-staff">
      <div className="Banner">
        <div className="content">
          <h2>{response?.title}</h2>
          <p>{response?.desc}</p>
        </div>
      </div>

      <div className="Community_Page">
        <div className="Find_work_contact_form">
          <div className="left_container">
            {response?.description.map((item) => {
              return (
                <div className="content mt-5">
                  <h5>{item.title} </h5>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="right_container">
            <div className="content">
              <h5>{response?.contactUsformTitle}</h5>
              <p>{response?.contactUsformDesc}</p>
            </div>
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
                  <p
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    className="desc"
                  >
                    {response?.contactUsformAvailibility}
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
                  {response?.contactUsformPrivacy}
                  <span>View our Privacy Policy</span> .
                </p>

                <button className="submit-btn" type="submit">
                  SUBMIT
                </button>

                <p className="assistance">Need Assistance?</p>
                <button className="Whatsapp_Button">
                  <i className="fa-brands fa-whatsapp"></i> CONTACT US AT
                  WHATSAPP
                </button>

                <div className="contact_Detail">
                  <p>Or Call us at </p>
                  <i className="fa-solid fa-phone"></i>
                  <p>{response?.eformCall}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <FAQ 
          type="Home"
        />
      </div>

      <div style={{ width: "90%", margin: "40px auto" }}>
        <iframe
          width="100%"
          height="500"
          src={response?.youtubeLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div
        className="About-Us_Newsletter"
        style={{ width: "100%", padding: "0" }}
      >
        <div className="left">
          <img src="./Image/89.png" alt="" />
        </div>
        <div
          className="right"
          style={{ background: "#F5A302", width: "70%", padding: "10px" }}
        >
          <div className="content">
            <h5>{response?.eTitle}</h5>
            <p className="desc">{response?.eDesc}</p>

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
                {response?.eformPrivacy}
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
              <p>{response?.eformCall}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5"></div>
    </div>
  );
};

export default PermanentStaff;
