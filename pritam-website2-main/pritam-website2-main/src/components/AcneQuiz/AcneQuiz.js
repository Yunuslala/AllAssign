import React from "react";
import { Link } from "react-router-dom";
import { openQuiz } from "../../store/quizSlice";
import { useDispatch } from "react-redux";

const AcneQuiz = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed flex flex-col items-center justify-center top-0 w-screen h-screen bg-white z-[1000]">
      <h1 className="text-[4rem] font-light text-primary">
        Enter your Email to Start!
      </h1>
      <div className="flex flex-col gap-32 items-center justify-center mt-44">
        <input
          className="w-[50rem] py-5 px-14 border border-black "
          type="text"
          placeholder="Enter your Email"
        />{" "}
        <Link onClick={() => dispatch(openQuiz())} to={"/acnequiz"}>
          <button className="w-[31rem] bg-primary text-darkSecondary text-2xl font-bold py-5">
            NEXT
          </button>
        </Link>
      </div>
      <div className="w-12 h-8  absolute top-3 right-11">
        <img
          onClick={() => dispatch(openQuiz())}
          className="w-full h-full object-cover cursor-pointer"
          src="https://s3-alpha-sig.figma.com/img/9848/6733/364df84295fff2531efd3873344303af?Expires=1696204800&Signature=l-Anne9UfNcMTY20KJefREjHSDh36zqylPzNHFsqFsjvuV7dNyb2QiMZLgqZU0R43Gv4Vgw2GDNElQy1HfBcBvdXxf4ltoLCUg5ZfGu4h9pP1J1s2QA0XjC2RZynRA01u4WSYEUP3KDwsMwYbZL78HzPmQM5uFb9Am3BuJL73xAXeB5Pcx5xIiAYc4O5OEmWf-u9sRpR5~gi959eEXcwcXTO-S11zJppIl4kDZC2KhE6jIkcPydXhlCvuNTI3D37D9KfUcwfpoPoFYUgnfEA16fYh19yoRlC~KJh8dAAWP7znax4~pR16zJhkApqFDueyXBkA2Np4~01LbeJZV5Kqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="close"
        />
      </div>
    </div>
  );
};

export default AcneQuiz;
