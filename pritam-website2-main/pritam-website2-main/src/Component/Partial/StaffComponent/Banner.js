/** @format */

import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { getBannerType } from "../../../Repo/Api";
import { useParams } from "react-router-dom";

const Banner = ({id,staffId}) => {

  const [data, setData] = useState({});
  console.log(id,staffId)
  useEffect(() => {
    getBannerType("Find Talent	", setData);
  }, []);


  return (
    <div className="Event_Booking-Banner">
      <div className="upper" style={{ paddingTop: "20px" }}>
        <h5> {data?.bannerTitle} </h5>
        <p style={{ fontFamily: "Plus Jakarta Sans" }}>
        {data?.bannerDescription}
        </p>
      </div>
      <div className="down">
        <div className="main">
          <div className="content">
            <img src="./Image/40.png" alt="" />
            <h5>Casual Staff</h5>
            <Link to={`/casual-staff/${id}`} >
              <button>
                <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
              </button>
            </Link>
          </div>
          <div className="content">
            <img src="./Image/41.png" alt="" />
            <h5>Permanent Staff</h5>
            <Link to={`/permanent-staff/${id}`}>
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
