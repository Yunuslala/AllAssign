import React from "react";

const PaymentType = ({ src, type }) => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <div className="w-40 h-40">
        <img
          className="w-full h-full object-cover mx-auto"
          src={src}
          alt="payment options"
        />
      </div>
      <p className="font-medium text-lg text-primary">{type}</p>
    </div>
  );
};

export default PaymentType;
