import React from "react";
import "./about.css";
import Portfolio from "./Portfolio.png";

const About_Me = () => {
  return (
    <div className="container-fluid">
      <div className="row about align-items-center">
        <div className="col-sm-12 col-md-6 about_content d-flex justify-content-center justify-content-md-start text-center text-md-start">
          <h1 className="contents">
            Hello I'm{" "}
            <span>
              Manirathinam
              <br />
              Junior Frontend
            </span>{" "}
            Developer Based In India
          </h1>
        </div>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <div className="img">
            <img src={Portfolio} alt="Portfolio" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Me;
