import "./techstackstyle.css";

import React from "react";
import { FaCode, FaServer, FaTools, FaLaptopCode, FaHtml5, FaNodeJs, FaVuejs, FaReact, FaGithub, FaGitlab, FaBootstrap } from "react-icons/fa";
import { TbSql, TbBrandNextjs, TbBrandGraphql, TbPassword } from "react-icons/tb"
import { SiMysql, SiPostgresql, SiJavascript, SiTypescript, SiMongodb, SiPostman, SiInsomnia, SiTailwindcss, SiExpress, SiMongoose } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GiElephant } from "react-icons/gi";
import { MdNoEncryption } from "react-icons/md";


// Sample Data with React Icons
const techCategories = [
  {
    title: "Languages",
    icon: <FaCode size={30} />,
    technologies: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "SQL", icon: <TbSql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Frameworks",
    icon: <FaServer size={30} />,
    technologies: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
    ],
  },
  {
    title: "Developer Tools",
    icon: <FaTools size={30} />,
    technologies: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitLab", icon: <FaGitlab /> },
      { name: "Visual Studio", icon: <BiLogoVisualStudio /> },
      { name: "MongoDB Compass", icon: <SiMongodb /> },
      { name: "pgAdmin", icon: <GiElephant /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Insomnia", icon: <SiInsomnia /> },
      { name: "GraphQL Playground", icon: <TbBrandGraphql /> },
    ],
  },
  {
    title: "Libraries",
    icon: <FaLaptopCode size={30} />,
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "bcrypt.js", icon: <MdNoEncryption /> },
      { name: "JWT", icon: <TbPassword /> },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-light text-center">My Techstack</h2>
      <div className="row">
        {techCategories.map((category, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className={"card techCard"}>
              <div className="card-body text-center">
                {category.icon}
                <h4 className="fw-bold mt-2">{category.title}</h4>
                <div className="techLi">
                  {category.technologies.map((tech, i) => (
                    <span key={i} className="techIt">
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
