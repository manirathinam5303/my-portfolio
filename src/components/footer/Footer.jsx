import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container text-center mt-5">
        <h3 className="mb-4">Follow Me</h3>
        <div className="d-flex justify-content-center">
          <a href="mailto:your-email@example.com" className="mx-3">
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
