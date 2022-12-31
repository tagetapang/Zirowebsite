/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top">
        
      

        <ul className="navcontainer">
          <div className="title"><h3><a href="#">AllZiro </a></h3></div>
  
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact us</a></li>
        </ul>
      </nav>  

    </>
  );
}
