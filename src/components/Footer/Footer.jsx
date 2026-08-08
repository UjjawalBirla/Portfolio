import { Link } from "react-router-dom";
import { useEffect } from "react";
import anime from "animejs";

import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  useEffect(() => {
    anime({
      targets: ".footer-reveal",
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(120),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="container footer-grid">
        {/* LEFT */}

        <div className="footer-brand footer-reveal">
          <h2>
            Ujjawal Birla<span></span>
          </h2>

          <p>
            Creating beautiful digital experiences using React, JavaScript and
            modern UI.
          </p>
        </div>

        {/* LINKS */}

        <div className="footer-links footer-reveal">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SOCIAL */}

        <div className="footer-social footer-reveal">
          <h3>Connect</h3>

          <div>
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
      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ujjawal Birla
          <FaHeart className="heart" />
        </p>

        <button onClick={scrollTop} className="scroll-top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
