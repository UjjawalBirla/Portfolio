import { useEffect, useRef } from "react";
import anime from "animejs";
import "./CursorGlow.css";

export default function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Mobile devices par disable
    if (window.innerWidth < 992) return;

    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      anime({
        targets: cursor,
        left: e.clientX,
        top: e.clientY,
        duration: 400,
        easing: "easeOutExpo",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor-glow" ref={cursorRef}></div>;
}
