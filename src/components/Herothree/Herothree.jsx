import React from "react";
import "./Herothree.css";
import line from "../../assets/line.svg";
import threew from "../../assets/threew.svg";
import three from "../../assets/three.svg";

const Herothree = () => {
  return (
    <div className="herothree-cont">
      <div className="threer">
        <img src={three} alt="" />
      </div>
      <div className="twol">
        <h1>
          It’s possible to do <br /> video call with <br /> your customers
        </h1>
        <img src={line} alt="" />
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
          do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
          Ut enim ad minim veniam.”
        </p>

        <div className="det">
          <img src={threew} alt="weird woman" />
          <div className="det-inner">
            <h2>Samantha William</h2>
            <h3>Owner of Online Fashion Store</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herothree;
