import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/autoplay";

import "./swiperStyles.css";

export default function Swipe(props) {
    const pagination = {
        clickable: true,
    };

    const autoplay = {
        delay: props.delay || 2000,
        disableOnInteraction: false,
    };

    return (
        <Swiper
            modules={[Autoplay, Navigation, Scrollbar, Pagination]}
            spaceBetween={30}
            slidesPerView={props.slidesPerView}
            slidesPerGroup={props.slidesPerGroup}
            navigation={props.navigation}
            autoplay={props.autoplay && autoplay}
            pagination={props.pagination && pagination}
            speed={1000}
            loop={props.loop}
            allowTouchMove={props.allowTouchMove}
            className="mySwiper"
        >
            {props.children}
        </Swiper>
    );
}
