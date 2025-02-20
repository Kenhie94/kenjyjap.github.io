import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import "./footerstyle.css";

export default function Footer() {
  return (
    <div>
      <div className="footerCard d-flex flex-column justify-content-center mx-auto">
        <h3>FIND ME ON</h3>
        <p>
          Feel free to <span><a href="https://www.linkedin.com/in/kenjyjap/">connect</a></span> with me
        </p>
        <div className="firstSocialIcons">
          <a className="px-3" href="https://github.com/Kenhie94" target="_blank">
            <FaGithub />
          </a>
          <a className="px-3"  href="https://www.linkedin.com/in/kenjyjap/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a className="px-3"  href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </div>
      </div>
      <footer className="footerContainer d-flex justify-content-between align-items-center">
        {/* Left - Name */}
        <div className="footer-text">
          <p>© Kenjy Jap 2025</p>
        </div>

        {/* Right Side - Social Links */}
        <div className="secondSocialIcons">
          <a href="https://github.com/Kenhie94" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kenjyjap/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </div>
      </footer>
    </div>
  );
}
