import React from "react";
import ReviewCard from "./ReviewCard";

const ClientReviews = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col  gap-10 items-center">
        <h1 className="font-medium text-3xl text-primary mb-2">
          Client Reviews
        </h1>
        <p className=" text-center w-[48rem] leading-7">
          We are very proud of the service we provide and stand by every product
          we carry. We work hard to address our client's needs and have them
          leave our spa loving their skin. That's why over 400 people have given
          us a 5-star rating on Google!
        </p>
        <div className="w-48 h-24">
          <img
            className="w-full h-full object-cover"
            src="/asessts/google-review.png"
            alt="google-review"
          />
        </div>
      </div>
      <div className="grid grid-flow-col gap-7 py-10 px-10 overflow-x-scroll no-scrollbar  w-full mt-20">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ClientReviews;
