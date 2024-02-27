/** @format */

import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="Banner" style={{ backgroundImage: `url(${data?.image})` }}>
      <div className="content" style={{ width: "80%", margin: "auto" }}>
        <h2> {data?.title} </h2>
        <p>{data?.desc}</p>
      </div>
    </div>
  );
};

export default Banner;
