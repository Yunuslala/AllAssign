/** @format */

import React, { useState, useEffect } from "react";
import { Skeleton } from "antd";
import { getWhoWeAre } from "../../../Repo/Api";

const AboutSection = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getWhoWeAre(setLoading, setResponse);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <div className="about-item-container" style={{ paddingBottom: "40px" }}>
        {response?.map((i, index) => (
          <div className="about-item" key={index}>
            <img src={i.image} alt="" />
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>{i.title}</p>
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default AboutSection;
