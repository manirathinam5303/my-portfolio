import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/personaldetials"}>
          Personal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Home
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/personaldetials">
                  Personal Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactme">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
