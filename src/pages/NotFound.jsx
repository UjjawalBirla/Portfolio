import { Link } from "react-router-dom";
import { useEffect } from "react";
import anime from "animejs";

import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    anime({
      targets: ".error-content",
      opacity: [0, 1],
      scale: [0.9, 1],
      translateY: [50, 0],
      duration: 900,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="not-found">
      <div className="container">
        <div className="error-content glass">
          <h1>404</h1>

          <h2>Page Not Found</h2>

          <p>
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <Link to="/" className="error-btn">
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
}
