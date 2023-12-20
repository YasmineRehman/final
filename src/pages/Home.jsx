import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>select the link</h1>
      <ul>
        <li>
          <Link to="/landingpageone">mywebsite</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
