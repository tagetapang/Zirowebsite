/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-3" href="#"  style={{color: 'white'}}>
            AllZiro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color: 'white'}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  style={{color: 'white'}}>
                  about us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  style={{color: 'white'}}>
                  contact us
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
