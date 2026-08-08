import { useEffect, useState } from "react";
import anime from "animejs";
import "./Experience.css";

import {
  FaGraduationCap,
  FaCode,
  FaJava,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa";

export default function Experience() {
  const [progress, setProgress] = useState(0);

  // =========================
  // CARD ANIMATION
  // =========================

  useEffect(() => {
    anime({
      targets: ".exp-card",
      opacity: [0, 1],
      translateY: [80, 0],
      delay: anime.stagger(150),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  // =========================
  // MOVING TIMELINE
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".timeline");

      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();

      const start = window.innerHeight * 0.75;
      const end = window.innerHeight * 0.25;

      const total = rect.height + start - end;

      const current = start - rect.top;

      let percentage = (current / total) * 100;

      percentage = Math.max(0, Math.min(100, percentage));

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // EXPERIENCE DATA
  // =========================

  const experiences = [
    {
      title: "Engineering Journey",
      company: "College",
      duration: "2022 - 2023",
      icon: <FaGraduationCap />,
      description:
        "Started my engineering journey and built a strong foundation in programming, computer fundamentals and problem solving.",
      tech: ["Programming", "Problem Solving"],
    },

    {
      title: "C & C++ Programming",
      company: "Learning & Practice",
      duration: "2023",
      icon: <FaCode />,
      description:
        "Learned C and C++ programming with a focus on programming fundamentals, logic building and problem solving.",
      tech: ["C", "C++", "Programming"],
    },

    {
      title: "Java Development",
      company: "Learning & Practice",
      duration: "2024",
      icon: <FaJava />,
      description:
        "Learned Core Java, OOP, Collections, exception handling, data structures and problem solving.",
      tech: ["Java", "OOP", "Collections", "DSA"],
    },

    {
      title: "Java Developer Intern",
      company: "Internship",
      duration: "2025",
      icon: <FaLaptopCode />,
      description:
        "Completed a Java development internship and gained practical experience through programming tasks, application development and problem solving.",
      tech: ["Java", "OOP", "DSA"],
    },

    {
      title: "Web Development",
      company: "Learning & Projects",
      duration: "Late 2025",
      icon: <FaCode />,
      description:
        "Started web development and learned HTML, CSS and JavaScript while building responsive and interactive websites.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    },

    {
      title: "React Developer",
      company: "Learning & Projects",
      duration: "2026",
      icon: <FaReact />,
      description:
        "Started working with React and Vite, building responsive applications using components, hooks, routing, APIs and modern UI techniques.",
      tech: ["React", "Vite", "JavaScript", "API"],
    },

    {
      title: "Full Stack Developer Intern",
      company: "Current Internship",
      duration: "2026 - Present",
      icon: <FaLaptopCode />,
      description:
        "Currently working with Node.js, Next.js and Laravel + React, gaining practical experience in frontend, backend, REST APIs and full-stack application development.",
      tech: ["Node.js", "Next.js", "Laravel", "React", "REST API"],
    },
  ];

  return (
    <section className="experience">
      <div className="container">
        {/* HEADER */}

        <div className="experience-header">
          <span className="section-tag glass">Experience</span>

          <h2>
            My Professional
            <span> Journey</span>
          </h2>

          <p>
            My learning journey, internships and practical development
            experience that shaped my technical skills.
          </p>
        </div>

        {/* TIMELINE */}

        <div className="timeline">
          {/* ONLY MOVING LINE */}
          <div
            className="timeline-progress"
            style={{
              height: `${progress}%`,
            }}
          ></div>

          {/* EXPERIENCE CARDS */}

          {experiences.map((item, index) => (
            <div key={index} className="exp-card glass">
              {/* ICON */}

              <div className="exp-icon">{item.icon}</div>

              {/* CONTENT */}

              <div className="exp-content">
                <span className="duration">{item.duration}</span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

                {/* TECH STACK */}

                <div className="tech-stack">
                  {item.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
