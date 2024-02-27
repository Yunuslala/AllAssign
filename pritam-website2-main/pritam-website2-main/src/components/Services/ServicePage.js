/** @format */

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ClientReviews from "../home/ClientReviews";
import Pictures from "../home/Pictures";

const ServicePage = () => {
  const { id } = useParams();
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  function ImgFinder() {
    if (id === "Hair Loss") {
      setImg("/Image/23.jpg");
    } else if (id === "PIGMENTATION") {
      setImg("/Image/25.jpg");
    } else if (id === "ACNE") {
      setImg("/Image/26.jpg");
    } else if (id === "AGING") {
      setImg("/Image/27.jpg");
    } else if (id === "FAT REDUCTION") {
      setImg("/Image/28.jpg");
    } else if (id === "ACNE SCAR") {
      setImg("/Image/29.jpg");
    } else if (id === "LASER HAIR REMOVAL") {
      setImg("/Image/30.jpg");
    } else if (id === "IV INJECTION") {
      setImg("/Image/31.jpg");
    }
  }

  useEffect(() => {
    ImgFinder();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="service_details_page">
        <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
          <div>
            <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
            <p style={{ width: "50%" }}></p>
          </div>
          <p className="title" style={{ textTransform: "uppercase" }}>
            {" "}
            {id}{" "}
          </p>
        </div>

        <div className="main_Img">
          <img src={img} alt="" />
        </div>

        <div className="laser_heading">
          <p> {id} </p>
          <button>Book Now</button>
        </div>

        <div className="content">
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultricies ante at odio ultricies, sed consequat nunc sollicitudin.
            Proin consequat, nulla quis tempus dignissim, neque massa bibendum
            metus, ac congue tellus nisi non lacus. Pellentesque semper dolor eu
            felis eleifend ornare. Vivamus enim diam, efficitur non lorem et,
            elementum viverra quam. Aliquam eget lectus sem. Ut ut dapibus nisi,
            ut convallis odio. Vivamus nisi nibh, venenatis quis urna eu,
            lobortis rhoncus lectus. Proin urna sem, lobortis sit amet venenatis
            eget, tristique nec velit. Sed interdum ligula nec dolor fringilla,
            a consequat augue mollis. Sed non venenatis augue. Phasellus quis
            ante ac augue ullamcorper bibendum et nec erat. Pellentesque quis
            porta tortor. Sed tortor nibh, bibendum quis pellentesque vitae,
            laoreet sit amet dolor. Etiam accumsan vehicula arcu euismod
            pharetra. Aenean sit amet nibh a diam facilisis tincidunt.
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultricies ante at odio ultricies, sed consequat nunc sollicitudin.
            Proin consequat, nulla quis tempus dignissim, neque massa bibendum
            metus, ac congue tellus nisi non lacus. Pellentesque semper dolor eu
            felis eleifend ornare. Vivamus enim diam, efficitur non lorem et,
            elementum viverra quam. Aliquam eget lectus sem. Ut ut dapibus nisi,
            ut convallis odio. Vivamus nisi nibh, venenatis quis urna eu,
            lobortis rhoncus lectus. Proin urna sem, lobortis sit amet venenatis
            eget, tristique nec velit. Sed interdum ligula nec dolor fringilla,
            a consequat augue mollis. Sed non venenatis augue. Phasellus quis
            ante ac augue ullamcorper bibendum et nec erat. Pellentesque quis
            porta tortor. Sed tortor nibh, bibendum quis pellentesque vitae,
            laoreet sit amet dolor. Etiam accumsan vehicula arcu euismod
            pharetra. Aenean sit amet nibh a diam facilisis tincidunt.
          </p>
        </div>

        <div className="content">
          <p className="title">Concern during laser hair removal</p>
          <ul>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>

        <div className="center_img">
          <img
            src="https://s3-alpha-sig.figma.com/img/5118/ea86/a98fb879fd2fac2be4d751c7b0af04d8?Expires=1696809600&Signature=ZND6f6rHW6~hu1y3zlaGZeEAaGrUfdx~IkQQYUPy2IJqNJSuiWXRQHB3uSMjM3npIGso7A-MyKu1WNZOBBM25Awv7WSR4xC6~x8nmCvaqc8UnfSa1SlZrJKbY1oySQR1HItx3llnkq4mgqmrETEhguZGLyXPVT-YemIv8LRMj37-E~G6aFHUCl5sxqyqx4fGOWJyR17qEJpom56V5SuNqwMq~IsAA9zjmYOIXCn-jpUJxSs1Q0LLz4IHglm~bUTce9qtA0z2RfWsi3H9opGp8f2wJjGqn174yYM9p6lWlR798bqKc1Nb-bwJkOCrlhHMEACInrj-IBKTQ-Z32mOuhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>

        <div className="content">
          <p className="title">Our process</p>
          <ul>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>

        <div className="laser_heading mt-5">
          <p></p>
          <button>Book Now</button>
        </div>

        <div className="center_img">
          <img
            src="https://s3-alpha-sig.figma.com/img/916f/2cf0/381c5bebc7f475255662755383244b20?Expires=1696809600&Signature=Pf65mYmNyFkMQUda40IymOhmS6OUhL5nd54q6tBznFIbGA9wZ4FPFN2czXYOVB3rmLd5lUex0oybRotMm1kvh4~7czdCRZb-JSaGb07FnIxrRP2mJ9tyoOYm~uDy~fMBMyFzEWIcV24Pc9WDI~g9Tni54fn-9SD8rQzGg1g8O2tvCB6uLx2mQbbPBWTI-FkqmQcChOVHQofFNq13a0j~L72DJHo6ElWeUplpJIJP1SrZDTnjyeAw7KZbU2QG~dqU5PLEz8ow5UubEv9rnGaSkZwoNrNxHLeCQBCmyOZiwMe4-yPuYAqzZmof4Nlr186Uu5gGMq7pxLkceJ2rm3Fc2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>

        <div className="main_Img " style={{ marginTop: "40px" }}>
          <img src="/Image/24.png" alt="" />
        </div>

        <ClientReviews />
        <Pictures />
      </main>
    </>
  );
};

export default ServicePage;
