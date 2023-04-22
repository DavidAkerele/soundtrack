import React from "react";
import path from "../../assets/path.svg";
import arrow from "../../assets/arrow.svg";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <div>
      <div className="brack">
        <div className="brackl">
          <p>01</p>
        </div>
        <div className="brackm">
          <h1>Online Shop</h1>
          <p>3 Case Studies</p>
        </div>
        <div className="brackr">
          <img src={arrow} alt="" />
        </div>
      </div>
      <img src={path} alt="" />
      <div className="brack">
        <div className="brackl">
          <p>02</p>
        </div>
        <div className="brackm">
          <h1>Portfolio Website</h1>
          <p>3 Case Studies</p>
        </div>
        <div className="brackr">
          <img src={arrow} alt="" />
        </div>
      </div>
      <img src={path} alt="" />
      <div className="brack">
        <div className="brackl">
          <p>03</p>
        </div>
        <div className="brackm">
          <h1>Company Profile</h1>
          <p>3 Case Studies</p>
        </div>
        <div className="brackr">
          <img src={arrow} alt="" />
        </div>
      </div>
      <img src={path} alt="" />
      <div className="brack">
        <div className="brackl">
          <p>04</p>
        </div>
        <div className="brackm">
          <h1>Online Learning</h1>
          <p>3 Case Studies</p>
        </div>
        <div className="brackr">
          <img src={arrow} alt="" />
        </div>
      </div>
      <img src={path} alt="" />
      <div className="brack">
        <div className="brackl">
          <p>05</p>
        </div>
        <div className="brackm">
          <h1>News Portal</h1>
          <p>3 Case Studies</p>
        </div>
        <div className="brackr">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
