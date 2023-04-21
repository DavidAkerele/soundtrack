import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return <div className='nav-cont'>
    <div className="nav-left">
        <img src={logo} alt='logo sha'/>
        <ul className="list">
            <li>How it works</li>
            <li>Library</li>
            <li>Pricing</li>
        </ul>
    </div>
    <div className="nav-right">
        <button className="btnl"><p>Sign Up</p></button>
        <button className="btnr"><p>Login</p></button>
    </div>
  </div>;
};

export default Navbar;
      