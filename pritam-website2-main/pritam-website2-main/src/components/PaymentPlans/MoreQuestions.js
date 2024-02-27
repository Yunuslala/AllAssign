import React from "react";
import Contact from "../Contact";

const MoreQuestions = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-primary my-3">
        More Questions?
      </h1>
      <p className="text-center mb-5 tetx-lg">
        Reach Us if you got any Queries...We are here to help you out!
      </p>
      <Contact MoreQuestions={"more"} />
    </div>
  );
};

export default MoreQuestions;
