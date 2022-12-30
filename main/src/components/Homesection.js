/* eslint-disable jsx-a11y/anchor-is-valid */
import tryanderror from "./tryanderror.jpg";
import React from "react";

export default function Homesection() {
  return (
    <>
      <div className="container mx-auto row" style={{height: '40vh'}}>
        <div className=" bg-black w-100">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={tryanderror}
                  className="d-block w-50 mx-auto my-1"
                  alt="..."
                  style={{width: '100%'}}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      this is the other link
                    </a>{" "}
                    slide label
                  </h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
             
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
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
              data-bs-target="#carouselExampleCaptions"
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
      </div>

      <div className="row .bg-dark" style={{ textAlign: "center" }}>
        <h2>this is the heading for the body</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo animi
          nihil doloribus ratione deleniti corrupti eum, laudantium
          reprehenderit velit maiores eos quo nesciunt consequuntur excepturi
          praesentium, dolor aut temporibus iure fuga eligendi maiores unde odit
          similique suscipit, eum, consequuntur repellat praesentium quia
          architecto qui nam. Dicta soluta distinctio odio vel quisquam, odit,
          numquam minus totam hic consectetur corporis tenetur neque ea
          provident ad rem assumenda tempore. Ab quisquam tempore atque
          excepturi consequuntur cum, optio earum non perferendis neque, eaque
          mollitia animi voluptatem, expedita necessitatibus modi nobis incidunt
          labore ipsum nemo officia temporibus molestias? Itaque recusandae ea
          officiis suscipit et quod quisquam. Ab pariatur asperiores accusantium
          ipsa nemo? Nisi incidunt laborum sequi repellat fugit tempore ut.
          Facilis nostrum corporis eum sit assumenda optio sapiente obcaecati
          placeat aperiam modi labore molestias, facere quibusdam perspiciatis
          voluptates recusandae laudantium error explicabo, incidunt omnis esse
          nulla? Veritatis libero quae harum unde iure eius voluptatibus,
          aperiam quam ut sequi incidunt blanditiis dolor nemo eum debitis
          doloribus tempora nobis. Numquam, nisi.
        </p>
        <div className="row">
          <div className="col-3">
            <img
              src={tryanderror}
              alt=""
              style={{ height: "150px", width: "150px" }}
            />
          </div>
          <div className="col">

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo
            voluptate enim aperiam cupiditate magni accusamus fugiat eum
            voluptatum molestiae. Accusamus consequatur a, vitae, enim
            reiciendis cupiditate totam earum sunt inventore quo porro
            praesentium commodi et voluptatum eius temporibus vero cumque,
            dolores at. Quia maxime est sint possimus reprehenderit voluptates
            dolorum, illum deserunt ut deleniti vero eos veritatis officia,
            soluta, quo odit sit modi aperiam fugit. Minus error dolorem vero
            eum? In reprehenderit doloribus maiores voluptas provident sunt quo,
            beatae at. Perspiciatis temporibus possimus ipsa cumque illo
            recusandae accusamus velit, ratione harum! Perferendis voluptatibus
            voluptas tempora, voluptate, ut facere, expedita fugit ratione
            minima labore ipsa? Amet enim, sint iusto repellat laboriosam esse
            dolores ex illo at quidem omnis placeat pariatur!
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
