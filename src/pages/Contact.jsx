import { useEffect } from "react";
import anime from "animejs";
import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";

export default function Contact() {
  useEffect(() => {
    anime({
      targets: ".contact-item",
      opacity: [0, 1],
      translateY: [70, 0],
      delay: anime.stagger(120),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm("service_5uxuojh", "template_2nxf3q6", e.target, {
        publicKey: "eUnDF97H6yZzbL3dO",
      });

      alert("Message sent successfully! 🚀");

      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Message send nahi hua. Please try again.");
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header contact-item">
          <span className="section-tag glass">Contact Me</span>

          <h2>
            Let's Build Something
            <span> Amazing Together</span>
          </h2>

          <p>
            Have a project, internship or opportunity? Feel free to contact me.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT */}

          <div className="contact-info">
            <div className="info-card glass contact-item">
              <FaEnvelope />

              <div>
                <h4>Email</h4>

                <p>yourmail@gmail.com</p>
              </div>
            </div>

            <div className="info-card glass contact-item">
              <FaPhone />

              <div>
                <h4>Phone</h4>

                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="info-card glass contact-item">
              <FaLocationDot />

              <div>
                <h4>Location</h4>

                <p>India</p>
              </div>
            </div>

            <div className="social-links contact-item">
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

          <form
            className="contact-form glass contact-item"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <input type="text" placeholder="Subject" required />
            </div>

            <div className="input-group">
              <textarea rows="6" placeholder="Your Message" required />
            </div>

            <button type="submit">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
