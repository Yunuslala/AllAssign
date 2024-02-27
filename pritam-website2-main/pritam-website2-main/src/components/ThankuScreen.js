import React from "react";
import { PrimaryButton } from "../utils/helpingComponent";
import { Link } from "react-router-dom";
const thankuImg =
  "https://s3-alpha-sig.figma.com/img/9592/0503/ecc5ee0f3eea87e05aef4d22ec697a9c?Expires=1696809600&Signature=iSE3NbdF~TeVav62xMlEjFbWBo3yppmkq4SwpRrKPpfSmVOU1vN6huF03BUoCSbD4SZMoc5Ngq-heB5xx8khT998d0K8gAYqPh62jYVQwvuOxHPSvXUo60T5D-JKz4TrGHf95CiwnSpyIaUGxEPJtatP-vj0hL8Bh2i2nbcV-5bXjS5kBzdRm7wmYrBoRWSquBqf~pUIFB-FBuGtWwpBJFB4r2ek9m4YzcdNE~RSZXOM9JNmmcZw5yEmPFvNkk1NGmAJ6knxxcZOU4hEPXslCjQHdg93kUdst49vBgZ3eSbnkvHmk5bZB0znalx~p5dnKjygwudqTqJKSkhkMcfXuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const ThankuScreen = () => {
  return (
    <section className="flex flex-col items-center pb-20">
      <header className="text-center text-primary">
        <h1 className="text-6xl font-light my-12">Thank You!</h1>
        <h3 className="w-3/5 mx-auto text-2xl font-medium ">
          Thank you for Purchasing your Products from Us! We are looking forward
          to provide you the best Experience
        </h3>
      </header>
      <div className="w-80 h-80 my-14">
        <img
          className="w-full h-full object-cover"
          src={thankuImg}
          alt="thanku"
        />
      </div>
      <Link to={"/"}>
        <PrimaryButton btnName="RETURN TO HOMEPAGE" />
      </Link>
    </section>
  );
};

export default ThankuScreen;
