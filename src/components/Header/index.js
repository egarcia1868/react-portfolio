import React from "react";
import "./style.css";
import headshot from "../../assets/images/face234.png"

const Header = () => {
  alert("site under construction as of 3/4/21");
  return (
    <div className="container-fluid" id="sticky">
      <div className="row">
        <div className="col-xl-1 col-lg-1 col-md-4 col-sm-3 col-2">
        </div>
        <div id="topline" className="col-xl-4 col-lg-4 col-md-5 col-sm-9 col-8">
          <img src={headshot} alt="Eric Garcia" id="bioPic" />
          <div className="toptext">
            <p style={{marginBottom: 0}}>
              Eric Garcia</p><p style={{color: "#777777"}}>Full-Stack Web Developer
            </p>
          </div>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-3 col-sm-1 col-2">
        </div>
        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-1">
        </div>
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

export default Header;
