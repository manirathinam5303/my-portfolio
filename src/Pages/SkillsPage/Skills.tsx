import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaGit,
  FaReact,
} from "react-icons/fa";
import "./skill.css";
const Skills = () => {
  return (
    <div className="container-fluid">
      <div className="row skill_sets text-center  mt-5 ">
        <h1 className="col-12 mb-4 mt-4">
          My <span>Skills</span>
        </h1>

        <div className="col-sm-6 col-md-4 col-lg-4 mb-4  d-flex justify-content-center ">
          <div className="skill_icon">
            <FaHtml5 size={50} />
            <h3>HTML5</h3>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4 mb-4    d-flex justify-content-center">
          <div className="skill_icon">
            <FaCss3 size={50} />
            <h3>CSS3</h3>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4 mb-4   d-flex justify-content-center">
          <div className="skill_icon">
            <FaJs size={50} />

            <h3>JAVASCRIPT</h3>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4 mb-4  d-flex justify-content-center">
          <div className="skill_icon">
            <FaBootstrap size={50} />
            <h3>BOOTSTRAP</h3>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4 mb-4  d-flex justify-content-center">
          <div className="skill_icon">
            <FaGit size={50} />

            <h3>GITHUB</h3>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4 mb-4  d-flex justify-content-center">
          <div className="skill_icon">
            <FaReact size={50} />
            <h3>REACT JS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
