import React from "react";
import "./Hero.css";
import dot from "../../assets/dot.svg";
import herot from "../../assets/herot.svg";
import herotr from "../../assets/herotr.svg";
import herotl from "../../assets/herotl.svg";
import registerbtn from "../../assets/registerbtn.svg";

const Hero = () => {
  return (
    <div className="hero-cont">
     <div className="herott">
      <div className="herot">
          <div className="herotl">
            <h1>Let’s Connect <br/> with Your Visitors <br/> in Real Time</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="herotr">
            <img src={herot} alt="logo sha" />
          </div>
        </div>
     </div>

      <div className="herob">
        <img src={herotr} alt="logo"/>
        <img src={herotl} alt="logo"/>
        <img src={registerbtn} alt="logo"/>
        <img src={dot} alt="logo"/>
      </div>
    </div>
  );
};

export default Hero;
