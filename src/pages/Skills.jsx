import { useEffect } from "react";
import anime from "animejs";
import "./Skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";

export default function Skills() {
  useEffect(() => {
    anime({
      targets: ".skill-box",
      opacity: [0, 1],
      translateY: [70, 0],
      scale: [0.9, 1],
      delay: anime.stagger(100),
      duration: 900,
      easing: "easeOutExpo",
    });
  }, []);

  const skills = [
    {
      icon: <FaReact />,
      title: "React",
      level: "95%",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      level: "92%",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      level: "98%",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      level: "95%",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
      level: "90%",
    },
    {
      icon: <FaLaravel />,
      title: "Laravel",
      level: "82%",
    },
    {
      icon: <FaJava />,
      title: "Java",
      level: "88%",
    },
    {
      icon: <FaDatabase />,
      title: "MySQL",
      level: "85%",
    },
    {
      icon: <FaGitAlt />,
      title: "Git",
      level: "90%",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      level: "95%",
    },
  ];

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-tag glass">My Skills</span>

          <h2>
            Technologies I<span> Work With</span>
          </h2>

          <p>
            I enjoy building scalable and beautiful applications using modern
            technologies.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-box glass" key={skill.title}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.title}</h3>

              <div className="skill-progress">
                <div
                  className="progress-fill"
                  style={{
                    width: skill.level,
                  }}
                />
              </div>

              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
