import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import "./footerstyle.css"; 

export default function Footer() {
  return (
    <footer className="footerContainer d-flex justify-content-between align-items-center">

      {/* Left - Name */}
      <div className="footer-text">
        <p>© Kenjy Jap 2025</p>
      </div>

      {/* Right Side - Social Links */}
      <div className="socialIcons">
        <a href="https://github.com/Kenhie94" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          <FaGlobe />
        </a>
      </div>
    </footer>
  );
}
