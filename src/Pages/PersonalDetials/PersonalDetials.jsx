import React from "react";
import "./personal.css";

const PersonalDetails = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className="personal-detail">Name: Manirathinam</h4>
          <h4 className="personal-detail">
            Course: B.Tech in Information Technology
          </h4>
          <h4 className="personal-detail">Role: Frontend Developer</h4>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
