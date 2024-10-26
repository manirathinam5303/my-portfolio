import React from "react";
import "./project.css";
const Project = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 ">
          <h1 className="display-4">
            Project Title: <span>Pet</span> Listing
          </h1>
          <p className="lead project_content p-5">
            The website is a user-friendly web application designed for
            browsing, searching, and managing information about pets available
            for adoption or sale. Built with React and Vite, it features a
            responsive layout using Bootstrap 5, allowing users to filter and
            view pets based on various criteria. Each pet has a dedicated
            details page showcasing essential information, including photos and
            temperament. The project highlights strong frontend development
            skills, with a focus on effective routing and responsive design,
            making it an impressive addition to any portfolio. Future
            enhancements could include user accounts, improved state management
            with Redux, and pagination for larger catalogs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
