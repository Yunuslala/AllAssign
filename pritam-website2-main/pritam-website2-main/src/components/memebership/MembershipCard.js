import React from "react";

const MembershipCard = ({ medal, price, type, list, subList, bg, require }) => {
  return (
    <section
      className={`${bg} flex w-96 flex-col border border-orange-600  box-border py-4 rounded-md space-y-8 justify-center`}
    >
      <div className="flex gap-3 px-4">
        <img className="w-10 h-10" src={medal} alt="badge" />
        <div>
          <h1 className="text-4xl text-secondary flex items-center gap-4 font-bold">
            {price}
            <span className="text-2xl text-white font-semibold">{type} </span>
          </h1>

          <p className="text-secondary text-sm font-bold">{require}</p>
        </div>
      </div>
      <div className="text-sm text-white px-8">
        <ul className="list-disc">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="list-none">
          {subList.map((item, index) => (
            <li className="before:content-['-']" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="py-2 mx-auto w-11/12 rounded-md shadow-sm text-primary text-lg bg-secondary font-bold">
        UPGRADE NOW
      </button>
    </section>
  );
};

export default MembershipCard;
