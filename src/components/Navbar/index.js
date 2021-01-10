import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container-fluid" id="sticky">
      <div className="row">
        <div className="nav-item col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3">
          <a className="nav-link toptext gray" href="#about">
            About
          </a>
        </div>
        <div className="nav-item col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3">
          <a className="nav-link toptext gray" href="#skills">
            Skills
          </a>
        </div>
        <div className="nav-item col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3">
          <a className="nav-link toptext gray" href="#portfolio">
            Portfolio
          </a>
        </div>
        <div className="nav-item col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3">
          <a className="nav-link toptext gray" href="#contact">
            Contact
          </a>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2">
        </div>
      </div>
    </div>
  )
};

export default Navbar;