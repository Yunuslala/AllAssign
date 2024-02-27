/** @format */

import { SwiperSlide } from "swiper/react";
import Swipe from "../../helper/swiper";
import { useEffect, useState } from "react";
import { getSatffReviews } from "../../Repo/Api";
import { Skeleton } from 'antd'

export default function StaffSlider() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidePerGroup, setSlidePergroup] = useState(3); //
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSatffReviews(setLoading, setReviews);
  }, []);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
        setSlidePergroup(1);
      } else if (window.innerWidth < 900 && window.innerWidth >= 600) {
        setSlidesToShow(2);
        setSlidePergroup(2);
      } else if (window.innerWidth < 1600 && window.innerWidth >= 900) {
        setSlidesToShow(3);
        setSlidePergroup(3);
      } else if (window.innerWidth < 1940 && window.innerWidth >= 1600) {
        setSlidesToShow(3);
        setSlidePergroup(3);
      } else {
        setSlidesToShow(6);
        setSlidePergroup(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <h3 className="center-heading">Our Staff</h3>
      <h1 className="bold-heading">Staff Reviews</h1>
      {loading === true ? (
        <div className="itemContainer">
          {[1, 2, 3].map((i) => (
            <>
              <div className="text-div" key={i}>
                <Skeleton active />
                <Skeleton active />
              </div>
              <div className="about-us-image">
                <Skeleton.Image active />
              </div>
            </>
          ))}
        </div>
      ) : (
      <Swipe
        spaceBetween={false}
        slidesPerGroup={slidePerGroup}
        slidesPerView={slidesToShow}
        navigation={false}
        delay={2500}
        loop={true}
        autoplay={true}
        pagination={false}
        allowTouchMove={true}
      >
        {reviews?.map((item , index) => {
          return (
            <SwiperSlide key={index}>
              <div className="staff-slider-card">
                <img src={item.userId?.image} className="staff-slider-image" alt="" />
                <div style={{ padding: "10px" }}>
                  <p className="staff-slider-para">{item.comment}</p>
                  <div className="staff-slider-div">
                    <img src={item.userId?.image} alt=""></img>
                    <div className="staff-info">
                      <h3>{item.userId?.firstName +" " + item.userId?.lastName}</h3>
                      <p>{item.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swipe>)}
    </div>
  );
}
