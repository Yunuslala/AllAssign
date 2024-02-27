/** @format */

import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { getBannerType } from "../../../Repo/Api";

const Banner = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getBannerType("Find Work", setData);
  }, []);

  return (
    <div className="Event_Booking-Banner Find-Work-Banner">
      <div className="upper">
        <h5> {data?.bannerTitle} </h5>
        <p style={{ fontFamily: "Plus Jakarta Sans" }}>
          {data?.bannerDescription}
        </p>
      </div>
      <div className="down">
        <div className="main">
          <div className="content">
            <p className="desc">LOOKING FOR</p>
            <h5>Casual & Permanent Job</h5>
            <Link to="/permanent-job">
              <button>
                <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
