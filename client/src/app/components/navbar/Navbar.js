"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaUser, FaCode, FaFileAlt, FaStar, FaCodeBranch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import "./navbarstyle.css";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar-container">
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left Side - Brand Name */}
          <Link className="nav-link fs-1 fw-bold" href="/" onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }}>
            Kenjy Jap
          </Link>

          {/* Right Side - Navigation Links */}
          <div className="d-flex">
            <ul className="navbar-nav d-flex flex-row gap-4 fs-4 fw-bold">
              <li className="nav-item">
                <Link className="nav-link" href="#hero">
                  <FaHome className="pb-1" onClick={() => scrollToSection("hero")} style={{ cursor: "pointer" }} /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#about">
                  <FaUser className="pb-1" onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }} /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#resume">
                  <FaFileAlt className="pb-1" /> Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#projects">
                  <FaCode className="pb-1" /> Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#techstack">
                  <GrLanguage className="pb-1" /> Techstack
                </Link>
              </li>
              <li className="buttonRepo nav-item d-flex justify-content-center align-items-center">
                <Link className="button-link" href="https://github.com/Kenhie94/kenjyjap.github.io">
                  <FaStar />
                  {`or\u00A0`}
                  <FaCodeBranch />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
