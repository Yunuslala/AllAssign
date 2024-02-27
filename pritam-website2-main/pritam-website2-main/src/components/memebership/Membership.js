import React from "react";
import MembershipCard from "./MembershipCard";
import {
  DIAMOND_MEDAL,
  GOLD_MEDAL,
  PLATINUM_MEDAL,
  SILVER_MEDAL,
} from "../../constants/constant";

const Membership = () => {
  return (
    <section className="bg-primary">
      <h1 className="text-5xl font-light text-secondary text-center py-14 box-border">
        Membership
      </h1>
      <div className="flex items-start px-10 gap-2 py-10">
        <MembershipCard
          medal={SILVER_MEDAL}
          price={"$99"}
          type={"SILVER"}
          require={"6 MONTH COMMITMENT REQUIRED"}
          bg={"silver"}
          list={[
            "10% OFF in retail products",
            "Includes your choice of one of the following treatments each month",
          ]}
          subList={[
            "IPL Photofacial",
            "Acne Peel + Extractions + LED",
            "Laser Hair Removal ( face / underarms / bikini / half legs / arms )",
          ]}
        />
        <MembershipCard
          medal={GOLD_MEDAL}
          price={"$179"}
          type={"GOLD"}
          require={"6 MONTH COMMITMENT REQUIRED"}
          bg={"gold"}
          list={[
            "10% OFF in retail products",
            "Includes your choice of one of the following treatments each month",
          ]}
          subList={[
            "JetPeel Facial",
            "JeTOP Hair Loss Treatment",
            "IPL Acne Treatment + Extractions",
            "Laser Full Arms / Legs / Brazilian Bikini / Face + Underarms + Bikini )",
            "RF Skin TIghtening lower jawline , eyes , eyebrow lift",
            "Body Contouring ( 1 Area )",
            "Cellulite Treatment",
            "TCA Peel ( TCA Cross )",
          ]}
        />
        <MembershipCard
          medal={PLATINUM_MEDAL}
          price={"$279"}
          type={"PLATINUM"}
          bg={"platinum"}
          list={[
            "15% OFF in retail products",
            "Includes your choice of one of the following treatments each month",
          ]}
          subList={[
            "Microneedling + extractions",
            "RF Skin Tightening full face + neck",
            "Red Carpet Facial ( JetPeel Facial + Skin Tightening )",
            "DMK Enzyme therapy ( enzyme 2 & 3 Added )",
            "IPL + Extractions + Jetpeel Facial",
            "StretchMark Treatment",
            "Body Contouring 1 Area + Cellulite Treatment",
            "Perfect Derma Peel",
            "Laser Hair Removal ( face, underarms, full arms, full legs, bikini )",
            "RevePEEL Pigment removing chemical Peel",
            "Aquagold Microneedling",
          ]}
        />
        <MembershipCard
          medal={DIAMOND_MEDAL}
          price={"$399"}
          type={"DIAMOND"}
          bg={"diamond"}
          list={[
            "20% OFF in retail products",
            "Includes your choice of one of the following treatments each month",
          ]}
          subList={[
            "RF Microneedling",
            "Laser hair removal ( face, neck, underarms, brazilian bikini, full legs, full arms, abdomen & back )",
          ]}
        />
      </div>
    </section>
  );
};

export default Membership;
