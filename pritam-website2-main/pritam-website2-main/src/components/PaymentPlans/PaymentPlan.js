/** @format */

import React, { useEffect, useState } from "react";
import { Header } from "../../utils/helpingComponent";
import PaymentType from "./PaymentType";
import { PAYMENT_TYpes, financialSituation } from "../../constants/constant";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ManagePlan from "./ManagePlan";
import MoreQuestions from "./MoreQuestions";

const PaymentPlan = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section>
      <Header heading={"Payment Plans"} />
      <div className="w-[49rem] h-[49rem] mx-auto">
        <img
          className="object-cover w-full h-full"
          alt="payment cover"
          src="https://s3-alpha-sig.figma.com/img/338b/7bcb/d8c24e20bd3b348d9ac8e024514dc6a6?Expires=1696809600&Signature=LRY67yekA6wCyBWe7tj9guOYoS8iDN5VnJNUQ~gaU4hzVs-aRUkr2e7mSmdfzP2~HvJod4BbeYh8a6rfsyzZOiVDkU-x4OP1wjafVlf2XPaBzwJ2q034Ua9sUYkOn5H6uSUsHRYrZvnpqNVeVqKfqepHRvADnNQ38HLf2JeV~NZdY9dmJYxxvGEb4t1JUg3~mL6E~JddrN63tPBwQY~HHEnBrxbspC0YyxaYtt~-F2QEiqzzOi5r6yK4-9ttFHPvYke6D6p1bhobZUjAKHPhr2vtyJ7dH7dE51NOondVRDaJn24oghNshNFEUilYGMgSLsg5n9utiPL2cedGLCwa5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
      <p className="text-center w-3/5 my-14 mx-auto">
        <span className="text-lg font-bold">Buy Now. Pay Monthly.</span>
        Let your money go further and take better control of your cash flow when
        you pay in smaller, more manageable monthly installments with Cherry.
      </p>
      <div className="flex flex-wrap justify-between items-center px-16">
        {PAYMENT_TYpes.map((item, index) => (
          <PaymentType key={index} src={item.src} type={item.type} />
        ))}
      </div>
      <div className="flex justify-center my-14 gap-5 text-xl font-semibold ">
        <button className="w-[31rem] py-2 bg-primary text-secondary border-2 border-primary ">
          APPLY NOW
        </button>
        <button className="w-[31rem] py-2 text-primary border-2 border-primary ">
          BOOK NOW
        </button>
      </div>
      <div>
        <h2 className="text-4xl font-medium text-center text-primary mt-32 mb-5">
          Calculate your Monthly Payments
        </h2>
        <p className="text-lg text-center mb-14">
          Use the payment calculator to simulate what your monthly payments
          could look like.*
        </p>

        <div className="border-2 border-black w-3/4 mx-auto py-16 px-40 ">
          <span className="text-2xl font-bold ">Purchase Amount</span>
          <p className="text-base mb-5">
            Enter a purchase amount, payment plan, and financial situation to
            see estimated payments
          </p>
          <input
            type="text"
            className="py-4 w-full border-2 border-primary px-8 text-xl font-semibold"
            placeholder="Enter your Purchase Amount"
          />
          <div className="my-14">
            <span>Purchase Amount</span>
            {/* progressbar */}
          </div>
          <div>
            <span className="text-2xl font-bold ">
              Patient Financial Situation
            </span>
            <div className="flex justify-center gap-12 my-8">
              {financialSituation.map((item, index) => (
                <Card
                  key={index}
                  icon={item.icon}
                  value={item.value}
                  setSelected={setSelected}
                  selected={selected}
                />
              ))}
            </div>
          </div>
          <p className="text-center w-full mt-14 mx-auto">
            <span className="text-lg font-bold">GOOD</span>
            means a patient may have high credit and no adverse financial
            history, such as recent missed payments.
          </p>
        </div>

        <p className="text-base text-center w-3/4 mx-auto mt-14">
          *These are examples only. 0% APR and other promotional rates subject
          to eligibility. Exact terms and APR depend on credit score and other
          factors. Not every practice that uses Cherry will offer the payment
          plan terms listed above.
        </p>
        <p className="text-base text-center w-3/4 mx-auto">
          Down payment in the amount of monthly payment will be due at the time
          of purchase.
        </p>
        <div className="w-1/3 mx-auto my-14">
          <button className="text-2xl w-full font-semibold text-center flex justify-center py-6 text-secondary bg-primary">
            CALCULATE NOW
          </button>
        </div>
        <Testimonials />
        <Faq />
        <ManagePlan />
        <MoreQuestions />
      </div>
    </section>
  );
};

export default PaymentPlan;

const Card = ({ icon, value, setSelected, selected }) => {
  return (
    <div
      onClick={() => setSelected(value)}
      className={`${
        selected === value
          ? "bg-primary "
          : "bg-lightSecondary  border border-secondary"
      } w-56 h-72 flex flex-col justify-center items-center text-secondary cursor-pointer `}
    >
      <span className="text-9xl"> {icon}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
};
