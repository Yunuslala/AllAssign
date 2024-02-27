/** @format */

import React from "react";

const TrainingCourse = ({ academyHeading, academyDesc, academyTitle, image }) => {
  console.log("trainnig course", {
    academyHeading,
    academyDesc,
    academyTitle,
    image,
  });
  return (
    <>
      <div className="Training_Course">
        <div className="Event_Booking-Banner">
          <div className="upper" style={{ paddingTop: "40px" }}>
            <h5>{academyHeading}</h5>
            <p style={{ fontFamily: "Plus Jakarta Sans" }}>
              {academyTitle}
            </p>
          </div>
        </div>
        <div className="contact-us-overflow-main">
          <div className="Content">
            <div className="Three_Images">
              {image?.map((item) => {
                return (
                 <img src={item} alt="imagealt" />
               )
             })}
            </div>

            <p className="desc" style={{ fontFamily: "Plus Jakarta Sans" }}>
              {academyDesc}
            </p>

            <button className="Learn_More_Button">LEARN MORE </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingCourse;
