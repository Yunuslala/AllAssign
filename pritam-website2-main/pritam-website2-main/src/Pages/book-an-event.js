/** @format */

import React, { useState, useEffect, useContext } from "react";
import Banner from "../Component/Partial/Book-An-Event/Banner";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import { EventModal } from "../Component/Modals/event-modal";
import { useParams } from "react-router-dom";
import { eventEnquiry, get_sub_event } from "../Repo/Api";

const BookAnEvent = () => {
  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState(null);
  const [head, setHead] = useState(null);
  const [descPoints, setDescPoints] = useState([]);
  const { id } = useParams();
  const { type } = useParams();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);

  const payload = {
    firstName,
    lastName,
    email,
    phone,
    comment,
    date,
    slot,
    eventId: id,
  };
  console.log("eventFaqtype", type);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await eventEnquiry(payload);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setComment("");
    setDate("");
    setSlot("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [event, setEvent] = useState([]);

  useEffect(() => {
    get_sub_event(id, setEvent);
  }, []);

  return (
    <>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={img}
        head={head}
        descPoints={descPoints}
      />

      <div className="Book-An-Event">
        <Banner data={event?.[0]?.eventId} />
        <div className="Find_work_contact_form">
          <div className="left_container">
          <div className="Three_Div2"  >
                {event?.slice(0, 3).map((ele, i) => (
                  <>
                    <div className="Item" key={i}>
                      <div className="upper">
                        <img
                          className="upperImage"
                          src={ele?.mainImage}
                          alt=""
                        />
                        <p className="head">{ele?.title}</p>
                      </div>
                      <p
                        style={{ fontFamily: "Plus Jakarta Sans" }}
                        className="desc"
                      >
                        {ele?.desc}
                      </p>

                      <button
                        onClick={() => {
                          setImg(ele?.mainImage);
                          setHead(ele?.title);
                          setDescPoints(ele.descPoints);
                          setModalShow(true);
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </>
                ))}
              </div>
          </div>

          <div className="right_container">
            <div className="contact-query-form">
              <h5 className="head">Book your Event </h5>
              <p style={{ fontFamily: "Plus Jakarta Sans" }} className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nisi lacus, cursus pharetra ligula tempor, cursus
                maximus lectus. Curabitur eget felis sit amet tellus
              </p>
              <form onSubmit={handleSubmit}>
                <div className="two-inputs">
                  <div>
                    <label>
                      <span>*</span> First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>
                      <span>*</span> Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
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
                      value={email}
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
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="two-inputs mt-4">
                  <div style={{ width: "100%" }}>
                    <label>Any Comments</label>
                    <textarea
                      placeholder="Type here........."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p>
                    <span>*</span>Availibility to Call Back
                  </p>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy
                  </p>
                </div>

                <Calendar onChange={(e) => setDate(e)} value={date} />

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
                  <i className="fa-brands fa-whatsapp"></i> CONTACT US AT
                  WHATSAPP
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

        <div className="book-event-container">
          {event?.slice(3).map((i, index) => (
            <div className="book-event-image-container" key={index}>
              <div className="event-image">
                <img src={i.mainImage} alt="" />
                <p> {i.title} </p>
              </div>
              <p>{i.desc}</p>
              <button
                onClick={() => {
                  setImg(i.mainImage);
                  setHead(i.title);
                  setDescPoints(i.descPoints);
                  setModalShow(true);
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-5 Community_Page" id='EventFaq' >
          {" "}
          <FAQ 
            type="EventHome"
          />
        </div>


        <div style={{ width: "90%", margin: "40px auto" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/JxZ9iqWVlSE?si=InTXwsXs3JbTwAMf&amp;start=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      </div>

      <div className="pt-5"></div>
    </>
  );
};

export default BookAnEvent;
