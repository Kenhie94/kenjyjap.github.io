"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import "./style.css";

export default function Navbar() {
  return (
    <nav className="Header-Container navbar navbar-expand-lg px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left Side - Brand Name */}
        <Link className="navbar-brand fs-1 fw-bold" href="#">
          Kenjy Jap
        </Link>

        {/* Right Side - Navigation Links */}
        <div className="d-flex">
          <ul className="navbar-nav d-flex flex-row gap-4 fs-4 fw-bold">
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">
                <FaUser /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#projects">
                <FaCode /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#resume">
                <FaFileAlt /> Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="https://github.com/Kenhie94/kenjyjap.github.io">
                Github Repo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
