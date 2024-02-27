import { useState } from "react";
import { useCountries } from "../../hooks/useCountries";
import { MdKeyboardArrowDown } from "react-icons/md";

export const ContactNumber = ({ props }) => {
  const { label, placeholder } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    flagImg: "https://flagcdn.com/w320/in.png",
  });
  const { countries } = useCountries();
  const handleSelectedCountry = (code, flagImg) => {
    setSelectedCountry({ code, flagImg });
    setIsOpen(false);
  };
  console.log(countries);
  console.log(selectedCountry);

  return (
    <label
      htmlFor={label}
      className="flex flex-col gap-5  font-medium text-2xl text-secondary"
    >
      {label}
      <div className="flex">
        <div className="relative  text-black w-64 flex justify-between items-center flex-shrink-0  bg-white gap-5 place-content-center justify-items-center">
          <span>{selectedCountry.code}</span>
          <div className="w-20 h-8">
            <img
              className="w-full h-full object-cover"
              src={selectedCountry.flagImg}
              alt="flag-img"
            />
          </div>
          <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <MdKeyboardArrowDown className="text-4xl" />
          </span>
          {isOpen && (
            <div className="w-64 h-96  z-50 absolute top-16 bg-white overflow-y-scroll no-scrollbar">
              {countries.map((country) => {
                const { idd, flags } = country;
                const { root, suffixes } = idd;
                const code = root + suffixes?.[0];
                const flagImg = flags.png;
                return (
                  <div
                    onClick={() => handleSelectedCountry(code, flagImg)}
                    className="grid grid-cols-2 gap-5 px-5 py-2 hover:border border-black cursor-pointer"
                    key={country.ccn3}
                  >
                    <span className="flex-shrink-0">{code}</span>
                    <div className="w-20 h-8">
                      <img
                        className="w-full h-full object-cover"
                        src={flagImg}
                        alt="flag-img"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <input
          name=""
          id={label}
          className="appearance-none focus:appearance-none py-6 px-12 w-full border-none text-gray-700 "
          placeholder={placeholder}
        />
      </div>
    </label>
  );
};
