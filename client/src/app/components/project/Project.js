"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Import icons
import styles from "./projectstyle.css"; // Import custom CSS

// Sample Project Data
const projects = [
  {
    title: "Capital Coach",
    description: "A financial management tool designed to empower individuals with smart financial planning, integrating simplicity with effectiveness.",
    image: "/images/capital-coach.png",
    github: "https://github.com/example/capital-coach",
    demo: "#",
  },
  {
    title: "PokePC",
    description: "PokePC is a Pokedex & a user-friendly web app for managing and organizing Pokemon collections, creating battle teams, and tracking Pokemon details, designed for enthusiasts at all levels.",
    image: "/images/pokepc.png",
    github: "https://github.com/example/pokepc",
    demo: "#",
  },
  {
    title: "PrivacyXPresso",
    description: "PrivacyXPresso simplifies data deletion from big companies, enhancing online security with easy-to-use local tools.",
    image: "/images/privacyx.png",
    github: "https://github.com/example/privacyx",
    demo: "#",
  },
  {
    title: "Portfolio",
    description: "Built in React, this portfolio website is built to last and showcase my best work and skills. Thanks for checking it out!",
    image: "/images/portfolio.png",
    github: "https://github.com/example/portfolio",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="container mt-5">
      <h2 className="fw-bold text-light">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className={`card ${styles.projectCard}`}>
              <img src={project.image} className="card-img" alt={project.title} />
              <div className={`card-img-overlay ${styles.overlay}`}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className="d-flex justify-content-center gap-3">
                  <Link href={project.github} target="_blank" className={styles.link}>
                    <FaGithub /> See on GitHub
                  </Link>
                  {project.demo && (
                    <Link href={project.demo} target="_blank" className={styles.link}>
                      <FaGlobe /> Try it Out
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Coming Soon */}
      <div className="text-center mt-5">
        <div className={`card ${styles.comingSoonCard}`}>
          <h3>More Projects Coming Soon...</h3>
          <p>Stay tuned!</p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="https://github.com/yourprofile" className={styles.link}>
              <FaGithub /> See on GitHub
            </Link>
            <Link href="#" className={styles.link}>
              <FaGlobe /> Try it Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
