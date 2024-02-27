/** @format */

import React from "react";
import PropTypes from "prop-types";

const HeadingCont = ({ title, content }) => {
  return (
    <div
      className="Center_Heading"
      style={{ width: "90%", margin: "50px auto" }}
    >
      <h5
        style={{
          textAlign: "center",
          margin: "100px auto 30px auto",
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        {title}
      </h5>
      <p
        className="mt-2"
        style={{ textAlign: "center", fontFamily: "Poppins" , fontWeight : 'bold' }}
      >
        {content}
      </p>
    </div>
  );
};

export default HeadingCont;

HeadingCont.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
