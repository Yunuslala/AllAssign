/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `https://pritam-backend.vercel.app/api/v1/admin/getAdsById/${id}`
      );
      setData(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div
        className="Banner AboutUs addd"
        style={{ backgroundImage: `url(${data?.banner})` }}
      >
        <div className="content" style={{ width: "80%", margin: "auto" }}>
          <h2
            className="permanent-job-heading"
            style={{
              lineHeight: "normal",
              maxWidth: "600px",
              textAlign: "center",
              display: "block",
              margin: "auto",
            }}
          >
            {data?.title}
          </h2>

          <p>{data?.description}</p>
        </div>
      </div>

      <h1 className="bold-heading">OUR NEW APP</h1>

      <div className="Staff_Desc">
        {data?.desc?.map((i, index) => (
          <p key={index}> {i} </p>
        ))}
      </div>

      <div className="About_Us-two_Sec">
        <div className="left">
          <img src={data?.images?.[0]} style={{ maxWidth: "400px" }} alt="" />
        </div>
        <div className="right">
          {data?.desc?.map((i, index) => (
            <p key={index}> {i} </p>
          ))}
        </div>
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

      <div className="mb-5"></div>
    </>
  );
};

export default AdScreen;
