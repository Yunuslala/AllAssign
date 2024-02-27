import { useNavigate } from "react-router-dom";

export const Header = ({ heading, styles }) => {
  const navigate = useNavigate();
  return (
    <header className="relative ">
      <h1
        className={`text-6xl  py-14 ${
          styles ? styles : "font-light"
        }  text-center  text-primary`}
      >
        {heading}
      </h1>
      <div className="absolute top-0 bottom-0 py-14 left-12">
        <img
          onClick={() => navigate(-1)}
          className="cursor-pointer"
          src="/asessts/back-button.svg"
          alt="back-button"
        />
      </div>
    </header>
  );
};

export const PrimaryButton = ({ btnName, styles }) => {
  return (
    <button
      className={`w-96 py-6 ${
        styles ? styles : "bg-secondary text-primary"
      } text-2xl font-bold`}
    >
      {btnName}
    </button>
  );
};

export const ValidInput = ({ props }) => {
  const { label, placeholder, type, register, name } = props;

  return (
    <label
      htmlFor={label}
      className="w-full flex flex-col gap-5 font-medium text-2xl text-secondary"
    >
      {label}
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        {...register(name, { required: true })}
        className="w-full py-6 appearance-none px-12 border-none text-gray-700"
      />
    </label>
  );
};
