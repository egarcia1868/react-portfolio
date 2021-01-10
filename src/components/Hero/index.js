import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="text-center">
      <img 
      src={props.backgroundImage}
      className="img-fluid"
      alt=""
      />
    </div>
  );
}

export default Hero;