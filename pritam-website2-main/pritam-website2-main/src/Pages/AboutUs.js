/** @format */
import React from "react";
import { useEffect, useState } from "react";
import Banner from "../Component/Partial/About Us Component/Banner";
import ContentDescription from "../Component/Partial/About Us Component/content-description";
import TwoSection from "../Component/Partial/About Us Component/two-section";
import { getBannerType, get_about_us, send_newsletter } from "../Repo/Api";

const AboutUs = () => {
  const [about, setAbout] = useState([]);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [nearestRegion, setNearestRegion] = useState(null);
  const [interest, setInterest] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    getBannerType("About Us", setData);
  }, []);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    get_about_us(setAbout);
  }, []);

  return (
    <>
      <div
        className="Banner AboutUs"
        style={{ backgroundImage: `url(${data?.bannerImage})` }}
      >
        <div
          className="aboutus-info-container"
          style={{ width: "80%", margin: "auto" }}
        >
          <h2> {data?.bannerTitle} </h2>
          <p> {data?.bannerDescription} </p>
        </div>
      </div>

      {about[0]?.desc?.map((ele, i) => (
        <ContentDescription title={ele?.title} desc={ele?.desc} key={i} />
      ))}
      <TwoSection title={about?.[0]?.title} />

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

      <div
        className="About-Us_Newsletter"
        style={{ width: "100%", padding: "0" }}
      >
        <div className="left">
          <img src="./Image/12.png" alt="" />
        </div>
        <div
          className="right"
          style={{ background: "#F5A302", width: "70%", padding: "10px" }}
        >
          <div className="content">
            <h5>Sign up for our e-newsletter</h5>
            <p className="desc" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque mattis, neque laoreet porta imperdiet, ex dolor
              accumsan enim, sed convallis ligula erat elementum tellus.
              Maecenas eu convallis augue. Curabitur id a
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
                By subscribing, you are giving us permission to contact you
                about our products and services. You may unsubscribe at any time{" "}
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
      <div className="pt-5"></div>
    </>
  );
};

export default AboutUs;
