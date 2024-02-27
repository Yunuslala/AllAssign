/** @format */

import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HOC = ({ children }) => {
  return (
    <motion.div
    // initial={{
    //   width: 0,
    //   x: window.innerWidth,
    //   transition: { duration: 0.1},
    // }}
    // animate={{
    //   width: "100%",
    //   x: 0,
    //   transition: { duration: 0.4 },
    // }}
    // exit={{
    //   width: 0,
    //   x: -window.innerWidth,
    //   transition: { duration: 0.1},
    // }}
    >
      {children}
    </motion.div>
  );
};
export default HOC;

HOC.propTypes = {
  children: PropTypes.object,
};
