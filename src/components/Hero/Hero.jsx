import "./Hero.css";
import { motion } from "framer-motion";
import avatar from "../../assets/images/avatar.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <motion.p
          className="hello"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="wave">👋</span> Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ujjawal Birla
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          React Developer
        </motion.h2>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Passionate React Developer focused on building responsive, modern, and
          user-friendly web applications with clean UI and smooth user
          experiences.
        </motion.p>

        <div className="hero-buttons">
          <button className="primary-btn">Hire Me</button>

          <button className="secondary-btn">Download CV</button>
        </div>
      </div>

      <motion.div
        className="hero-right"
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      >
        <img
          src={avatar}
          alt="avatar"
          style={{
            width: "250px",
            border: "2px solid red",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
