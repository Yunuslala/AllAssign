/** @format */
import Swipe from "../../helper/swiper";
import { SwiperSlide } from "swiper/react";
import HoverCard from "../card/HoverCard";
import { useEffect, useState } from "react";
import { getPopularJob } from "../../Repo/Api";
import { Skeleton } from "antd";

const PopularJobSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidePerGroup, setSlidePergroup] = useState(3);
  const [who, setWho] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getPopularJob(setLoading, setWho);
  };

  useEffect(() => {
    fetchHandler();
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
      <div className="job-slider-div">
        <h3 className="center-heading">Opening</h3>
        <h1 className="bold-heading">Popular Jobs</h1>

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
            loop={true}
            autoplay={true}
            pagination={false}
            allowTouchMove={true}
          >
            {who?.map((ele) => {
              return (
                <SwiperSlide key={ele._id}>
                  <HoverCard data={ele} />
                </SwiperSlide>
              );
            })}
          </Swipe>
        )}
      </div>
    </>
  );
};

export default PopularJobSlider;
