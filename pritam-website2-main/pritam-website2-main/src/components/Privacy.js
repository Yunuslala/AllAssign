/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }
  return (
    <main className="service_details_page">
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
          <p style={{ width: "50%" }}></p>
        </div>
        <p className="title" style={{ textTransform: "uppercase" }}>
          Privacy Policy
        </p>
      </div>

      <div className="content privacy_policy">
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies ante at odio ultricies, sed consequat nunc sollicitudin.
          Proin consequat, nulla quis tempus dignissim, neque massa bibendum
          metus, ac congue tellus nisi non lacus. Pellentesque semper dolor eu
          felis eleifend ornare. Vivamus enim diam, efficitur non lorem et,
          elementum viverra quam. Aliquam eget lectus sem. Ut ut dapibus nisi,
          ut convallis odio. Vivamus nisi nibh, venenatis quis urna eu, lobortis
          rhoncus lectus. Proin urna sem, lobortis sit amet venenatis eget,
          tristique nec velit. Sed interdum ligula nec dolor fringilla, a
          consequat augue mollis. Sed non venenatis augue. Phasellus quis ante
          ac augue ullamcorper bibendum et nec erat. Pellentesque quis porta
          tortor. Sed tortor nibh, bibendum quis pellentesque vitae, laoreet sit
          amet dolor. Etiam accumsan vehicula arcu euismod pharetra. Aenean sit
          amet nibh a diam facilisis tincidunt.
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies ante at odio ultricies, sed consequat nunc sollicitudin.
          Proin consequat, nulla quis tempus dignissim, neque massa bibendum
          metus, ac congue tellus nisi non lacus. Pellentesque semper dolor eu
          felis eleifend ornare. Vivamus enim diam, efficitur non lorem et,
          elementum viverra quam. Aliquam eget lectus sem. Ut ut dapibus nisi,
          ut convallis odio. Vivamus nisi nibh, venenatis quis urna eu, lobortis
          rhoncus lectus. Proin urna sem, lobortis sit amet venenatis eget,
          tristique nec velit. Sed interdum ligula nec dolor fringilla, a
          consequat augue mollis. Sed non venenatis augue. Phasellus quis ante
          ac augue ullamcorper bibendum et nec erat. Pellentesque quis porta
          tortor. Sed tortor nibh, bibendum quis pellentesque vitae, laoreet sit
          amet dolor. Etiam accumsan vehicula arcu euismod pharetra. Aenean sit
          amet nibh a diam facilisis tincidunt.
        </p>
      </div>
    </main>
  );
};

export default Privacy;
