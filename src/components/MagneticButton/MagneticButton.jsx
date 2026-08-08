import { useRef } from "react";
import "./MagneticButton.css";

export default function MagneticButton({ children, className = "", ...props }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.18;
    const moveY = (y - rect.height / 2) * 0.18;

    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.transform = "translate(0px,0px)";
  };

  return (
    <button
      ref={buttonRef}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
