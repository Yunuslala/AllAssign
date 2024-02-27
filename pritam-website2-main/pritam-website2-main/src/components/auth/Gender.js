import React from "react";

const Gender = ({ props, index }) => {
  const { src, option } = props;
  return (
    <div
      className={`w-52 h-52 ${
        index === 1 ? "" : "bg-lighterSecondary"
      }  flex flex-col  justify-center gap-3 items-center`}
    >
      <div className="w-24 h-24">
        <img className="w-full h-full object-cover" src={src} alt="gender" />
      </div>
      <h3 className="text-2xl font-bold text-secondary">{option}</h3>
    </div>
  );
};

export default Gender;
