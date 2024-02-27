/** @format */

import React from "react";

const TwoSection = ({ title }) => {
  return (
    <div className="About_Us-two_Sec">
      <div className="left">
        <img src="./Image/7.png" alt="" />
      </div>
      <div className="right">
        <p style={{ textAlign: "justify" }}>
          {title
            ? title
            : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus   eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis  pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id    ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum  quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus  ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin   nisi dolor, posuere mattis viverra vel, dignissim et augue.  Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Nulla ultricies diam et felis ornare, sit amet posuere eros blandit. Praesent nunc urna, pharetra non mauris  consectetur, aliquam vestibulum nisi. Mauris tellus lectus, ultricies  non quam ."}
        </p>
      </div>
    </div>
  );
};

export default TwoSection;
