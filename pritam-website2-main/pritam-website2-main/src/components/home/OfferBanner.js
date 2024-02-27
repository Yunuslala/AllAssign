import React from "react";

const OfferBanner = ({ setBanner }) => {
  return (
    <div className="relative w-full">
      <div className="w-4/6 h-[23rem]">
        <img
          className="w-full h-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/086f/3ff6/2bf7a90c1beae366a2f8a2ba1ff891a1?Expires=1696204800&Signature=AudJJZoHQ~pcMfFTcS~eb7u5bSAGNrwkx6RkbKZNEG9mOHjUEDde92gAhROnG8xFQJYfB8K~VBhjYmNFtH8Mg27NJF7VhfmhctyzFsbOSLm-BP3Obi985QQNFfPLzyYQn-SYJUSLhoSlVjriQOuGpBAXRWObabGXQFZqCv5QUiY9WXGdJk7NQ8ri~B~z4CcnOCnBkxWdx7B3zfETPYXU4bg3iwUUUeCshJXHzDi4-9DcaZMAQaDVxQmbXRtT4Y7LB8C4uZzoRa1pJ6LBhxbFnCVKU4ww1d5vxV5YZM~LwCL1fmvtzUddiyniwN7KXl2itgzP2q2yZc-ul~z8fCrJCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="banner"
        />
      </div>
      <div>
        <h1 className="text-4xl font-normal text-white  absolute bottom-10 left-16 text-center w-[37rem]">
          Get <span className="font-bold">50$ OFF</span> on your First Visit
          when you Book through Our App
        </h1>
      </div>

      <div className="absolute  top-0 right-0 flex flex-col gap-10  justify-center items-center bg-white w-[51rem] h-full rounded-l-full z-[300]">
        <h1 className="font-medium text-4xl">Download Our App NOW!!</h1>
        <div className="flex items-center">
          <div className="w-80 h-24">
            <img
              className="w-full h-full object-contain"
              src="/asessts/play.png"
              alt="play"
            />
          </div>
          <div className="w-80 h-24">
            <img
              className="w-full h-full object-contain"
              src="/asessts/store.png"
              alt="store"
            />
          </div>
        </div>
        <div className="w-12 h-8  absolute top-3 right-11">
          <img
            onClick={() => setBanner(false)}
            className="w-full h-full object-cover cursor-pointer"
            src="https://s3-alpha-sig.figma.com/img/9848/6733/364df84295fff2531efd3873344303af?Expires=1696204800&Signature=l-Anne9UfNcMTY20KJefREjHSDh36zqylPzNHFsqFsjvuV7dNyb2QiMZLgqZU0R43Gv4Vgw2GDNElQy1HfBcBvdXxf4ltoLCUg5ZfGu4h9pP1J1s2QA0XjC2RZynRA01u4WSYEUP3KDwsMwYbZL78HzPmQM5uFb9Am3BuJL73xAXeB5Pcx5xIiAYc4O5OEmWf-u9sRpR5~gi959eEXcwcXTO-S11zJppIl4kDZC2KhE6jIkcPydXhlCvuNTI3D37D9KfUcwfpoPoFYUgnfEA16fYh19yoRlC~KJh8dAAWP7znax4~pR16zJhkApqFDueyXBkA2Np4~01LbeJZV5Kqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="close"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
