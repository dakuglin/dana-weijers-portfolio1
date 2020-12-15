import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <div className="hero img-fluid" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
      <h1 className="hero-text">Oh, hello.</h1>
      <h1 className="hero-text">Nice to meet you.</h1>
    </div>
  );
};

export default Hero;
