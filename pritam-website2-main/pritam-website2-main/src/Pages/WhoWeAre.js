/** @format */
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWhoWeAreId } from "../Repo/Api";

const WhoWeAre = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getWhoWeAreId(id, setData);
  }, []);

  return (
    <>
      <div
        className="Banner AboutUs"
        style={{
          position: "relative",
          backgroundImage: `url(${data?.image})`,
          backgroundPosition: "center",
        }}
      >
        <div
          className="aboutus-info-container"
          style={{ width: "80%", margin: "auto" }}
        >
          <h2
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            {data?.title}
          </h2>
        </div>
      </div>

      {data?.desc?.map((i, index) => (
        <div className="About_Us-Content" key={index}>
          <h5>{i?.title}</h5>
          <p> {i?.desc} </p>
        </div>
      ))}

      <div className="pt-5"></div>
    </>
  );
};

export default WhoWeAre;
