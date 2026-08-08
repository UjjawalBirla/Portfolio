import { useEffect } from "react";
import anime from "animejs";
import "./About.css";
import { SiC, SiCplusplus, SiNextdotjs } from "react-icons/si";
import {
  FaReact,
  FaLaravel,
  FaJava,
  FaDatabase,
  FaLaptopCode,
  FaGraduationCap,
  FaFolderOpen,
  FaAward,
  FaNodeJs,

  //   FaNextJS,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";

export default function About() {
  useEffect(() => {
    anime({
      targets: ".about-item",
      opacity: [0, 1],
      translateY: [70, 0],
      delay: anime.stagger(120),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="about">
      <div className="container">
        {/* Heading */}

        <div className="about-heading about-item">
          <span className="section-tag glass">About Me</span>

          <h2>
            Turning Ideas Into
            <span> Beautiful Applications</span>
          </h2>

          <p>
            I love building fast, responsive and modern web applications using
            React, Laravel and Java technologies.
          </p>
        </div>

        {/* Cards */}

        <div className="about-stats">
          <div className="stat-card glass about-item">
            <FaFolderOpen />
            <h3>15+</h3>
            <span>Projects</span>
          </div>

          <div className="stat-card glass about-item">
            <FaLaptopCode />
            <h3>2+</h3>
            <span>Years Learning</span>
          </div>

          <div className="stat-card glass about-item">
            <FaAward />
            <h3>100%</h3>
            <span>Passion</span>
          </div>
        </div>

        {/* Main Grid */}

        <div className="about-grid">
          {/* Left */}

          <div className="about-card glass about-item">
            <h3>Who Am I?</h3>

            <p>
              I'm a React Developer who enjoys creating elegant user interfaces
              and solving real-world problems using clean code.
            </p>

            <div className="tech-list">
              <div>
                <FaReact /> React
              </div>
              <div>
                <FaLaravel /> Laravel
              </div>
              <div>
                <FaJava /> Java
              </div>
              <div>
                <FaDatabase /> SQL
              </div>
              {/* <div>
                <FaC /> C
              </div> */}
              <div>
                <FaNodeJs /> Node.js
              </div>
              <div>
                <SiC /> C
              </div>

              <div>
                <SiCplusplus /> C++
              </div>

              <div>
                <SiNextdotjs /> Next.js
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="glass about-item space">
            <div className="timeline-item">
              <FaGraduationCap />

              <div>
                <h4>B.E Engineering</h4>

                <p>
                  Building strong fundamentals in programming, software
                  development and problem solving.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <FaLaptopCode />

              <div>
                <h4>Frontend Development</h4>

                <p>React, JavaScript, HTML, CSS, Responsive UI & Animations.</p>
              </div>
            </div>

            <div className="timeline-item">
              <FaDatabase />

              <div>
                <h4>Backend Learning</h4>

                <p>Laravel, REST APIs, MySQL and Full Stack Development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
