import { useEffect } from "react";
import anime from "animejs";
import "./Projects.css";
import movie from "../assets/images/projects/movie.png";
import todo from "../assets/images/projects/todo.png";
import weather from "../assets/images/projects/weather.png";
import crypto from "../assets/images/projects/crypto_info.png";
import expenses from "../assets/images/projects/Expenses.png";
import currency from "../assets/images/projects/currency.png";
import Portfolio from "../assets/images/projects/Portfolio.png";

import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function Projects() {
  useEffect(() => {
    anime({
      targets: ".project-card",
      opacity: [0, 1],
      translateY: [80, 0],
      scale: [0.9, 1],
      delay: anime.stagger(150),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      image: Portfolio,
      featured: true,
      description:
        "Modern premium portfolio built using React, Anime.js, Glassmorphism and Responsive UI.",
      tech: ["React", "Anime.js", "CSS", "Vite"],
      github: "https://github.com/UjjawalBirla/My-Portfolio",
      live: "#",
    },

    {
      title: "Movie Explorer",
      image: movie,
      description:
        "Movie search application using OMDb API with responsive UI.",
      tech: ["React", "OMDb API", "CSS"],
      github: "https://github.com/UjjawalBirla",
      live: "#",
    },

    {
      title: "React TODO App",
      image: todo,
      description:
        "Task management application with local storage and filtering.",
      tech: ["React", "JavaScript", "LocalStorage"],
      github: "https://github.com/UjjawalBirla",
      live: "#",
    },

    {
      title: "Weather App",
      image: weather,
      description:
        "Weather forecasting application using real-time weather API.",
      tech: ["JavaScript", "API", "CSS"],
      github: "https://github.com/UjjawalBirla",
      live: "#",
    },

    {
      title: "Crypto Info",
      image: crypto,
      description:
        "Cryptocurrency information website showing live market data.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/UjjawalBirla",
      live: "#",
    },

    {
      title: "Expense Tracker",
      image: expenses,
      description:
        "Expense management application with add, delete and history features.",
      tech: ["React", "LocalStorage", "CSS"],
      github: "https://github.com/UjjawalBirla",
      live: "#",
    },

    {
      title: "Currency Converter",
      image: currency,
      description: "Currency conversion application using exchange rate API.",
      tech: ["React", "API", "JavaScript"],
      github: "https://github.com/UjjawalBirla",
      live: "#",
    },

    // {
    //   title: "Pharma eQMS Dashboard",
    //   image: pharma,
    //   description:
    //     "Enterprise Pharma Quality Management System developed using Laravel with modules like Deviation, CAPA, Change Control, Audit and Vendor Management.",
    //   tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    //   github: "https://github.com/UjjawalBirla",
    //   live: "#",
    // },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>
            Featured <span>Work</span>
          </h2>

          <p>
            Some of my favorite projects built using modern technologies and
            best practices.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card glass">
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                {project.featured && (
                  <div className="featured">
                    <FaStar />
                    Featured
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
