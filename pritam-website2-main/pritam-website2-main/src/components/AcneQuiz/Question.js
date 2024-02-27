import React from "react";
import { increaseStep } from "../../store/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Question = ({ quiz, styles }) => {
  const { step } = useSelector((store) => store.quiz);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    if (step === 4) {
      navigate("/acnequiz/recomended");
    } else {
      dispatch(increaseStep());
    }
  };
  return (
    <>
      <h2 className="my-24 text-4xl font-medium text-primary">
        What is your skin type?
      </h2>
      <div className="flex justify-center gap-5 ">
        {quiz.map((item, index) => (
          <div
            onClick={handleClick}
            className="flex flex-col items-center gap-8 cursor-pointer"
            key={`skin${index}`}
          >
            <div className={`${styles ? styles : "w-96 h-96"}`}>
              <img
                className="w-full h-full object-cover"
                src={item.src}
                alt="skin"
              />
            </div>
            <span className="text-2xl font-normal">{item.type}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Question;
