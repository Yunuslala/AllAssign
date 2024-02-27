import { useEffect } from "react";
import { Header, ValidInput } from "../../utils/helpingComponent";
import { ContactNumber } from "./ContactNumber";
import Gender from "./Gender";
const vipImg =
  "https://s3-alpha-sig.figma.com/img/c6e3/8795/2fa075da1cab5ad4b2a42ff78fca06dd?Expires=1696809600&Signature=DbqJ-pr~slo~pBlnlPuwTq7TCrqZup4O2VciDcTWegPYz~NPt6mFrzHdmt6f9tcSTouNXS3xK3BwL50DiDcKcOfQt0ip5ccNy~YXXPS1VMzeNefUChzWYu6WqN-CoFUG7GTI6pNRV5mmMEEr9vP~MYmRh-uO8tbm2cxW9fZSyocwr6MpPKvcnHKfuPTgp-j6AMGVSRODkJq7TkCTbpXIofb2aipqUdjzcLr2-SZcV7l27pbUzC3XOBEa9f97stDNXU3~ixPhd9ielvCX1QxfOYNYv15k-92ZOf5KT-uf2wJ2FyaOE7kSsQDdw6jMKaohM~1j6zAo~dgr1O5Cr2-iUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const gender = [
  {
    src: "",
    option: "MALE",
  },
  {
    src: "",
    option: "FEMALE",
  },
  {
    src: "",
    option: "OTHER",
  },
];
const SignUp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section>
      <Header heading={"Sign-Up"} />
      <section className="w-[64rem] h-[145rem] bg-primary mb-20 mx-auto  py-20 px-28">
        <div className="flex items-start gap-14">
          <div className="w-24 h-24">
            <img
              className="w-full h-full object-cover"
              src={vipImg}
              alt="vip"
            />
          </div>
          <h4 className="text-3xl font-normal text-secondary">
            You are One Step away to Become our VIP Member!
          </h4>
        </div>
        <div className="space-y-11 my-20">
          <ValidInput
            props={{
              label: "First Name",
              placeholder: "Enter Your First Name",
              type: "text",
            }}
          />
          <ValidInput
            props={{
              label: "Last Name",
              placeholder: "Enter Your Last Name",
              type: "text",
            }}
          />
          <ValidInput
            props={{
              label: "Email",
              placeholder: "Enter Your Email ID",
              type: "text",
            }}
          />
          <ContactNumber
            props={{
              label: "Contact Number",
              placeholder: "Enter your 10-Digit Phone Number",
            }}
          />
          <ValidInput
            props={{
              label: "Date Of Birth",
              placeholder: "Select your Date Of Birth ( DD/MM/YYYY )",
              type: "date",
            }}
          />
          <ValidInput
            props={{
              label: "New Password",
              placeholder: "Enter your New Password",
              type: "password",
            }}
          />
        </div>

        <div className="space-y-12">
          <h4 className="text-xl font-bold text-white">Select your Gender</h4>
          <div className="flex justify-between">
            {gender.map((item, index) => (
              <Gender index={index} key={index} props={item} />
            ))}
          </div>
        </div>
        <div className="flex gap-12 pl-12 py-6 border-4 my-28 border-dashed  border-white">
          <div>
            <img src="/asessts/referalIcon.svg" alt="referal" />
          </div>
          <input
            type="text"
            placeholder="Enter Referral Code"
            className="placeholder:text-secondary font-bold text-3xl text-secondary bg-transparent w-full"
          />
        </div>
        <hr className=" bg-secondary " />
        <div className="flex items-center gap-8 my-16">
          <input
            type="checkbox"
            className="w-6 h-6 accent-green bg-secondary "
          />
          <span className="text-2xl text-secondary">
            I Agree to the <strong>‘Terms & Conditions’</strong>
          </span>
        </div>
        <button className="text-3xl  font-bold text-white bg-secondary py-4 w-full">
          REGISTER BUTTON
        </button>
      </section>
    </section>
  );
};

export default SignUp;
