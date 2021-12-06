import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home container">
      <h2>Welcome to Pizza Motion</h2>
      <Link to="/base">
        <button>Let's create a nice pizza</button>
      </Link>
    </div>
  );
};

export default Home;
