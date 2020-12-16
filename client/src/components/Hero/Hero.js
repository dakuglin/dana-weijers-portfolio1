import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <div className="hero-container">
      <div className="hero-img img-fluid" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
        <div className="hero-overlay">
          <h1> Oh, hello.</h1>
          <h1>Nice to meet you.</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
