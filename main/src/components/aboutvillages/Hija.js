import React from "react";
import "./vill.css";
import example from "../example.jpg"

export default function Hija() {
  return (
    <>
      <div className="biggest bg-dark">
        <h1>hija village</h1>

        <div className="contain">
          <p>
            hija is a very boring place with lots of tugs in its area Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Animi nihil
            aspernatur natus nisi ipsa exercitationem praesentium consectetur
            dolorem, ex odit minima impedit illum.
          </p>
          <ul>
            <li>pura</li>
            <li>ada</li>
            <li>tora</li>
            <li>sasta</li>
          </ul>
          <p>
            it is a not so beautiful place with lots of agricultural land near
            its boundries
          </p>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{width: "90vw"}}>
            <div className="carousel-item active">
              <img src={example} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={example} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={example} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
