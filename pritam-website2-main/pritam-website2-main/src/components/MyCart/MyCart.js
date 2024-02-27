import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import PriceDetail from "./PriceDetail";
import { AiFillApple } from "react-icons/ai";
import { Header } from "../../utils/helpingComponent";

const MyCart = () => {
  return (
    <section className="my-14">
      <Header heading={"My Cart"} />
      <div className="flex gap-10 justify-center">
        <section>
          <div>
            <CartProduct />
            <CartProduct />
          </div>
        </section>
        <section>
          <div>
            <PriceDetail />
            <button className="text-2xl py-4 my-12 w-full text-secondary bg-primary text-center">
              Chekout Now
            </button>
            <div className="flex justify-between items-center text-lg">
              <span className="text-mediumGray">
                Pay with interest free installments with{" "}
              </span>
              <div className="">
                <img
                  className="h-10"
                  src="https://s3-alpha-sig.figma.com/img/23b9/06c9/abc1021ee10881f2e597400885ea3f44?Expires=1695600000&Signature=Bn9b38IMhPQG8ZuRksvkqxsGZLgeO79MiacbizPVf3HKvwCaBRiobSGdnwjyCpTKUJNpJkK6IlLxz1ymUBsHDlTM5huMKDiSrvhgQ63-3DrXCO8RgvBQIvrynof5tFbngNmWcDbsCq8NNdIjg1goyQGBTK10dSP9TV9-Yv5yLB9ikjk6KL4YewqV2O-WIG7vwlT8A7YIMQa2jd8vP2izjX2ksFU4m0c8dCWHjYX5q8zWzfg5kAYJCM6ZzbsAfEdf0vyFci53g2SERFo4RpoIgQAQWFr3RW-KkT33~4XtbUFASuZ6mRv-q7FLlHdxmZc-ijbf0u0WtzAmA66jKdTFiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="percentage"
                />{" "}
              </div>
            </div>
            <Link className="text-lg flex justify-center my-4 font-bold underline text-primary">
              CLICK TO LEARN MORE
            </Link>

            <div className="relative flex items-center justify-center text-xl my-12 font-semibold">
              <hr className="w-full h-0.5" />
              <span className="absolute  mx-auto px-4 bg-white">OR</span>
            </div>
            <div className="">
              <h3 className="text-lg font-semibold my-4">
                Express Checkout with
              </h3>
              <button className="flex items-center justify-center  text-3xl font-semibold text-white bg-black w-full py-4 ">
                <AiFillApple className="text-5xl" />
                Pay
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MyCart;
