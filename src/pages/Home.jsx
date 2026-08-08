import { useEffect } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatar.png";

import { FaGithub, FaLinkedin, FaDownload, FaReact } from "react-icons/fa";

import { HiArrowRight } from "react-icons/hi2";

import "./Home.css";

export default function Home() {
  useEffect(() => {
    anime({
      targets: ".reveal",
      translateY: [80, 0],
      opacity: [0, 1],
      delay: anime.stagger(150),
      duration: 1200,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="hero">
      {/* Aurora */}

      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>

      <div className="container hero-grid">
        {/* LEFT */}

        <div className="hero-content">
          <span className="badge glass reveal ">
            <FaReact />
            <span className="space">React Developer</span>
          </span>

          <h1 className="hero-heading reveal">
            Building
            <span>Modern</span>
            Web Experiences
          </h1>

          <p className="hero-text reveal">
            Passionate React Developer creating responsive, scalable and
            beautiful applications using React, JavaScript, Laravel and modern
            UI/UX.
          </p>

          <div className="hero-btns reveal">
            <Link className="primary-btn" to="/projects">
              View Projects
              <HiArrowRight />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn glass"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          <div className="social reveal">
            <a
              href="https://github.com/UjjawalBirla"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ujjawal-birla-02310a242"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-image reveal">
          <div className="profile-card glass">
            <img src={avatar} alt="Ujjawal Birla" />
          </div>

          <div className="floating-card glass">
            <h3>2+</h3>

            <span>Years Learning</span>
          </div>

          <div className="floating-card2 glass">
            <h3>15+</h3>

            <span>Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
