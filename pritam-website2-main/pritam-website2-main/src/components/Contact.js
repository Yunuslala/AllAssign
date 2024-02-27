import React from "react";
import { ADD_IMG, MAP_IMG, STAR, contactPage } from "../constants/constant";

const Contact = ({ MoreQuestions }) => {
  // Create an empty array with a length of 5
  const starArray = Array.from({ length: 5 });

  return (
    <section>
      {!MoreQuestions && (
        <h1 className="text-5xl text-center font-light text-primary my-10">
          Contact
        </h1>
      )}
      <div className="flex  justify-evenly my-20">
        <section>
          {!MoreQuestions && (
            <h2 className="text-2xl font-semibold text-primary">Our Office</h2>
          )}
          <div className="flex gap-5 items-start mt-3">
            {!MoreQuestions && (
              <div className="w-52 h-52">
                <img className="object-fill" src={ADD_IMG} alt="Addresimage" />
              </div>
            )}

            <div className="flex flex-col gap-4">
              {!MoreQuestions && (
                <span className="text-lg font-semibold">
                  Shahina Hoja Aesthetics
                </span>
              )}
              {!MoreQuestions && (
                <div className="flex gap-2 items-center">
                  {" "}
                  {starArray.map((_, index) => (
                    <div className="w-5 h-5" key={index}>
                      <img src={STAR} alt="star" />
                    </div>
                  ))}
                  <span>{"(126)"}</span>
                </div>
              )}
              <div className="flex flex-col gap-4">
                {contactPage.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.mode}</span>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-3 font-semibold text-green justify-center border-2 py-2  border-green">
                <img className="w-5 h-5" src={MAP_IMG} alt="location" />
                LOCATE ON GOOGLE MAPS
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-between gap-7 w-1/3">
          {!MoreQuestions && (
            <h1 className="text-2xl font-semibold text-primary ">
              Any Queries?
            </h1>
          )}
          <textarea
            className="border border-black w-full py-5 px-5"
            placeholder="Write Your message..."
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <button className="bg-primary w-[300px] text-secondary py-2 font-semibold">
            SUBMIT
          </button>
        </section>
      </div>
    </section>
  );
};

export default Contact;
