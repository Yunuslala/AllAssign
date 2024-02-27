/** @format */

import React from "react";

const IndexBanner = () => {
  return (
    <div className="Index_Banner_Two_Sec">
      <div className="left">
        <img src="./Image/6.png" alt="" />
      </div>
      <div className="right">
        <div className="content">
          <h5>Get the job of your <br /> dreams quickly.</h5>
          <p>
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
          <ul>
            <li>
              {" "}
              <img src="./Image/2.svg" alt="" />{" "}
              <span>Digital Marketing Solutions for Tomorrow</span>{" "}
            </li>
            <li>
              {" "}
              <img src="./Image/2.svg" alt="" />{" "}
              <span>Our Talented & Experienced Marketing Agency</span>{" "}
            </li>
            <li>
              {" "}
              <img src="./Image/2.svg" alt="" />{" "}
              <span>Create your own skin to match your brand</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexBanner;
