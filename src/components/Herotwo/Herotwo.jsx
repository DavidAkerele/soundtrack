import React from "react";
import "./Herotwo.css";
import twop from "../../assets/twop.svg";
import twob from "../../assets/twob.svg";
import twobl from "../../assets/twobl.svg";
import line from "../../assets/line.svg";

const Herotwo = () => {
  return (
    <div className="herotwo-cont">
      <div className="twol">
        <h1>Chat with visitors <br /> while they browse <br/> your site</h1>
        <img src={line} alt=''/>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam.”</p>

        <div className="det">
            <img src={twobl} alt="weird woman"/>
            <div className="det-inner">
                <h2>Samantha William</h2>
                <h3>Owner of Online Fashion Store</h3>
            </div>
        </div>
        
      </div>
      <div className="twor">
        <img src={twob} alt="brownwoman" />
        <img src={twop} alt="purplewoman" />
      </div>
    </div>
  );
};

export default Herotwo;
