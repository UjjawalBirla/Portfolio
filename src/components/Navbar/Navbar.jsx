import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import anime from "animejs";
import { HiOutlineMoon, HiOutlineSun, HiBars3, HiXMark } from "react-icons/hi2";
import useTheme from "../../hooks/useTheme.jsx";

import "./Navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  /* =========================
     NAVBAR ANIMATION
  ========================= */

  useEffect(() => {
    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateY: [-25, 0],
      delay: anime.stagger(90),
      duration: 800,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".logo",
      opacity: [0, 1],
      translateX: [-40, 0],
      duration: 900,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".theme-btn",
      opacity: [0, 1],
      scale: [0.6, 1],
      delay: 600,
      duration: 700,
      easing: "easeOutBack",
    });
  }, []);

  /* =========================
     MOBILE MENU
  ========================= */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      anime({
        targets: ".mobile-menu",
        translateX: ["100%", "0%"],
        duration: 450,
        easing: "easeOutExpo",
      });

      anime({
        targets: ".mobile-link",
        opacity: [0, 1],
        translateX: [40, 0],
        delay: anime.stagger(70),
        duration: 500,
        easing: "easeOutExpo",
      });
    } else {
      anime({
        targets: ".mobile-menu",
        translateX: ["0%", "100%"],
        duration: 350,
        easing: "easeInExpo",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================
     CLOSE MENU ON RESIZE
  ========================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* LOGO */}

        <NavLink to="/" className="logo">
          Ujjawal Birla<span></span>
        </NavLink>

        {/* DESKTOP LINKS */}

        <nav className="nav-links">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS */}

        <div className="nav-actions">
          <button
            className="theme-btn glass"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <HiOutlineSun size={20} />
            ) : (
              <HiOutlineMoon size={20} />
            )}
          </button>

          <button
            className="menu-btn glass"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiBars3 size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <div className={`mobile-menu glass ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <HiXMark size={30} />
        </button>

        {links.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
