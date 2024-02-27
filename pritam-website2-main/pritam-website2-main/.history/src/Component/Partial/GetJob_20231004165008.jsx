/** @format */

import { useEffect, useState } from "react";
import { BsArrowRightShort, BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getBuisness, getDreamData } from "../../Repo/Api";

export default function GetJob() {
  const [data, setData] = useState({});
  const [buisness, setBuisness] = useState({});

  const fetchHandler = () => {
    getDreamData(setData);
  };

  const fetchData = () => {
    getBuisness(setBuisness);
  };

  useEffect(() => {
    fetchHandler();
    fetchData();
  }, []);

  return (
    <div style={{ margin: "auto", width: "90%" }}>
    {data && 
    (
      <h3 className="center-heading"> {data?.title} </h3>
      <h1 className="bold-heading"> {data?.heading} </h1>
    )
    }

      {data?.desc?.length > 0 && (
        <div className="get-job-list-container">
          {data?.desc?.map((i, index) => (
            <p key={index}>
              {" "}
              <BsCheckLg className="get-job-bulletStyle" />
              {i}
            </p>
          ))}
        </div>
      )}

      {data?.image && (
        <img className="get-job-image" src={data?.image} alt="" />
      )}

      {buisness && (
        <div className="business-container">
          <img
            className="business-container-image"
            src={buisness?.image}
            alt=""
          />
          <div className="business-info-div">
            <h3> {buisness?.title} </h3>
            <p> {buisness?.desc} </p>
            <div className="business-list-container">
              {buisness?.userArray?.map((i, index) => (
                <div className="business-list-item-container" key={index}>
                  <img className="business-list-image" src={i.image} alt="" />
                  <span> {i.name} </span>
                </div>
              ))}
            </div>
            <Link to="/" className="business-link">
              View All <BsArrowRightShort style={{ fontSize: "24px" }} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
