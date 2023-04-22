import React from "react";
import "./Footer.css";
import FooterComp from "../FooterComp/FooterComp";

const Footer = () => {
  return (
    <div className="footercont">
      <div className="footerl">
        <h1>
          Browse our <br />
          Case Study
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <FooterComp />
    </div>
  );
};

export default Footer;
