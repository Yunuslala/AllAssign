/** @format */

import React, { useEffect, useState } from "react";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import { reg_user_form } from "../Repo/Api";

const PermanentJob = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");

  const payload = { fullName, email, phone, address, dob };

  const submitHandler = (e) => {
    e.preventDefault();
    reg_user_form(payload);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {" "}
      <div className="permanent-job">
        <div className="Banner AboutUs">
          <div className="content" style={{ width: "80%", margin: "auto" }}>
            <h2 className="permanent-job-heading">Casual & Permanent Job</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
              Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis
              viverra vel, dignissim et augue. Suspendisse convallis nec neque
              et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Duis ut lectus pellentesque
              purus fermentum gravida. Integer accumsan feugiat diam, quis
              elementum arcu ultricies non. In odio ex, ultricies at urna eu,
              iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget
              dignissim urna. Sed at purus quis dolor lacinia consectetur
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "150px" }}>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Register Online</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
            <a href="#RegisterForm">
              <button>Register Here </button>
            </a>
          </div>

          <div className="right_container">
            <img src="./Image/78.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="right_container second_container">
            <img src="./Image/79.png" alt="" />
          </div>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>
              Attend to Meet Us
            </h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Learn & Earn</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>

          <div className="right_container third_container">
            <img src="./Image/80.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="right_container fourth_container">
            <img src="./Image/81.png" alt="" />
          </div>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Flexibility</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120px" }}>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>Great Money</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>

          <div className="right_container five_container">
            <img src="./Image/82.png" alt="" />
          </div>
        </div>

        <div className="Register_Div" style={{ marginTop: "120x" }}>
          <div className="right_container sixth_container">
            <img src="./Image/83.png" alt="" />
          </div>
          <div className="left_container">
            <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>
              Have a Great Amazing <br /> Experience with us
            </h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed
            </p>
          </div>
        </div>

        <div className="contact-us-form" id="RegisterForm">
          <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>
            Enter your Details in the Form
          </h5>

          <div className="Form-Container">
            <div className="left-container">
              <img src="./Image/84.png" alt="" />
            </div>

            <div className="right-container">
              <form
                onSubmit={submitHandler}
                style={{ width: "356px", height: "400px" }}
              >
                <div className="input-Div">
                  <i className="fa-regular fa-user"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-solid fa-phone"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-solid  fa-location-dot"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="input-Div">
                  <i className="fa-solid fa-calendar"></i>
                  <input
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                    type="date"
                    placeholder="Date of Birth"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <button type="submit">Submit</button>
              </form>

              <p className="assit">Need Assistance?</p>

              <button className="whatsapp-button">
                <i className="fa-brands fa-whatsapp"></i>
                CONTACT US AT WHATSAPP
              </button>

              <div className="contact" >
                <p>Or Call us at</p>
                <p>
                  {" "}
                  <i className="fa-solid fa-phone"></i>
                </p>
                <p>
                  {" "}
                  <strong>+44 1234567890</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Community_Page">
          <FAQ />
        </div>
        <div className="pt-5"></div>
      </div>
    </>
  );
};

export default PermanentJob;
