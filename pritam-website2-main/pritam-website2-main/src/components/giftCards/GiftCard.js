import React, { useState } from "react";
import { Header } from "../../utils/helpingComponent";
const options = [100, 50, 150, 200, 300];
const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(100); // Initial selected value

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
    <div className="my-20">
      <Header heading={"Gift Cards"} styles={"font-bold"} />
      <div className="w-[72rem] h-[92rem] border border-black mx-auto">
        <div className="w-[50rem] h-[22rem] mx-auto my-20">
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/f153/81e1/d12da252da1c2d0c168a954446db597d?Expires=1696204800&Signature=bu1xvdjp5qy4z7EsuppuZV6pCKurFtyluMQTI7BLYkg3qOnIi1BJNMuPZl69izVjX9-X5o2UtlFK9QShjFadTeB3Q2Tn2kxrvuu-HQm1xthMJSi9J-UoqYIB5G9LmPkL7xY09c~4XKBWJv21ds0RoMBbfAnaxJwS5IgAORmzdxRzKd1M~x-DbN1l6NYaf0QPGjyZICuIAcxa0K6h-3T~PQBGn~6ORJKWNv2UJJ-1uszRpCAnJAZNG9Bmeqk1-emJdNlSMRlpECLcH98n8s3AtxwyR1iP03X49x-F0sKp7pxqpsE9N0qOkGtWwjDVDmNTkIV~XGEaffhLjBNInP8XXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="card"
          />
        </div>
        <div className="w-[50rem] mx-auto">
          <h2 className="text-4xl font-bold text-primary ">
            Purchase your Gift Card Now!
          </h2>
          <p className="text-mediumGray text-2xl my-8">
            Let them find their best product. Whether shopping for a birthday,
            holiday, or any other occasion, a gift card from our Med-Spa will be
            a gift that can be seen on their face! This gift card is good for
            online products or in-store services!
          </p>
          <label className="text-2xl font-bold flex flex-col">
            TITLE
            <div className="relative inline-block">
              <div
                className="w-full border border-black py-5 px-12 flex items-center justify-between cursor-pointer"
                onClick={toggleSelectBox}
              >
                <span>${selectedValue}</span>
                <img
                  className={`w-7 h-7 transition-transform transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  src="https://s3-alpha-sig.figma.com/img/24d6/1a32/dc156f2aa5130b322c79db98f2544087?Expires=1696204800&Signature=h0kQ0DFscRKSF1Xg66Uy-TRiGmkK28hvkzuOL2TsMuzmuyX5kqdLBZMYWj58OT7fepnW9dDXsHVLNoouKsPf-ZQrpKNnQqC0JtAKHjwzZ9X5x4fBKPurvl~4neo3YCneHcjrNTupgEsJ1az~abtqNrOOXwSUfkj9vmN7dKppR6wfJy4K8TfdaGPzmDegvhCPx-l7wNDBRrd78bQ0~7Vy5UPI-rprKO4m2mGvXZhjQfw42y3hjPOhmpNKSSGOMAD7Q-puiDktZZ8lUtIrrRpNdjIGHr7~Y3ej2rsg1Q303gqpuUY-XDEiFdW7Z35LP6ZkO35o7kbOIb3OCfzRlEH1tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="arrow down"
                />
              </div>
              {isOpen && (
                <div className="absolute bg-white  w-full mt-2 border space-y-4 border-black py-2 px-12">
                  {options.map((item, index) => (
                    <div
                      key={`option${index}`}
                      className="cursor-pointer text-3xl hover:bg-gray-300"
                      onClick={() => handleOptionClick(item)}
                    >
                      ${item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </label>
          <div className="flex justify-between font-bold  items-center mt-16">
            <div className="flex items-center gap-10">
              <h3 className="text-3xl  text-mediumGray">Price : </h3>
              <span className="text-3xl  text-black">$125</span>
            </div>
            <span className="text-2xl line-through text-black ">$125</span>{" "}
            <span className="text-primary text-xl">You Save 5% ($40)</span>
          </div>
          <div className="flex justify-center mt-32">
            <button className="text-darkSecondary text-2xl font-bold w-[31rem] bg-primary py-4 ">
              PURCHASE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
