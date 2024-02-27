import React, { useEffect } from "react";
import Banner from "../Component/Partial/Event Booking Component/Banner";
import VideoBanner from "../Component/Partial/Event Booking Component/Video-Banner";

const EventBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <VideoBanner />
      <div className="mt-5"></div>
    </>
  );
};

export default EventBooking;
