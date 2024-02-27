/** @format */

import React, { useState } from "react";
import OfferDrawer from "../Drawer/OfferDrawer";

const LimitedOffer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <OfferDrawer onClose={onClose} open={open}  />
      <div className="Limited_offer">
        <img src="/Image/24.png" alt="" onClick={() => showDrawer()} />
      </div>
    </>
  );
};

export default LimitedOffer;
