import React from "react";

const Options = ({ type, options }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary">{type}</h3>
      <div className="grid grid-flow-row gap-5 my-10">
        {options.map((item, index) => (
          <label
            key={`option${index}`}
            className="flex items-center gap-4 text-xl break break-keep"
            htmlFor={item}
          >
            <input
              className="w-7 h-7 accent-primary"
              type="checkbox"
              id={item}
            />
            {item}
          </label>
        ))}
        <hr className="bg-black h-1 my-5" />
      </div>
    </div>
  );
};

export default Options;
