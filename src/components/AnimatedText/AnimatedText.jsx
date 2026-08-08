import { useEffect, useRef } from "react";
import anime from "animejs";
import "./AnimatedText.css";

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  gradient = false,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    anime({
      targets: letters,
      opacity: [0, 1],
      translateY: [60, 0],
      rotateX: [-90, 0],
      delay: anime.stagger(35, {
        start: delay,
      }),
      duration: 700,
      easing: "easeOutExpo",
    });
  }, [delay]);

  return (
    <h2
      ref={textRef}
      className={`
        animated-text
        ${gradient ? "gradient-text" : ""}
        ${className}
      `}
    >
      {text.split("").map((char, index) => (
        <span key={index} className="letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}
