/** @format */

import React, { useState, useEffect } from "react";
import { StaffLoginModal } from "../../Modals/staff-login-modal";
import { Link } from "react-router-dom";
import { getBannerType } from "../../../Repo/Api";

const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getBannerType("Freelancing", setData);
  }, []);

  return (
    <>
      <StaffLoginModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="BannerFree AboutUs" style={{ backgroundImage: `url(${data?.bannerImage})` }}>
        <div className="content2">
          <h2 style={{ fontFamily: "Plus Jakarta Sans" }}>Freelancing</h2>
          <h4>{data?.bannerTitle}</h4>
          <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            {data?.bannerDescription}
          </p>
          <button onClick={() => setModalShow(true)}> SIGN UP NOW</button>
          <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            <small>
              <Link
                to="/staff-logIn"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Already have Account? <u>Sign In</u>
              </Link>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
