"use client";

import React from "react";
import Link from "next/link";
import "./style.css";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left Side - Brand Name */}
          <Link className="nav-link fs-1 fw-bold" href="#">
            Kenjy Jap
          </Link>

          {/* Right Side - Navigation Links */}
          <div className="d-flex">
            <ul className="navbar-nav d-flex flex-row gap-4 fs-4 fw-bold">
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#resume">
                  Resume
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
    </header>
  );
}
