import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar" >
      <div className="logo">BabyCare</div>
      <ul className="nav-links">
        <li> 
          <Link to={"/"} >Home</Link>
        </li>
        <li> 
        <Link to={"/AboutUs"} >About Us</Link>
        
        </li>
        <li> 
        <Link to={"/Contact"} >Contact Us</Link>
     
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
