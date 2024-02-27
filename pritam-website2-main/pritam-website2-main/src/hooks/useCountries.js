import { useEffect, useState } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const json = await data.json();
    setCountries(json);
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return { countries };
};

export { useCountries };
