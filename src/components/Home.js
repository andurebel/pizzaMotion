import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      className="home container"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 1, duration: 2.5 }}
    >
      <h2>Welcome to Pizza Motion</h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.04,
            textShadow: "0px 0px 10px rgb(255,255,255)",
            boxShadow: "0px 0px 4px rgb(255,255,255)",
          }}
        >
          Let's create a nice pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
