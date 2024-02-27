/** @format */

import React, { useEffect, useState } from "react";
import Pictures from "./home/Pictures";
import { ServiceCardImages } from "../constants/constant";
import { Header } from "../utils/helpingComponent";

const AboutUs = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-primary text-white font-light">
      <Header styles={"text-white"} heading={"About Us"} />
      <div className="flex justify-center  gap-14">
        <div className="w-[37rem] h-[37rem]  border-8 border-secondary overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="aboutus"
            src={ServiceCardImages[0].src}
          />
        </div>
        <div
          className="flex flex-col w-[47.04rem] items-start"
          style={{ gap: "20px" }}
        >
          <h3 className="text-4xl font-medium">Who We Are</h3>
          <h4 className="font-medium text-xl flex items-center gap-2">
            Shahina Hoja, RN, LE
            <span className="font-light text-sm ">
              - Aesthetic Nurse & Founder
            </span>
          </h4>
          <p>
            A licensed Aesthetic Nurse and founder of Shahina Hoja Aesthetics.
            Shahina became Board certified Skin therapist in 2017. 5 years
            later, and she still continues to grow more passionate about
            increasing self - love and confidence for all her clients!
          </p>
          {show && (
            <>
              {" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                neque felis. Praesent id fermentum tellus, nec sagittis urna.
                Integer gravida, libero vel auctor varius, nibh nisl egestas
                tortor, vitae facilisis sapien sem non sapien. Phasellus vitae
                ipsum vitae elit pretium tempus. Maecenas id tortor leo. Morbi
                ornare viverra magna, eget rutrum tortor consequat ac. Donec eu
                diam ante. Curabitur sed erat ultricies, pellentesque justo a,
                porta nibh.
              </p>
              <p>
                Sed ultricies mi augue, non ultrices augue semper sit amet.
                Suspendisse molestie, neque lacinia iaculis finibus, sapien
                turpis aliquet sem, ut tincidunt nunc justo sed elit. Nam
                viverra finibus turpis a facilisis. Proin hendrerit scelerisque
                dignissim. Integer pretium rutrum elit ac pulvinar. In gravida
                commodo turpis eu aliquam. P
              </p>
            </>
          )}

          {show ? (
            <button
              className="w-96 py-6 bg-secondary text-primary text-2xl font-bold"
              onClick={() => setShow(false)}
            >
              SHOW LESS
            </button>
          ) : (
            <button
              className="w-96 py-6 bg-secondary text-primary text-2xl font-bold"
              onClick={() => setShow(true)}
            >
              VIEW MORE
            </button>
          )}
        </div>
      </div>

      <hr className="bg-secondary mt-[28.5rem] mb-14 w-3/4 mx-auto" />
      <Pictures />
    </section>
  );
};

export default AboutUs;
