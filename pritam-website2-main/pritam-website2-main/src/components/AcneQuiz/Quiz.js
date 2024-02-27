import React from "react";
import { Header } from "../../utils/helpingComponent";
import { quiz1, quiz2, quiz3, quiz4 } from "../../constants/quizConstants";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import Question from "./Question";

const Quiz = () => {
  const { step } = useSelector((store) => store.quiz);
  return (
    <div className="mb-14">
      <Header heading={"Acne Quiz"} />
      <div className="w-11/12 border border-black mx-auto py-14 px-14">
        <h3 className="text-4xl flex items-center text-primary font-medium">
          {step === 2 && (
            <span className="mr-9 cursor-pointer">
              <BiArrowBack />
            </span>
          )}
          STEP {step} OF 4
        </h3>
        {step === 1 && <Question quiz={quiz1} styles={"w-72 h-72"} />}
        {step === 2 && <Question quiz={quiz2} />}
        {step === 3 && <Question quiz={quiz3} />}
        {step === 4 && <Question quiz={quiz4} />}
      </div>
    </div>
  );
};

export default Quiz;
