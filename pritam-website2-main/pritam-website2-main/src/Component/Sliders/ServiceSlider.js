/** @format */

import Swipe from "../../helper/swiper";
import { SwiperSlide } from "swiper/react";
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getTrendingServices } from "../../Repo/Api";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const ServiceSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidePerGroup, setSlidePergroup] = useState(3);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTrendingServices(setLoading, setTrending);
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
    <>
      <div style={{ margin: "auto", width: "90%" }}>
        <h3 className="center-heading">Our Services</h3>
        <h1 className="bold-heading">Trending Services</h1>
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
            delay={2100}
            loop={true}
            autoplay={true}
            pagination={false}
            allowTouchMove={true}
          >
            {trending?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="service-slider-card">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="service-slider-image"
                    />
                    <div className="service-slider-info">
                      <h3>{item.title}</h3>

                      <Link
                        to="/event-booking"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        <p>
                          Learn More{" "}
                          <BsArrowRightShort style={{ fontSize: "20px" }} />
                        </p>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swipe>
        )}
      </div>
    </>
  );
};

export default ServiceSlider;
