/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  const thankuImg =
    "https://s3-alpha-sig.figma.com/img/9592/0503/ecc5ee0f3eea87e05aef4d22ec697a9c?Expires=1696809600&Signature=iSE3NbdF~TeVav62xMlEjFbWBo3yppmkq4SwpRrKPpfSmVOU1vN6huF03BUoCSbD4SZMoc5Ngq-heB5xx8khT998d0K8gAYqPh62jYVQwvuOxHPSvXUo60T5D-JKz4TrGHf95CiwnSpyIaUGxEPJtatP-vj0hL8Bh2i2nbcV-5bXjS5kBzdRm7wmYrBoRWSquBqf~pUIFB-FBuGtWwpBJFB4r2ek9m4YzcdNE~RSZXOM9JNmmcZw5yEmPFvNkk1NGmAJ6knxxcZOU4hEPXslCjQHdg93kUdst49vBgZ3eSbnkvHmk5bZB0znalx~p5dnKjygwudqTqJKSkhkMcfXuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  return (
    <div className="Thanks_Container">
      <p className="title">Thank You!</p>
      <p className="desc">
        Thank you for Purchasing your Products from Us! We are looking forward
        to <br />
        provide you the best Experience
      </p>
      <img src={thankuImg} alt="" />
      <Link to="/">
        <button>RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default Thanks;
